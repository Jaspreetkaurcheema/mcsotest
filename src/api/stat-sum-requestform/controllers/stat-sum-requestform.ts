import { factories } from '@strapi/strapi'



export default factories.createCoreController('api::stat-sum-requestform.stat-sum-requestform', ({ strapi }) => ({
  async create(ctx) {
    const { body } = ctx.request;

    // Create the stat-sum-request entry
const entry = await strapi.entityService.create('api::stat-sum-requestform.stat-sum-requestform', {
  data: {
    ...body.data,
    publishedAt: new Date().toISOString(), // Automatically publish the entry
  },
});

 await strapi.plugins['email'].services.email.send({
      to: 'centralrecords@keysso.net',
    from:'manu@webworldexpertsindia.com',
      subject: 'New Stat Summary Request Submitted',
      text: `Details:\n${JSON.stringify(body, null, 2)}`,
      html: `
        <h3>New Stat Summary Request</h3>
        <p><strong>Full Name:</strong> ${body.data.full_name}</p>
        <p><strong>Email:</strong> ${body.data.email}</p>
        <p><strong>Telephone:</strong> ${body.data.telephone}</p>
        <p><strong>Year Requested:</strong> ${body.data.year_requested}</p>
        <p><strong>Comment:</strong> ${body.data.comment}</p>
      `,
    });
    // Return the newly created entry
    return ctx.send({ data: entry });
  },
}));
