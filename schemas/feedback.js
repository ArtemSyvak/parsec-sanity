export default {
    name: 'feedbacks',
    title: 'Feedbacks',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',      
        type: 'string',
      },      
      {
        name: 'company_avatar',
        title: 'Company Avatar',
        type: 'image',
      },
      {
        title: 'Feedback Text', 
        name: 'feedbackText',
        type: 'array', 
        of: [{type: 'block'}]
      },   
    ],
  
    preview: {
      select: {
        title: 'name',      
      },
    },
  }
  