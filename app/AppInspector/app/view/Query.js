/*
 * File: app/view/Query.js
 */

Ext.define('AI.view.Query', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.query',

    requires: [
        'Ext.grid.property.Grid'
    ],

    itemId: 'Query',
    iconCls: 'icn-home',
    title: 'Component Query',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                 {
                    xtype: 'panel',
                    flex: 2,
                    cls: 'about-details',
                    autoScroll: true,
                    bodyPadding: '5 10'
                },
                {
                    xtype: 'propertygrid',
                    flex: 1,
                    itemId: 'AppDetails',
                    minHeight: 150,
                    header: false,
                    iconCls: 'icon-home',
                    emptyText: 'No Sencha framework found!',
                    nameColumnWidth: '50%',
                    source: {
                        
                    },
                    sourceConfig: {
                        core: {
                            displayName: 'Core Version'
                        },
                        touch: {
                            displayName: 'Touch Version'
                        },
                        extjs: {
                            displayName: 'Ext JS Version'
                        },
                        ext: {
                            displayName: 'Ext JS Version'
                        },
                        name: {
                            displayName: 'Application Name'
                        }
                    }
                }
               
            ],
            listeners: {
                beforeadd: {
                    fn: me.onAboutBeforeAdd,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onAboutBeforeAdd: function(container, component, index, eOpts) {
        this.setTitle(AI.util.i18n.getMessage(this.title));

    }

});