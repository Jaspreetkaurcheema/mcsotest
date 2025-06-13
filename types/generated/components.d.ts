import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentSectionContentList extends Schema.Component {
  collectionName: 'components_content_section_content_lists';
  info: {
    displayName: 'contentList';
    description: '';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ComponentsWarrantSection extends Schema.Component {
  collectionName: 'components_components_warrant_sections';
  info: {
    displayName: 'warrant-section';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    bond: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    charges: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    address: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface ComponentsTextList extends Schema.Component {
  collectionName: 'components_components_text_lists';
  info: {
    displayName: 'Text List';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String;
  };
}

export interface ComponentsTestimonials extends Schema.Component {
  collectionName: 'components_components_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    occupation: Attribute.String;
    photo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    content: Attribute.Text;
  };
}

export interface ComponentsSubChapters extends Schema.Component {
  collectionName: 'components_components_sub_chapters';
  info: {
    displayName: 'Sub Chapters';
    icon: 'file';
    description: '';
  };
  attributes: {
    file: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface ComponentsSocial extends Schema.Component {
  collectionName: 'components_components_socials';
  info: {
    displayName: 'Social';
    icon: 'hashtag';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['facebook', 'instagram', 'mail']>;
    url: Attribute.String;
    text: Attribute.String;
  };
}

export interface ComponentsSectionmedia extends Schema.Component {
  collectionName: 'components_components_sectionmedias';
  info: {
    displayName: 'sectionmedia';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    file: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ComponentsSection extends Schema.Component {
  collectionName: 'components_components_sections';
  info: {
    displayName: 'section';
    description: '';
  };
  attributes: {
    FirstMiddle: Attribute.String;
    LastName: Attribute.String;
    ids: Attribute.String;
    Charges: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    Age: Attribute.String;
    Bond: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    location: Attribute.Text;
  };
}

export interface ComponentsSectionNavigation extends Schema.Component {
  collectionName: 'components_components_section_navigations';
  info: {
    displayName: 'Section Navigation';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsReleaseForm extends Schema.Component {
  collectionName: 'components_components_release_forms';
  info: {
    displayName: 'ReleaseForm';
    description: '';
  };
  attributes: {
    lastname: Attribute.String;
    firstname: Attribute.String;
    dob: Attribute.String;
    age: Attribute.String;
    Facility: Attribute.String;
    bookingtime: Attribute.String;
    Releasetime: Attribute.String;
    bondamount: Attribute.String;
  };
}

export interface ComponentsPlainSections extends Schema.Component {
  collectionName: 'components_components_plain_sections';
  info: {
    displayName: 'Plain Sections';
    icon: 'filter';
    description: '';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ComponentsPhones extends Schema.Component {
  collectionName: 'components_components_phones';
  info: {
    displayName: 'Phones';
    icon: 'phone';
  };
  attributes: {
    phone: Attribute.String;
  };
}

export interface ComponentsPersonnelDivision extends Schema.Component {
  collectionName: 'components_components_personnel_divisions';
  info: {
    displayName: 'Personnel Division';
    icon: 'grid';
    description: '';
  };
  attributes: {
    division: Attribute.String;
    personnel: Attribute.Component<'components.personel', true>;
  };
}

export interface ComponentsPersonel extends Schema.Component {
  collectionName: 'components_components_personels';
  info: {
    displayName: 'Personel';
    icon: 'user';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    email: Attribute.String;
    phones: Attribute.Component<'components.phones', true>;
    address: Attribute.Text;
    hyperlink: Attribute.String;
  };
}

export interface ComponentsOrders extends Schema.Component {
  collectionName: 'components_components_orders';
  info: {
    displayName: 'Orders';
    icon: 'grid';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    chapters: Attribute.Component<'components.chapters', true>;
  };
}

export interface ComponentsOpenPosition extends Schema.Component {
  collectionName: 'components_components_open_positions';
  info: {
    displayName: 'Open Position';
    icon: 'archive';
  };
  attributes: {
    title: Attribute.String;
    hiring_platform_url: Attribute.String;
  };
}

export interface ComponentsList extends Schema.Component {
  collectionName: 'components_components_lists';
  info: {
    displayName: 'List';
    icon: 'bulletList';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface ComponentsJobRequirements extends Schema.Component {
  collectionName: 'components_components_job_requirements';
  info: {
    displayName: 'Job Requirements';
    icon: 'car';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    requirements: Attribute.Component<'components.list', true>;
  };
}

export interface ComponentsJailRuleSections extends Schema.Component {
  collectionName: 'components_components_jail_rule_sections';
  info: {
    displayName: 'Jail Rule Sections';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface ComponentsImgsection extends Schema.Component {
  collectionName: 'components_components_imgsections';
  info: {
    displayName: 'imgsection';
  };
  attributes: {};
}

export interface ComponentsFormfields extends Schema.Component {
  collectionName: 'components_components_formfields';
  info: {
    displayName: 'formfields';
  };
  attributes: {};
}

export interface ComponentsFinancial extends Schema.Component {
  collectionName: 'components_components_financials';
  info: {
    displayName: 'financial';
    icon: 'file';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    document: Attribute.Media<'files'> & Attribute.Required;
    preview_document: Attribute.Media<'files'>;
  };
}

export interface ComponentsFarnsection extends Schema.Component {
  collectionName: 'components_components_farnsections';
  info: {
    displayName: 'img-content';
    description: '';
  };
  attributes: {
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface ComponentsFarmsection extends Schema.Component {
  collectionName: 'components_components_farmsections';
  info: {
    displayName: 'farmsection';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface ComponentsFallencomponent extends Schema.Component {
  collectionName: 'components_components_fallencomponents';
  info: {
    displayName: 'fallencomponent';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsChapters extends Schema.Component {
  collectionName: 'components_components_chapters';
  info: {
    displayName: 'Chapters';
    icon: 'file';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    file: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sub_chapters: Attribute.Component<'components.sub_chapters', true>;
  };
}

export interface ComponentsCallsComponent extends Schema.Component {
  collectionName: 'components_components_calls_components';
  info: {
    displayName: 'callsComponent';
    description: '';
  };
  attributes: {
    incident: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    complaint: Attribute.String;
    timereceived: Attribute.String;
    priority: Attribute.String;
    location: Attribute.String;
  };
}

export interface ComponentsCalllogs extends Schema.Component {
  collectionName: 'components_components_calllogs';
  info: {
    displayName: 'calllogs';
  };
  attributes: {
    number: Attribute.String;
    incident: Attribute.String;
    date: Attribute.String;
    time: Attribute.String;
    location: Attribute.String;
    complaint: Attribute.String;
    disposition: Attribute.String;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String;
    variant: Attribute.Enumeration<
      [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        'body',
        'muted',
        'white',
        'outline-primary',
        'outline-secondary',
        'outline-success',
        'outline-danger',
        'outline-warning',
        'outline-info',
        'outline-light',
        'outline-dark'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
    size: Attribute.Enumeration<['sm', 'md', 'lg']> & Attribute.DefaultTo<'md'>;
  };
}

export interface ComponentsArrestSection extends Schema.Component {
  collectionName: 'components_components_arrest_sections';
  info: {
    displayName: 'ArrestSection';
    description: '';
  };
  attributes: {
    FirstName: Attribute.String;
    lastName: Attribute.String;
    ArrestDate: Attribute.Date;
    ArrestTime: Attribute.String;
    Age: Attribute.String;
    Gender: Attribute.String;
    Race: Attribute.String;
    Address: Attribute.String;
    Occupation: Attribute.String;
    ArrestLocation: Attribute.Text;
    Incident: Attribute.Text;
    Offense: Attribute.Text;
    Charges: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    Arraignment: Attribute.String;
    Bond: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsActions extends Schema.Component {
  collectionName: 'components_components_actions';
  info: {
    displayName: 'Actions';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content-section.content-list': ContentSectionContentList;
      'components.warrant-section': ComponentsWarrantSection;
      'components.text-list': ComponentsTextList;
      'components.testimonials': ComponentsTestimonials;
      'components.sub_chapters': ComponentsSubChapters;
      'components.social': ComponentsSocial;
      'components.sectionmedia': ComponentsSectionmedia;
      'components.section': ComponentsSection;
      'components.section-navigation': ComponentsSectionNavigation;
      'components.release-form': ComponentsReleaseForm;
      'components.plain-sections': ComponentsPlainSections;
      'components.phones': ComponentsPhones;
      'components.personnel-division': ComponentsPersonnelDivision;
      'components.personel': ComponentsPersonel;
      'components.orders': ComponentsOrders;
      'components.open-position': ComponentsOpenPosition;
      'components.list': ComponentsList;
      'components.job-requirements': ComponentsJobRequirements;
      'components.jail-rule-sections': ComponentsJailRuleSections;
      'components.imgsection': ComponentsImgsection;
      'components.formfields': ComponentsFormfields;
      'components.financial': ComponentsFinancial;
      'components.farnsection': ComponentsFarnsection;
      'components.farmsection': ComponentsFarmsection;
      'components.fallencomponent': ComponentsFallencomponent;
      'components.chapters': ComponentsChapters;
      'components.calls-component': ComponentsCallsComponent;
      'components.calllogs': ComponentsCalllogs;
      'components.button': ComponentsButton;
      'components.arrest-section': ComponentsArrestSection;
      'components.actions': ComponentsActions;
    }
  }
}
