import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::complaintform.complaintform', ({ strapi }) => ({
  async create(ctx) {
    const body = ctx.request.body;

    const data = body.data;

    // Map location to corresponding email address
const emailMap = {
  'Headquarters (or not sure)': 'ALinhardt@keysso.net', // ← Add the correct email if different
  'Lower Keys (Key West to the South End of the Seven Mile Bridge)': 'webDist1@keysso.net',
  'Marathon (Incorporated)': 'webDist45@keysso.net',
  'North of Marathon (Unincorporated) to Islamorada': 'webDist45@keysso.net',
  'Islamorada': 'webDist6@keysso.net',
  'North of Islamorada through Key Largo': 'webDist7@keysso.net',
};

    const toEmail = emailMap[data.location];

    console.log(toEmail, 'toEmail' ,data)

    // Create the entry in Strapi
    const entry = await strapi.entityService.create('api::complaintform.complaintform', {
      data: {
        ...data,
        publishedAt: new Date().toISOString(),
      },
    });

    // Send email
    await strapi.plugins['email'].services.email.send({
      to: toEmail,
    from:'manu@webworldexpertsindia.com',
      subject: 'New Complaint Submitted',
      text: `New complaint received from ${data.email}`,
      html: `
        <h3>New Complaint Submitted</h3>
        <p><strong>Location:</strong> ${data.location || 'N/A'}</p>
        <p><strong>Description:</strong> ${data.Description || 'N/A'}</p>
        <p><strong>Comment:</strong> ${data.comment || 'N/A'}</p>
        <p><strong>Member Name or Badge:</strong> ${data.member_name_or_badge || 'N/A'}</p>
        <p><strong>Telephone:</strong> ${data.telephone || 'N/A'}</p>
        <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
      `,
    });

    return ctx.send({ data: entry });
  },
}));
