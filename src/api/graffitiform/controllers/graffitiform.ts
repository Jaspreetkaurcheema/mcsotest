import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::graffitiform.graffitiform', ({ strapi }) => ({
  async create(ctx) {
    const { files, body } = ctx.request;
    
const parsedData = JSON.parse(body.data);


    

 
    let uploadedFileId = null;

    if (files?.upload) {
      const uploaded = await strapi.plugins.upload.services.upload.upload({
        data: {},
        files: files.upload,
      });

      if (uploaded && uploaded.length > 0) {
        uploadedFileId = uploaded[0].id;
      }
    }
const data1 = {
  location: parsedData.location,
  comment_location: parsedData.comment_location,
  comment_description: parsedData.comment_description,
  email: parsedData.email,
  publishedAt: new Date().toISOString(),

 upload: uploadedFileId
};
    const emailMap = {
      'City of Key West (Note: This will send an email to the Key West Police Department not the M.C.S.O.)': 'webKW@keysso.net',
      'Lower Keys (Key West to the South End of the Seven Mile Bridge)': 'webDist1@keysso.net',
      'Marathon (Incorporated)': 'webDist45@keysso.net',
      'North of Marathon (Unincorporated) to Islamorada': 'webDist45@keysso.net',
      'Islamorada': 'webDist6@keysso.net',
      'North of Islamorada through Key Largo': 'webDist7@keysso.net',
    };

    const toEmail = emailMap[parsedData.location];

    const entry = await strapi.entityService.create('api::graffitiform.graffitiform', {
      data: {
       ...data1
      },
      populate: ['upload'],
    });
await strapi.plugins['email'].services.email.send({
      to: toEmail,
    from:'manu@webworldexpertsindia.com',
      subject: 'New Graffiti Report Submitted',
      text: `Details:\n${JSON.stringify(body, null, 2)}`,
      html: `
        <h3>New Graffiti Report Submitted</h3>
        <p><strong>Location:</strong> ${parsedData.location}</p>
        <p><strong>Comment on Location:</strong> ${parsedData.comment_location}</p>
        <p><strong>Description:</strong> ${parsedData.comment_description}</p>
        <p><strong>Email:</strong> ${parsedData.email}</p>
      `,
    });
    return ctx.send({ data: entry });
  },
}));
