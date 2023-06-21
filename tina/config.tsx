import { defineConfig } from "tinacms";
import { contentBlockSchema } from "../components/blocks/content";
import { featureBlockSchema } from "../components/blocks/features";
import { heroBlockSchema } from "../components/blocks/hero";
import { testimonialBlockSchema } from "../components/blocks/testimonial";
import { ColorPickerInput } from "./fields/color";
import { iconSchema } from "../components/util/icon";

const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH! || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    process.env.HEAD!, // Netlify branch env
  token: process.env.TINA_TOKEN!,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  tinaioConfig: {
    // local
    contentApiUrlOverride: 'https://content.kelly.tinajs.dev',
    identityApiUrlOverride: 'https://identity.kelly.tinajs.dev',
    frontendUrlOverride: 'http://localhost:3002',
    assetsApiUrlOverride: 'https://assets-api-local-kldavis4.tinajs.dev'
    // pr
    //contentApiUrlOverride: 'https://pr1854-content.tinajs.dev',
    //identityApiUrlOverride: 'https://pr1854-identity.tinajs.dev',
    //frontendUrlOverride: 'https://pr1854-app.tinajs.dev'
    // staging
    //contentApiUrlOverride: 'https://content.tinajs.dev',
    //identityApiUrlOverride: 'https://identity.tinajs.dev',
    //frontendUrlOverride: 'https://app.tinajs.dev'
  },
  search: {
    tina: {
        indexerToken: process.env.SEARCH_TOKEN,
    }
  },
  schema: {
    collections: [
          {
        name: "smashingpost",
        label: "Smashing Articles",
        path: "content/smashingpost",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            ui: {
              validate: value => {
                if (!value?.length) {
                  return "Image is required";
                }
              }
            }
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            description:
              "Publish date and time (in your local time). You can change this later",
            ui: {
              timeFormat: "HH:mm"
            },
            required: true
          },
          {
            type: "boolean",
            name: "disable_ads",
            description: "Disable ads for sponsored articles",
            label: "Disable Ads"
          },
          {
            type: "boolean",
            name: "disable_panels",
            description: "Disable ad panels for sponsored articles",
            label: "Disable Panels"
          },
          {
            type: "boolean",
            name: "disable_newsletterbox",
            description: "Disable newsletter box for sponsored articles",
            label: "Disable Newsletter Box"
          },
          {
            type: "object",
            name: "sponsor",
            label: "Sponsor",
            description: "Sponsor for this post (if applicable)",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                description:
                  "Sponsor name. This is used as alt text for the image"
              },
              {
                type: "string",
                name: "link",
                label: "Link",
                description: "Link to sponsor website"
              },
              {
                type: "image",
                name: "image",
                label: "Image",
                description:
                  "Please use SVG format. This is usally just the sponsor logo"
              },
              {
                type: "rich-text",
                name: "description",
                label: "Description",
                description:
                  "This is the sponsorship text that appears at the top of the article",
                parser: { type: "markdown", skipEscaping: "all" } // 'all' | 'html'
              }
            ]
          },
          {
            type: "rich-text",
            name: "summary",
            label: "Summary",
            description: "This is for the article page",
            parser: { type: "markdown", skipEscaping: "all" } // 'all' | 'html'
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            description: "This is for the homepage",
            parser: { type: "markdown", skipEscaping: "all" } // 'all' | 'html'
          },
          {
            name: "author",
            label: "Author",
            type: "reference",
            collections: ["author"],
            required: true
          },
          {
            type: "string",
            list: true,
            name: "categories",
            label: "Categories",
          },
          {
            type: "datetime",
            name: "last_updated",
            label: "Last Updated",
            description:
              "Last updated date and time (in your local time). You can change this later",
            ui: {
              timeFormat: "HH:mm"
            },
          },
          {
            name: "updated_by",
            label: "Last Updated By",
            type: "reference",
            collections: ["author"],
            required: true
          },
          {
            name: "evergreen",
            label: "Evergreen",
            type: "boolean",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            parser: { type: "markdown", skipEscaping: "all" }, // 'all' | 'html'
            isBody: true,
            templates: [
              {
                name: "rimg",
                label: "Custom Image (rimg)",
                match: {
                  start: "{{<",
                  end: ">}}"
                },
                //@ts-ignore
                fields: [
                  {
                    // Be sure to call this field `text`
                    name: "src",
                    label: "src",
                    type: "image",
                  },
                  {
                    // Be sure to call this field `text`
                    name: "href",
                    label: "href",
                    description:
                      "When someone clicks this image, where should they go? (Example https://google.com)",
                    type: "string"
                  },
                  {
                    // Be sure to call this field `text`
                    name: "caption",
                    description:
                      "Caption below the image. HTML is supported in this field",
                    label: "caption",
                    type: "string",
                    ui: {
                      component: "textarea"
                    }
                  },
                  //@ts-ignore
                  {
                    name: "breakout",
                    label: "breakout",
                    type: "string",
                  },
                  {
                    name: "sizes",
                    label: "sizes",
                    type: "string",
                    required: false,
                    description: "Size, (E.g: 100vw)",
                  },
                  {
                    name: "alt",
                    label: "alt",
                    type: "string"
                  },
                  {
                    name: "width",
                    label: "width",
                    type: "string",
                    description: "This is usually just 800. Do not add units",
                    required: false,
                  },
                  {
                    name: "height",
                    label: "height",
                    description:
                      "This is automatically calculated based on the aspect on the image aspect ratio",
                    type: "string",
                    required: false,
                  }
                ]
              },
              {
                name: "pull_quote",
                label: "Pull Quote",
                match: {
                  name: "pull-quote",
                  start: "{{%",
                  end: "%}}"
                },
                fields: [
                  {
                    name: "children",
                    type: "rich-text",
                    parser: { type: "markdown", skipEscaping: "all" },
                  }
                ]
              },
              {
                name: "ad_panel_leaderboard",
                label: "Ad Panel",
                match: {
                  name: "ad-panel-leaderboard",
                  start: "{{%",
                  end: "%}}"
                },
                fields: [
                  {
                    // Be sure to call this field `text`
                    name: "_value",
                    label: "value",
                    type: "string",
                    description:
                      "Leave this field blank to use the automatic ad panel content"
                  }
                ]
              },
              {
                name: "newsletter_panel",
                label: "Newsletter Panel",
                match: {
                  name: "newsletter-panel",
                  start: "{{%",
                  end: "%}}"
                },
                fields: [
                  {
                    // Be sure to call this field `text`
                    name: "_value",
                    label: "value",
                    type: "string",
                    description:
                      "Leave this field blank to use the default settings"
                  }
                ]
              },
              {
                name: "feature_panel",
                label: "Feature Panel",
                match: {
                  name: "feature-panel",
                  start: "{{%",
                  end: "%}}"
                },
                fields: [
                  {
                    // Be sure to call this field `text`
                    name: "id",
                    label: "value",
                    type: "string",
                    description:
                      "Leave this field blank to use the automatic feature panel content"
                  }
                ]
              },
              {
                name: "vimeo",
                label: "Vimeo",
                match: {
                  start: "{{<",
                  end: ">}}"
                },
                fields: [
                  {
                    name: "id",
                    label: "ID",
                    type: "string",
                    description:
                      "The 9-digit number at the end of the Vimeo URL"
                  },
                  {
                    name: "caption",
                    label: "Caption",
                    description: "This is optional",
                    type: "string"
                  },
                  {
                    name: "breakout",
                    label: "Breakout",
                    type: "string",
                  }
                ]
              },
              {
                name: "youtube",
                label: "YouTube",
                match: {
                  start: "{{<",
                  end: ">}}"
                },
                fields: [
                  {
                    name: "id",
                    label: "ID",
                    type: "string",
                    description:
                      "This is approximately 10 numbers & letters in the YouTube URL"
                  },
                  {
                    name: "caption",
                    label: "Caption",
                    description: "This is optional",
                    type: "string"
                  },
                  {
                    name: "breakout",
                    label: "Breakout",
                    type: "string",
                  }
                ]
              },
              {
                name: "codepen",
                label: "codepen",
                inline: true,
                match: {
                  start: "{{<",
                  end: ">}}"
                },
                fields: [
                  {
                    name: "height",
                    type: "string"
                  },
                  {
                    name: "theme_id",
                    type: "string"
                  },
                  {
                    name: "slug_hash",
                    type: "string"
                  },
                  {
                    name: "default_tab",
                    type: "string"
                  },
                  {
                    name: "breakout",
                    type: "string"
                  },
                  {
                    name: "user",
                    type: "string"
                  },
                  {
                    name: "editable",
                    type: "string"
                  },
                  // {
                  //   name: "data-editable",
                  //   type: "string"
                  // },
                  {
                    name: "children",
                    type: "rich-text",
                    parser: { type: "markdown", skipEscaping: "all" } // 'all' | 'html'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: "Blog Posts",
        name: "post",
        path: "content/posts",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            return `/posts/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "heroImg",
            label: "Hero Image",
          },
          {
            type: "rich-text",
            label: "Excerpt",
            name: "excerpt",
          },
          {
            type: "reference",
            label: "Author",
            name: "author",
            collections: ["author"],
          },
          {
            type: "datetime",
            label: "Posted Date",
            name: "date",
            ui: {
              dateFormat: "MMMM DD YYYY",
              timeFormat: "hh:mm A",
            },
          },
          {
            type: "rich-text",
            label: "Body",
            name: "_body",
            templates: [
              {
                name: "DateTime",
                label: "Date & Time",
                inline: true,
                fields: [
                  {
                    name: "format",
                    label: "Format",
                    type: "string",
                    options: ["utc", "iso", "local"],
                  },
                ],
              },
              {
                name: "BlockQuote",
                label: "Block Quote",
                fields: [
                  {
                    name: "children",
                    label: "Quote",
                    type: "rich-text",
                  },
                  {
                    name: "authorName",
                    label: "Author",
                    type: "string",
                  },
                ],
              },
              {
                name: "NewsletterSignup",
                label: "Newsletter Sign Up",
                fields: [
                  {
                    name: "children",
                    label: "CTA",
                    type: "rich-text",
                  },
                  {
                    name: "placeholder",
                    label: "Placeholder",
                    type: "string",
                  },
                  {
                    name: "buttonText",
                    label: "Button Text",
                    type: "string",
                  },
                  {
                    name: "disclaimer",
                    label: "Disclaimer",
                    type: "rich-text",
                  },
                ],
                ui: {
                  defaultItem: {
                    placeholder: "Enter your email",
                    buttonText: "Notify Me",
                  },
                },
              },
            ],
            isBody: true,
          },
        ],
      },
      {
        label: "Global",
        name: "global",
        path: "content/global",
        format: "json",
        ui: {
          global: true,
        },
        fields: [
          {
            type: "object",
            label: "Header",
            name: "header",
            fields: [
              iconSchema as any,
              {
                type: "string",
                label: "Name",
                name: "name",
              },
              {
                type: "string",
                label: "Color",
                name: "color",
                options: [
                  { label: "Default", value: "default" },
                  { label: "Primary", value: "primary" },
                ],
              },
              {
                type: "object",
                label: "Nav Links",
                name: "nav",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.label };
                  },
                  defaultItem: {
                    href: "home",
                    label: "Home",
                  },
                },
                fields: [
                  {
                    type: "string",
                    label: "Link",
                    name: "href",
                  },
                  {
                    type: "string",
                    label: "Label",
                    name: "label",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            label: "Footer",
            name: "footer",
            fields: [
              {
                type: "string",
                label: "Color",
                name: "color",
                options: [
                  { label: "Default", value: "default" },
                  { label: "Primary", value: "primary" },
                ],
              },
              {
                type: "object",
                label: "Social Links",
                name: "social",
                fields: [
                  {
                    type: "string",
                    label: "Facebook",
                    name: "facebook",
                  },
                  {
                    type: "string",
                    label: "Twitter",
                    name: "twitter",
                  },
                  {
                    type: "string",
                    label: "Instagram",
                    name: "instagram",
                  },
                  {
                    type: "string",
                    label: "Github",
                    name: "github",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            label: "Theme",
            name: "theme",
            // @ts-ignore
            fields: [
              {
                type: "string",
                label: "Primary Color",
                name: "color",
                ui: {
                  component: ColorPickerInput,
                },
              },
              {
                type: "string",
                name: "font",
                label: "Font Family",
                options: [
                  {
                    label: "System Sans",
                    value: "sans",
                  },
                  {
                    label: "Nunito",
                    value: "nunito",
                  },
                  {
                    label: "Lato",
                    value: "lato",
                  },
                ],
              },
              {
                type: "string",
                name: "darkMode",
                label: "Dark Mode",
                options: [
                  {
                    label: "System",
                    value: "system",
                  },
                  {
                    label: "Light",
                    value: "light",
                  },
                  {
                    label: "Dark",
                    value: "dark",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "Authors",
        name: "author",
        path: "content/authors",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Name",
            name: "name",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            label: "Avatar",
            name: "avatar",
          },
        ],
      },
      {
        label: "Pages",
        name: "page",
        path: "content/pages",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/`;
            }
            if (document._sys.filename === "about") {
              return `/about`;
            }
            return undefined;
          },
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            description:
              "The title of the page. This is used to display the title in the CMS",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            ui: {
              visualSelector: true,
            },
            templates: [
              heroBlockSchema,
              // @ts-ignore
              featureBlockSchema,
              contentBlockSchema,
              testimonialBlockSchema,
            ],
          },
        ],
      },
    ],
  },
});

export default config;
