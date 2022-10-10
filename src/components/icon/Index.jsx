import Cancel from './Cancel';
import Menu from './Menu';

function Index({ icon, ...props }) {
  switch (icon) {
    case 'cancel': {
      return <Cancel {...props} />
    }

    case 'menu': {
      return <Menu {...props} />
    }
  }
}

export default Index;