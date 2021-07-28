const menus = [
  { name: 'Home', path: '/' },
  { name: 'services', path: '#services' },
  { name: 'contact', path: '#footer' },
  { name: 'about', path: '#about' },
]

const services = [
  {
    icon: '/stream.png',
    name: 'Airtel Xstream Fiber Connections',
    desc: 'One of the biggest advantages of the Airtel Xstream Fiber wifi is the wide range...',
    q1: 'What is a fiber leased line? What are its advantages?',
    desc1:
      'A leased-line is also known as a fiber leased line. It is a dedicated fiber-optic service and connects directly to the premises. A leased line can directly connect to the public internet through a dedicated fiber optic cable. Here you do not need to share the infrastructure. Fiber leased line is there solely for the purpose of serving you and it is not shared with any other individual or user. The speed of this leased line ranges from 2 Mbps to 10 Gbps.',
    h1: 'Advantages of fiber leased line',
    advantages: [
      'Faster connection speed',
      'Easy access to cloud computing',
      'Stronger signal',
      'Low latency',
      'Symmetrical speed',
      'High security',
      'Cost-effective',
      'Capability for HD video',
    ],
  },
  {
    icon: '/internet.svg',
    name: 'Internet Leased Line ',
    desc: 'One of the biggest advantages of the Airtel Xstream Fiber wifi is the wide range...',
    q1: 'What is a fiber leased line? What are its advantages?',
    desc1:
      'A leased-line is also known as a fiber leased line. It is a dedicated fiber-optic service and connects directly to the premises. A leased line can directly connect to the public internet through a dedicated fiber optic cable. Here you do not need to share the infrastructure. Fiber leased line is there solely for the purpose of serving you and it is not shared with any other individual or user. The speed of this leased line ranges from 2 Mbps to 10 Gbps.',
    h1: 'Advantages of fiber leased line',
    advantages: [
      'Faster connection speed',
      'Easy access to cloud computing',
      'Stronger signal',
      'Low latency',
      'Symmetrical speed',
      'High security',
      'Cost-effective',
      'Capability for HD video',
    ],
  },
  {
    icon: '/ip.svg',
    name: 'Static IP ',
    desc: 'One of the biggest advantages of the Airtel Xstream Fiber wifi is the wide range...',
    q1: 'What is a fiber leased line? What are its advantages?',
    desc1:
      'A leased-line is also known as a fiber leased line. It is a dedicated fiber-optic service and connects directly to the premises. A leased line can directly connect to the public internet through a dedicated fiber optic cable. Here you do not need to share the infrastructure. Fiber leased line is there solely for the purpose of serving you and it is not shared with any other individual or user. The speed of this leased line ranges from 2 Mbps to 10 Gbps.',
    h1: 'Advantages of fiber leased line',
    advantages: [
      'Faster connection speed',
      'Easy access to cloud computing',
      'Stronger signal',
      'Low latency',
      'Symmetrical speed',
      'High security',
      'Cost-effective',
      'Capability for HD video',
    ],
  },
  {
    icon: '/mpls.svg',
    name: 'MPLS',
    desc: 'One of the biggest advantages of the Airtel Xstream Fiber wifi is the wide range...',
    q1: 'What is a fiber leased line? What are its advantages?',
    desc1:
      'A leased-line is also known as a fiber leased line. It is a dedicated fiber-optic service and connects directly to the premises. A leased line can directly connect to the public internet through a dedicated fiber optic cable. Here you do not need to share the infrastructure. Fiber leased line is there solely for the purpose of serving you and it is not shared with any other individual or user. The speed of this leased line ranges from 2 Mbps to 10 Gbps.',
    h1: 'Advantages of fiber leased line',
    advantages: [
      'Faster connection speed',
      'Easy access to cloud computing',
      'Stronger signal',
      'Low latency',
      'Symmetrical speed',
      'High security',
      'Cost-effective',
      'Capability for HD video',
    ],
  },
  {
    icon: '/portability.svg',
    name: 'Mobile Number Portability ',
    desc: 'One of the biggest advantages of the Airtel Xstream Fiber wifi is the wide range...',
    q1: 'What is a fiber leased line? What are its advantages?',
    desc1:
      'A leased-line is also known as a fiber leased line. It is a dedicated fiber-optic service and connects directly to the premises. A leased line can directly connect to the public internet through a dedicated fiber optic cable. Here you do not need to share the infrastructure. Fiber leased line is there solely for the purpose of serving you and it is not shared with any other individual or user. The speed of this leased line ranges from 2 Mbps to 10 Gbps.',
    h1: 'Advantages of fiber leased line',
    advantages: [
      'Faster connection speed',
      'Easy access to cloud computing',
      'Stronger signal',
      'Low latency',
      'Symmetrical speed',
      'High security',
      'Cost-effective',
      'Capability for HD video',
    ],
  },
  {
    icon: '/tower.svg',
    name: 'Small Cell Ericsson and Services ',
    desc: 'One of the biggest advantages of the Airtel Xstream Fiber wifi is the wide range...',
    q1: 'What is a fiber leased line? What are its advantages?',
    desc1:
      'A leased-line is also known as a fiber leased line. It is a dedicated fiber-optic service and connects directly to the premises. A leased line can directly connect to the public internet through a dedicated fiber optic cable. Here you do not need to share the infrastructure. Fiber leased line is there solely for the purpose of serving you and it is not shared with any other individual or user. The speed of this leased line ranges from 2 Mbps to 10 Gbps.',
    h1: 'Advantages of fiber leased line',
    advantages: [
      'Faster connection speed',
      'Easy access to cloud computing',
      'Stronger signal',
      'Low latency',
      'Symmetrical speed',
      'High security',
      'Cost-effective',
      'Capability for HD video',
    ],
  },
  {
    icon: '/brodband.svg',
    name: 'Airtel Broadband in Kolhapur ',
    desc: 'One of the biggest advantages of the Airtel Xstream Fiber wifi is the wide range...',
    q1: 'What is a fiber leased line? What are its advantages?',
    desc1:
      'A leased-line is also known as a fiber leased line. It is a dedicated fiber-optic service and connects directly to the premises. A leased line can directly connect to the public internet through a dedicated fiber optic cable. Here you do not need to share the infrastructure. Fiber leased line is there solely for the purpose of serving you and it is not shared with any other individual or user. The speed of this leased line ranges from 2 Mbps to 10 Gbps.',
    h1: 'Advantages of fiber leased line',
    advantages: [
      'Faster connection speed',
      'Easy access to cloud computing',
      'Stronger signal',
      'Low latency',
      'Symmetrical speed',
      'High security',
      'Cost-effective',
      'Capability for HD video',
    ],
  },
  {
    icon: '/fastag.svg',
    name: 'Airtel NETC FASTag ',
    desc: 'One of the biggest advantages of the Airtel Xstream Fiber wifi is the wide range...',
    q1: 'What is a fiber leased line? What are its advantages?',
    desc1:
      'A leased-line is also known as a fiber leased line. It is a dedicated fiber-optic service and connects directly to the premises. A leased line can directly connect to the public internet through a dedicated fiber optic cable. Here you do not need to share the infrastructure. Fiber leased line is there solely for the purpose of serving you and it is not shared with any other individual or user. The speed of this leased line ranges from 2 Mbps to 10 Gbps.',
    h1: 'Advantages of fiber leased line',
    advantages: [
      'Faster connection speed',
      'Easy access to cloud computing',
      'Stronger signal',
      'Low latency',
      'Symmetrical speed',
      'High security',
      'Cost-effective',
      'Capability for HD video',
    ],
  },
  {
    icon: '/rupee.svg',
    name: 'Airtel Payments Bank ALL Services ',
    desc: 'One of the biggest advantages of the Airtel Xstream Fiber wifi is the wide range...',
    q1: 'What is a fiber leased line? What are its advantages?',
    desc1:
      'A leased-line is also known as a fiber leased line. It is a dedicated fiber-optic service and connects directly to the premises. A leased line can directly connect to the public internet through a dedicated fiber optic cable. Here you do not need to share the infrastructure. Fiber leased line is there solely for the purpose of serving you and it is not shared with any other individual or user. The speed of this leased line ranges from 2 Mbps to 10 Gbps.',
    h1: 'Advantages of fiber leased line',
    advantages: [
      'Faster connection speed',
      'Easy access to cloud computing',
      'Stronger signal',
      'Low latency',
      'Symmetrical speed',
      'High security',
      'Cost-effective',
      'Capability for HD video',
    ],
  },
  {
    icon: '/sms.svg',
    name: 'Bulk SMS  ',
    desc: 'One of the biggest advantages of the Airtel Xstream Fiber wifi is the wide range...',
    q1: 'What is a fiber leased line? What are its advantages?',
    desc1:
      'A leased-line is also known as a fiber leased line. It is a dedicated fiber-optic service and connects directly to the premises. A leased line can directly connect to the public internet through a dedicated fiber optic cable. Here you do not need to share the infrastructure. Fiber leased line is there solely for the purpose of serving you and it is not shared with any other individual or user. The speed of this leased line ranges from 2 Mbps to 10 Gbps.',
    h1: 'Advantages of fiber leased line',
    advantages: [
      'Faster connection speed',
      'Easy access to cloud computing',
      'Stronger signal',
      'Low latency',
      'Symmetrical speed',
      'High security',
      'Cost-effective',
      'Capability for HD video',
    ],
  },
  {
    icon: '/vip.svg',
    name: 'VIP Numbers  ',
    desc: 'One of the biggest advantages of the Airtel Xstream Fiber wifi is the wide range...',
    q1: 'What is a fiber leased line? What are its advantages?',
    desc1:
      'A leased-line is also known as a fiber leased line. It is a dedicated fiber-optic service and connects directly to the premises. A leased line can directly connect to the public internet through a dedicated fiber optic cable. Here you do not need to share the infrastructure. Fiber leased line is there solely for the purpose of serving you and it is not shared with any other individual or user. The speed of this leased line ranges from 2 Mbps to 10 Gbps.',
    h1: 'Advantages of fiber leased line',
    advantages: [
      'Faster connection speed',
      'Easy access to cloud computing',
      'Stronger signal',
      'Low latency',
      'Symmetrical speed',
      'High security',
      'Cost-effective',
      'Capability for HD video',
    ],
  },
  {
    icon: '/postpaid.svg',
    name: 'Airtel Corporate Postpaid Benefits  ',
    desc: 'One of the biggest advantages of the Airtel Xstream Fiber wifi is the wide range...',
    q1: 'What is a fiber leased line? What are its advantages?',
    desc1:
      'A leased-line is also known as a fiber leased line. It is a dedicated fiber-optic service and connects directly to the premises. A leased line can directly connect to the public internet through a dedicated fiber optic cable. Here you do not need to share the infrastructure. Fiber leased line is there solely for the purpose of serving you and it is not shared with any other individual or user. The speed of this leased line ranges from 2 Mbps to 10 Gbps.',
    h1: 'Advantages of fiber leased line',
    advantages: [
      'Faster connection speed',
      'Easy access to cloud computing',
      'Stronger signal',
      'Low latency',
      'Symmetrical speed',
      'High security',
      'Cost-effective',
      'Capability for HD video',
    ],
  },
]

const testimonials = [
  {
    feedback:
      '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla quis dui turpis viverra in. Amet, dictum tincidunt leo risus eu. Rhoncus tortor elementum elit, pretium suspendisse ut aenean aliquet. Vehicula faucibus fusce a, quam.',
    name: 'rtor elementum ',
  },
  {
    feedback:
      '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla quis dui turpis viverra in. Amet, dictum tincidunt leo risus eu. Rhoncus tortor elementum elit, pretium suspendisse ut aenean aliquet. Vehicula faucibus fusce a, quam.',
    name: 'rtor elementum ',
  },
  {
    feedback:
      '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque nulla quis dui turpis viverra in. Amet, dictum tincidunt leo risus eu. Rhoncus tortor elementum elit, pretium suspendisse ut aenean aliquet. Vehicula faucibus fusce a, quam.',
    name: 'rtor elementum ',
  },
]

export { menus, services, testimonials }
