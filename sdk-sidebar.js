// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebar = {
  sdkSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsible: false,  
      collapsed: false,
      items: [
        'introduction/welcome',
        'introduction/supported-platforms',
        'introduction/supported-networks',
        'introduction/llm-prompt',
      ],
    },
    {
      type: 'category',
      label: 'Install SDK via Wagmi',
      collapsible: false,  
      collapsed: false,
      items: [
        'install-sdk-via-wagmi/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Install SDK',
      collapsible: false,  
      collapsed: false,
      items: [
        'install-sdk/javascript',
      ],
    },
  ],
};

module.exports = sidebar;
