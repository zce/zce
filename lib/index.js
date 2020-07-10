const React = require('react')
const { render, Box, Text } = require('ink')
const BigText = require('ink-big-text')
const Gradient = require('ink-gradient')
const { default: SelectInput } = require('ink-select-input')
const open = require('open')

const handleSelect = item => {
  item.url && open(item.url)
  item.action && item.action()
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
    key: 'bilibili',
    label: 'Bilibili',
    url: 'https://space.bilibili.com/210242179'
  },
  {
    key: 'github',
    label: 'GitHub',
    url: 'https://github.com/zce'
  },
  {
    key: 'ask me',
    label: 'Ask Me',
    url: 'https://github.com/zce/zce/issues/new'
  },
  {
    key: 'contact',
    label: 'Contact',
    url: 'https://img.zce.me/qrcode/wechat.jpg'
  },
  {
    key: 'donate',
    label: 'Donate',
    url: 'https://img.zce.me/qrcode/alipay.jpg'
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
        <Text>A technical narrator of China. Aha!</Text>
      </Gradient>
    </Box>
    <SelectInput items={items} onSelect={handleSelect} />
  </Box>
)

console.clear()

render(<App />)
