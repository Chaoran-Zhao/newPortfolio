import pic1 from '../../assets/pic/myphoto1.jpg'
import pic2 from '../../assets/pic/myphoto4.jpg'
import pic3 from '../../assets/pic/myphoto5.jpg'

const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`



export const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pic1},
  { position: [0.2, 0, 1.7], rotation: [0, 0, 0], url: pic1},
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pic2 },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pic3 },
  // Left
  { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: pexel(327482) },
  { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: pexel(325185) },
  { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: pic3  },
  // Right
  { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(227675) },
  { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(911738) },
  { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986) }
]