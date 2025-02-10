import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Globe,
} from 'lucide-react';

import profileImage from '../assets/images/profiles/hadeel.jpg';
import companyLogo from '../assets/images/logos/swiftech.png';
import companyWhite from '../assets/images/logos/swiftech_white.png';

export const teamMembers = [
  {
    id: 1,
    name: "Hadeel Qalalwah",
    title: "Founder CEO",
    company: "Swiftech",
    profileImage: profileImage,
    companyLogo: companyLogo,
    companyWhiteLogo: companyWhite,
    backgroundColor: "#00885A",
    socialLinks: [
      { name: 'Facebook', icon: Facebook, link: 'https://facebook.com/hadeel', type: 'work' },
      { name: 'X', icon: Twitter, link: 'https://twitter.com/hadeel', type: 'personal' },
      { name: 'Instagram', icon: Instagram, link: 'https://instagram.com/hadeel', type: 'work' },
      { name: 'LinkedIn', icon: Linkedin, link: 'https://linkedin.com/in/hadeel', type: 'work' },
      { name: 'Email', icon: Mail, link: 'mailto:hadeel@swiftech.com', type: 'work' },
      { name: 'Phone', icon: Phone, link: 'tel:+1234567890', type: 'work' },
      { name: 'Location', icon: MapPin, link: 'https://goo.gl/maps', type: 'work' },
      { name: 'Website', icon: Globe, link: 'https://swiftech.com', type: 'work' }
    ]
  }
];