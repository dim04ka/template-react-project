import InboxIcon from '@material-ui/icons/MoveToInbox';

export const listTheme = [
  {
    id: 1,
    theme: 'Погода'
  },
  {
    id: 2,
    theme: 'Времена года'
  },
  {
    id: 3,
    theme: 'Дни недели'
  }
];

export const menuList = [
  { id: 1, title: 'Темы', Icon: InboxIcon, link: '/theme' },
  { id: 2, title: 'Словарь', link: '/words'}, 
  { id: 3, title: 'Пройти тест', link: '/test'}
]