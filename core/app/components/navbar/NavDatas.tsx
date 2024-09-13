const NavDatas = () => {
  return {
      categories: [
        {
          id: 'sport',
          name: 'Sports',
          sections: [
            {
              items: [
                { name: 'Tops', href: '#' },
                { name: 'Dresses', href: '#' },
                { name: 'Pants', href: '#' },
                { name: 'Denim', href: '#' },
                { name: 'Sweaters', href: '#' },
                { name: 'T-Shirts', href: '#' },
                { name: 'Jackets', href: '#' },
                { name: 'Activewear', href: '#' },
                { name: 'Browse All', href: '#' },
              ],
            },
          ],
        },
        {
          id: 'location',
          name: 'Lieux',
          sections: [
            {
              items: [
                { name: 'Tops', href: '#' },
                { name: 'Pants', href: '#' },
                { name: 'Sweaters', href: '#' },
                { name: 'T-Shirts', href: '#' },
                { name: 'Jackets', href: '#' },
                { name: 'Activewear', href: '#' },
                { name: 'Browse All', href: '#' },
              ],
            },
          ],
        },
      ],
  }
}

export default NavDatas;