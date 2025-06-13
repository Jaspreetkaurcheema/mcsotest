import { factories } from '@strapi/strapi'



export default factories.createCoreController('api::contact-form.contact-form', ({ strapi }) => ({
  async create(ctx) {
    const { body } = ctx.request;

    // Create the stat-sum-request entry
const entry = await strapi.entityService.create('api::contact-form.contact-form', {
  data: {
    ...body.data,
    publishedAt: new Date().toISOString(), // Automatically publish the entry
  },
});



 await strapi.plugins['email'].services.email.send({
      to: 'web@keysso.net',
    from:'manu@webworldexpertsindia.com',
      subject: 'New Stat Summary Request Submitted',
      text: `Details:\n${JSON.stringify(body, null, 2)}`,
      html: `
        <h3>New Contact us</h3>
        <p><strong>Email:</strong> ${body.data.email}</p>
  
        <p><strong>Message:</strong> ${body.data.message}</p>
      `,
    });
    // Return the newly created entry
    return ctx.send({ data: entry });
  },
}));
