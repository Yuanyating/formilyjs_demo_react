import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'
import {
  Form,
  FormButtonGroup,
  FormItem,
  Input,
  Select,
  ArrayTable,
  Password,
  NumberPicker,
  Radio,
  Submit,
  Editable,
} from '@formily/antd'
import { Typography } from 'antd'

const form = createForm({
  validateFirst: true,
  effects: (form) => {
    console.log('form', form)
  },
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
    ArrayTable,
    Password,
    NumberPicker,
    Radio,
    Editable,
  },
  scope: {},
})

const schema = {
  type: 'object',
  properties: {
    apiType: {
      type: 'string | number',
      title: ' ',
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      enum: [
        {
          value: 'table',
          label: 'Table API',
        },
        {
          value: 'stream',
          label: 'Stream API',
        },
      ],
      'x-validator': [],
      'x-component-props': {
        buttonStyle: 'outline',
      },
      'x-decorator-props': {},
      name: 'apiType',
      default: 'table',
      'x-designable-id': '9bvbug5bznd',
      'x-index': 0,
    },
    tableProps: {
      type: 'object',
      'x-validator': [],
      'x-designable-id': 'rd74c97e9lb',
      'x-index': 1,
      // "x-display": "{{visibleTableProps}}",
      'x-reactions': {
        dependencies: ['apiType'],
        fulfill: {
          state: {
            visible: "{{$deps[0] === 'table'}}",
          },
        },
      },
      name: 'tableProps',
      properties: {
        dataType: {
          title: '消息格式',
          'x-decorator': 'FormItem',
          'x-component': 'Select',
          'x-validator': [],
          'x-component-props': {},
          'x-decorator-props': {},
          name: 'dataType',
          enum: [
            {
              children: [],
              label: 'Bytes',
              value: 'Bytes',
            },
            {
              children: [],
              label: 'String',
              value: 'String',
            },
            {
              children: [],
              label: 'JDW',
              value: 'JDW',
            },
          ],
          required: true,
          default: 'String',
          'x-designable-id': 'g68koavxze5',
          'x-index': 0,
        },
        format: {
          title: 'format',
          'x-decorator': 'FormItem',
          'x-component': 'Select',
          'x-validator': [],
          'x-component-props': {},
          'x-decorator-props': {},
          name: 'format',
          required: true,
          enum: [
            {
              children: [],
              label: 'csv',
              value: 'csv',
            },
            {
              children: [],
              label: 'raw',
              value: 'raw',
            },
            {
              children: [],
              label: 'json',
              value: 'json',
            },
          ],
          default: 'csv',
          'x-designable-id': 'ifan1a2j9c0',
          'x-reactions': {
            target: 'tableProps.delimiter',
            fulfill: {
              state: {
                visible: "{{$self.value === 'csv'}}",
              },
            },
          },
          description: '此处与下方涉及联动',
          'x-index': 1,
        },
        delimiter: {
          title: '分割方式',
          'x-decorator': 'FormItem',
          'x-component': 'Select',
          'x-validator': [],
          'x-component-props': {},
          'x-decorator-props': {},
          name: 'delimiter',
          enum: [
            {
              children: [],
              label: '逗号(,)',
              value: ',',
            },
          ],
          default: ',',
          'x-designable-id': '3ao51vbfmdz',
          'x-index': 2,
        },

        projects: {
          type: 'array',
          title: 'Projects',
          'x-decorator': 'FormItem',
          'x-component': 'ArrayTable',
          items: {
            type: 'object',
            properties: {
              column_1: {
                type: 'void',
                'x-component': 'ArrayTable.Column',
                'x-component-props': {
                  width: 50,
                  title: 'Sort',
                  align: 'center',
                },
                properties: {
                  sortable: {
                    type: 'void',
                    'x-component': 'ArrayTable.SortHandle',
                  },
                },
              },
              column_2: {
                type: 'void',
                'x-component': 'ArrayTable.Column',
                'x-component-props': {
                  width: 50,
                  title: 'Index',
                  align: 'center',
                },
                properties: {
                  index: {
                    type: 'void',
                    'x-component': 'ArrayTable.Index',
                  },
                },
              },
              column_3: {
                type: 'void',
                'x-component': 'ArrayTable.Column',
                'x-component-props': {
                  title: 'Price',
                },
                properties: {
                  price: {
                    type: 'number',
                    default: 0,
                    'x-decorator': 'Editable',
                    'x-component': 'NumberPicker',
                    'x-component-props': {
                      addonAfter: '$',
                    },
                  },
                },
              },
              column_4: {
                type: 'void',
                'x-component': 'ArrayTable.Column',
                'x-component-props': {
                  title: 'Count',
                },
                properties: {
                  count: {
                    type: 'number',
                    default: 0,
                    'x-decorator': 'Editable',
                    'x-component': 'NumberPicker',
                    'x-component-props': {
                      addonAfter: '$',
                    },
                  },
                },
              },
              column_5: {
                type: 'void',
                'x-component': 'ArrayTable.Column',
                'x-component-props': {
                  title: 'Total',
                },
                properties: {
                  total: {
                    type: 'number',
                    'x-read-pretty': true,
                    'x-decorator': 'FormItem',
                    'x-component': 'NumberPicker',
                    'x-component-props': {
                      addonAfter: '$',
                    },
                    'x-reactions': {
                      dependencies: ['.price', '.count'],
                      when: '{{$deps[0] && $deps[1]}}',
                      fulfill: {
                        state: {
                          value: '{{$deps[0] * $deps[1]}}',
                        },
                      },
                    },
                  },
                },
              },
              column_6: {
                type: 'void',
                'x-component': 'ArrayTable.Column',
                'x-component-props': {
                  title: 'Operations',
                },
                properties: {
                  item: {
                    type: 'void',
                    'x-component': 'FormItem',
                    properties: {
                      remove: {
                        type: 'void',
                        'x-component': 'ArrayTable.Remove',
                      },
                      moveDown: {
                        type: 'void',
                        'x-component': 'ArrayTable.MoveDown',
                      },
                      moveUp: {
                        type: 'void',
                        'x-component': 'ArrayTable.MoveUp',
                      },
                    },
                  },
                },
              },
            },
          },
          properties: {
            add: {
              type: 'void',
              title: 'Add',
              'x-component': 'ArrayTable.Addition',
            },
          },
        },
      },
    },
  },
}

export default () => {
  return (
    <>
      <section style={{ background: '#eee', width: '100%', padding: '0 24px' }}>
        <Typography.Title level={3}>场景描述</Typography.Title>
        <Typography.Paragraph>
          类似于JDQ表单，主要涉及联动和表格相关的展示
        </Typography.Paragraph>
        <Typography.Paragraph>
          待办项：1. 表格滚动 2.操作时表格刷新
        </Typography.Paragraph>
      </section>
      <Form
        form={form}
        labelCol={4}
        wrapperCol={16}
        style={{ width: 500, marginTop: 48 }}
        onAutoSubmit={console.log}
      >
        <SchemaField schema={schema} />
        <FormButtonGroup.FormItem>
          <Submit block size="large">
            提交
          </Submit>
        </FormButtonGroup.FormItem>
      </Form>
    </>
  )
}
