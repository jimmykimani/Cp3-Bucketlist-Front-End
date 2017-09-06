import { MenuItem } from './menu-item';
import { NavigationService } from './navigation.service';
import { SidenavItemComponent } from './sidenav/sidenav-item/sidenav-item.component';


export const menuItemSetup: MenuItem[] = [
  new MenuItem({ title: 'Dashboard', link: '/dashboard', icon: 'dashboard' }),
  new MenuItem('Bucketlists', null, [
    new MenuItem('View bucketlists', '/dashboard/bucketlist'),
  ], null, null, 'shopping_basket'),
  new MenuItem('Bucketlists Items', null, [
    new MenuItem('My Items', '/dashboard/items'),
  ], null, null, 'add_shopping_cart'),
  new MenuItem('Tags', null, [
    new MenuItem('Work', '/dashboard/tags', ),
    new MenuItem('Personal', '/dashboard/tags'),
    new MenuItem('Family', 'dashboard/tags/'),
  ], null, null, 'label_outline'),
  new MenuItem({ title: 'Done Items', link: '/dashboard/done', icon: 'done' }),
  new MenuItem({ title: 'Archive', link: '/dashboard/archive', icon: 'archive' }),
  new MenuItem('Settings', null, [
    new MenuItem('App info', '/dashboard/tags', ),
    new MenuItem('FAQ', '/dashboard/tags'),
  ], null, null, 'settings'),
  // new MenuItem({ title: 'Send feedback', link: '/', icon: 'feedback' }),
  // new MenuItem({ title: 'Help', link: '/', icon: 'help' }),
  new MenuItem({ title: 'Logout', link: '/', icon: 'exit_to_app' }),
  new MenuItem({ title: 'Github', link: 'https://github.com/jimmykimani/Cp3-Bucketlist-Front-End', icon: 'code' }),
];
