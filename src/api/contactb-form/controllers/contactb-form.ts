import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::contactb-form.contactb-form', ({ strapi }) => ({
  async create(ctx) {
    const body = ctx.request.body;
    const data = body.data;

    // Create the entry in Strapi
    const entry = await strapi.entityService.create('api::contactb-form.contactb-form', {
      data: {
        ...data,
        publishedAt: new Date().toISOString(),
      },
    });

    // Send email
    await strapi.plugins['email'].services.email.send({
      to: 'ALinhardt@keysso.net',
    from:'manu@webworldexpertsindia.com',
      subject: 'New Contact B Form Submission',
      text: `New Contact B Form submitted by ${data.owner_email || 'N/A'}`,
      html: `
        <h3>New Contact B Form Submission</h3>
        <p><strong>Business Name:</strong> ${data.business_name || 'N/A'}</p>
        <p><strong>Physical Address:</strong> ${data.Physicaladdress || 'N/A'}</p>
        <p><strong>Business Telephone:</strong> ${data.Businesstelephone || 'N/A'}</p>
        
        <p><strong>Owner Name:</strong> ${data.owner_name || 'N/A'}</p>
        <p><strong>Owner Address:</strong> ${data.owner_address || 'N/A'}</p>
        <p><strong>Owner Email:</strong> ${data.owner_email || 'N/A'}</p>
        <p><strong>If Other:</strong> ${data.if_other || 'N/A'}</p>
        <p><strong>Contact Type:</strong> ${data.contact_type || 'N/A'}</p>
        
        <p><strong>Video Surveillance:</strong> ${data.video_surveillance || 'N/A'}</p>
        <p><strong>Building Equipped:</strong> ${data.building_equiped || 'N/A'}</p>
        <p><strong>System Monitored:</strong> ${data.systemmonitored || 'N/A'}</p>
        <p><strong>Alarm Company Info:</strong> ${data.alarm_company_info || 'N/A'}</p>
        <p><strong>Premises Alarm:</strong> ${data.premises_alarm || 'N/A'}</p>
        
        <p><strong>Contact Name & Address:</strong> ${data.contact_name_address || 'N/A'}</p>
        <p><strong>Home Telephone:</strong> ${data.home_telephone || 'N/A'}</p>
        <p><strong>Mobile Telephone:</strong> ${data.mobile_telephone || 'N/A'}</p>
        
        <p><strong>Name & Address:</strong> ${data.name_address || 'N/A'}</p>
        <p><strong>Telephone:</strong> ${data.telephone || 'N/A'}</p>
        <p><strong>Mobile:</strong> ${data.mobile || 'N/A'}</p>
        
        <p><strong>Address:</strong> ${data.address || 'N/A'}</p>
        <p><strong>Telephone 1:</strong> ${data.telephone1 || 'N/A'}</p>
        <p><strong>Mobile 1:</strong> ${data.mobile1 || 'N/A'}</p>
        
        <p><strong>Contact Update:</strong> ${data.contact_update || 'N/A'}</p>
      `,
    });

    return ctx.send({ data: entry });
  },
}));
