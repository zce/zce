const React = require('react')
const { render, Box, Text } = require('ink')
const Gradient = require('ink-gradient')
const BigText = require('ink-big-text')
const SelectInput = require('ink-select-input')
const opn = require('opn')

const open = url => opn(url, { wait: false })

const handleSelect = item => {
  if (item.url) {
    open(item.url)
  }

  if (item.action) {
    item.action()
  }
}

const items = [
  {
    key: 'homepage',
    label: 'Homepage',
    url: 'https://zce.me'
  },
  {
    key: 'twitter',
    label: 'Twitter',
    url: 'https://twitter.com/w_zce'
  },
  {
    key: 'weibo',
    label: 'Weibo',
    url: 'https://weibo.com/zceme'
  },
  {
    key: 'blog',
    label: 'Blog',
    url: 'https://blog.zce.me'
  },
  {
    key: 'github',
    label: 'GitHub',
    url: 'https://github.com/zce'
  },
  {
    key: 'ask me',
    label: 'Ask Me',
    url: 'mailto:w@zce.me'
  },
  {
    key: 'contact',
    label: 'Contact',
    url: 'https://img.zce.me/wechat.jpg'
  },
  {
    key: 'donate',
    label: 'Donate',
    url: 'https://img.zce.me/alipay.jpg'
  },
  // TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
  {
    key: 'quit',
    label: 'Quit',
    action: () => process.exit()
  }
]

const App = () => (
  <Box flexDirection='column'>
    <Box padding={1}>
      <Gradient name='rainbow'>
        <Text>Hey! Guys</Text>
        <BigText text="I'm Lei Wang" />
        <Text>a technical poet of China. Aha!</Text>
      </Gradient>
    </Box>
    <SelectInput.default items={items} onSelect={handleSelect} />
  </Box>
)

render(<App />)
