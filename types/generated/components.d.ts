import type { Schema, Attribute } from '@strapi/strapi';

export interface RoleAlrtbh extends Schema.Component {
  collectionName: 'components_role_alrtbh';
  info: {
    displayName: '\u0627\u0644\u0631\u062A\u0628\u0647';
  };
  attributes: {
    alrtb: Attribute.Relation<'role.alrtbh', 'oneToOne', 'api::alrtb.alrtb'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'role.alrtbh': RoleAlrtbh;
    }
  }
}
