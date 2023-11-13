export const examplePage1 = {

    'counters': {

        'u_column': 1,

        'u_row': 1,

        'u_content_text': 1,

    },

    'body': {

        'id': 'xbHBaFowy8',

        'rows': [

            {

                'id': 'CLHxQDEIJz',

                'cells': [

                    1,

                ],

                'columns': [

                    {

                        'id': 'PkvTDULHNY',

                        'contents': [

                            {

                                'id': 'u_Q3wXupD5',

                                'type': 'text',

                                'values': {

                                    'containerPadding': '50px',

                                    'anchor': '',

                                    'color': '#000000',

                                    'textAlign': 'center',

                                    'lineHeight': '140%',

                                    'linkStyle': {

                                        'inherit': true,

                                        'linkColor': '#0000ee',

                                        'linkHoverColor': '#0000ee',

                                        'linkUnderline': true,

                                        'linkHoverUnderline': true,

                                    },

                                    'displayCondition': null,

                                    '_meta': {

                                        'htmlID': 'u_content_text_1',

                                        'htmlClassNames': 'u_content_text',

                                    },

                                    'selectable': true,

                                    'draggable': true,

                                    'duplicatable': true,

                                    'deletable': true,

                                    'hideable': true,

                                    'text': '<h1>Welcome to the unlayer design component</h1>',

                                },

                            },

                        ],

                        'values': {

                            'backgroundColor': '',

                            'padding': '0px',

                            'border': {},

                            '_meta': {

                                'htmlID': 'u_column_1',

                                'htmlClassNames': 'u_column',

                            },

                        },

                    },

                ],

                'values': {

                    'displayCondition': null,

                    'columns': false,

                    'backgroundColor': '',

                    'columnsBackgroundColor': '',

                    'backgroundImage': {

                        'url': '',

                        'fullWidth': true,

                        'repeat': false,

                        'center': true,

                        'cover': false,

                    },

                    'padding': '0px',

                    'anchor': '',

                    'hideDesktop': false,

                    '_meta': {

                        'htmlID': 'u_row_1',

                        'htmlClassNames': 'u_row',

                    },

                    'selectable': true,

                    'draggable': true,

                    'duplicatable': true,

                    'deletable': true,

                    'hideable': true,

                },

            },

        ],

        'values': {

            'popupPosition': 'center',

            'popupWidth': '600px',

            'popupHeight': 'auto',

            'borderRadius': '10px',

            'contentAlign': 'center',

            'contentVerticalAlign': 'center',

            'contentWidth': 'auto',

            'fontFamily': {

                'label': 'Arial',

                'value': 'arial,helvetica,sans-serif',

            },

            'textColor': '#000000',

            'popupBackgroundColor': '#FFFFFF',

            'popupBackgroundImage': {

                'url': '',

                'fullWidth': true,

                'repeat': false,

                'center': true,

                'cover': true,

            },

            'popupOverlay_backgroundColor': 'rgba(0, 0, 0, 0.1)',

            'popupCloseButton_position': 'top-right',

            'popupCloseButton_backgroundColor': '#DDDDDD',

            'popupCloseButton_iconColor': '#000000',

            'popupCloseButton_borderRadius': '0px',

            'popupCloseButton_margin': '0px',

            'popupCloseButton_action': {

                'name': 'close_popup',

                'attrs': {

                    'onClick': 'document.querySelector(\'.u-popup-container\').style.display = \'none\';',

                },

            },

            'backgroundColor': '#ffffff',

            'backgroundImage': {

                'url': '',

                'fullWidth': true,

                'repeat': false,

                'center': true,

                'cover': false,

            },

            'linkStyle': {

                'body': true,

                'linkColor': '#0000ee',

                'linkHoverColor': '#0000ee',

                'linkUnderline': true,

                'linkHoverUnderline': true,

            },

            '_meta': {

                'htmlID': 'u_body',

                'htmlClassNames': 'u_body',

            },

        },

    },

    'schemaVersion': 8,

};

export const testSite = {

    id: '1',

    mainPageId: '1',

    name: 'Boxing Day',

    slug: 'boxing-day',

    status: 'published',

    audience: 'BLUE',

    settings: {

        facebookTrackingEnabled: false,

        facebookTrackingId: '',

        googleTrackingEnabled: true,

        googleTrackingId: 'G-123',

    },

    pages: [

        {

            id: '1',

            name: 'Main Page',

            slug: 'default',

            content: {

                design: examplePage1,

                chunks: {

                    page: 1,

                },

            },

        },

    ],

};


