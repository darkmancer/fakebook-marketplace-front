const countries = {
  AF: 'Afghanistan',
  AX: 'Aland Islands',
  AL: 'Albania',
  DZ: 'Algeria',
  AS: 'American Samoa',
  AD: 'Andorra',
  AO: 'Angola',
  AI: 'Anguilla',
  AQ: 'Antarctica',
  AG: 'Antigua And Barbuda',
  AR: 'Argentina',
  AM: 'Armenia',
  AW: 'Aruba',
  AU: 'Australia',
  AT: 'Austria',
  AZ: 'Azerbaijan',
  BS: 'Bahamas',
  BH: 'Bahrain',
  BD: 'Bangladesh',
  BB: 'Barbados',
  BY: 'Belarus',
  BE: 'Belgium',
  BZ: 'Belize',
  BJ: 'Benin',
  BM: 'Bermuda',
  BT: 'Bhutan',
  BO: 'Bolivia',
  BA: 'Bosnia And Herzegovina',
  BW: 'Botswana',
  BV: 'Bouvet Island',
  BR: 'Brazil',
  IO: 'British Indian Ocean Territory',
  BN: 'Brunei Darussalam',
  BG: 'Bulgaria',
  BF: 'Burkina Faso',
  BI: 'Burundi',
  KH: 'Cambodia',
  CM: 'Cameroon',
  CA: 'Canada',
  CV: 'Cape Verde',
  KY: 'Cayman Islands',
  CF: 'Central African Republic',
  TD: 'Chad',
  CL: 'Chile',
  CN: 'China',
  CX: 'Christmas Island',
  CC: 'Cocos (Keeling) Islands',
  CO: 'Colombia',
  KM: 'Comoros',
  CG: 'Congo',
  CD: 'Congo, Democratic Republic',
  CK: 'Cook Islands',
  CR: 'Costa Rica',
  CI: "Cote D'Ivoire",
  HR: 'Croatia',
  CU: 'Cuba',
  CY: 'Cyprus',
  CZ: 'Czech Republic',
  DK: 'Denmark',
  DJ: 'Djibouti',
  DM: 'Dominica',
  DO: 'Dominican Republic',
  EC: 'Ecuador',
  EG: 'Egypt',
  SV: 'El Salvador',
  GQ: 'Equatorial Guinea',
  ER: 'Eritrea',
  EE: 'Estonia',
  ET: 'Ethiopia',
  FK: 'Falkland Islands (Malvinas)',
  FO: 'Faroe Islands',
  FJ: 'Fiji',
  FI: 'Finland',
  FR: 'France',
  GF: 'French Guiana',
  PF: 'French Polynesia',
  TF: 'French Southern Territories',
  GA: 'Gabon',
  GM: 'Gambia',
  GE: 'Georgia',
  DE: 'Germany',
  GH: 'Ghana',
  GI: 'Gibraltar',
  GR: 'Greece',
  GL: 'Greenland',
  GD: 'Grenada',
  GP: 'Guadeloupe',
  GU: 'Guam',
  GT: 'Guatemala',
  GG: 'Guernsey',
  GN: 'Guinea',
  GW: 'Guinea-Bissau',
  GY: 'Guyana',
  HT: 'Haiti',
  HM: 'Heard Island & Mcdonald Islands',
  VA: 'Holy See (Vatican City State)',
  HN: 'Honduras',
  HK: 'Hong Kong',
  HU: 'Hungary',
  IS: 'Iceland',
  IN: 'India',
  ID: 'Indonesia',
  IR: 'Iran, Islamic Republic Of',
  IQ: 'Iraq',
  IE: 'Ireland',
  IM: 'Isle Of Man',
  IL: 'Israel',
  IT: 'Italy',
  JM: 'Jamaica',
  JP: 'Japan',
  JE: 'Jersey',
  JO: 'Jordan',
  KZ: 'Kazakhstan',
  KE: 'Kenya',
  KI: 'Kiribati',
  KR: 'Korea',
  KW: 'Kuwait',
  KG: 'Kyrgyzstan',
  LA: "Lao People's Democratic Republic",
  LV: 'Latvia',
  LB: 'Lebanon',
  LS: 'Lesotho',
  LR: 'Liberia',
  LY: 'Libyan Arab Jamahiriya',
  LI: 'Liechtenstein',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  MO: 'Macao',
  MK: 'Macedonia',
  MG: 'Madagascar',
  MW: 'Malawi',
  MY: 'Malaysia',
  MV: 'Maldives',
  ML: 'Mali',
  MT: 'Malta',
  MH: 'Marshall Islands',
  MQ: 'Martinique',
  MR: 'Mauritania',
  MU: 'Mauritius',
  YT: 'Mayotte',
  MX: 'Mexico',
  FM: 'Micronesia, Federated States Of',
  MD: 'Moldova',
  MC: 'Monaco',
  MN: 'Mongolia',
  ME: 'Montenegro',
  MS: 'Montserrat',
  MA: 'Morocco',
  MZ: 'Mozambique',
  MM: 'Myanmar',
  NA: 'Namibia',
  NR: 'Nauru',
  NP: 'Nepal',
  NL: 'Netherlands',
  AN: 'Netherlands Antilles',
  NC: 'New Caledonia',
  NZ: 'New Zealand',
  NI: 'Nicaragua',
  NE: 'Niger',
  NG: 'Nigeria',
  NU: 'Niue',
  NF: 'Norfolk Island',
  MP: 'Northern Mariana Islands',
  NO: 'Norway',
  OM: 'Oman',
  PK: 'Pakistan',
  PW: 'Palau',
  PS: 'Palestinian Territory, Occupied',
  PA: 'Panama',
  PG: 'Papua New Guinea',
  PY: 'Paraguay',
  PE: 'Peru',
  PH: 'Philippines',
  PN: 'Pitcairn',
  PL: 'Poland',
  PT: 'Portugal',
  PR: 'Puerto Rico',
  QA: 'Qatar',
  RE: 'Reunion',
  RO: 'Romania',
  RU: 'Russian Federation',
  RW: 'Rwanda',
  BL: 'Saint Barthelemy',
  SH: 'Saint Helena',
  KN: 'Saint Kitts And Nevis',
  LC: 'Saint Lucia',
  MF: 'Saint Martin',
  PM: 'Saint Pierre And Miquelon',
  VC: 'Saint Vincent And Grenadines',
  WS: 'Samoa',
  SM: 'San Marino',
  ST: 'Sao Tome And Principe',
  SA: 'Saudi Arabia',
  SN: 'Senegal',
  RS: 'Serbia',
  SC: 'Seychelles',
  SL: 'Sierra Leone',
  SG: 'Singapore',
  SK: 'Slovakia',
  SI: 'Slovenia',
  SB: 'Solomon Islands',
  SO: 'Somalia',
  ZA: 'South Africa',
  GS: 'South Georgia And Sandwich Isl.',
  ES: 'Spain',
  LK: 'Sri Lanka',
  SD: 'Sudan',
  SR: 'Suriname',
  SJ: 'Svalbard And Jan Mayen',
  SZ: 'Swaziland',
  SE: 'Sweden',
  CH: 'Switzerland',
  SY: 'Syrian Arab Republic',
  TW: 'Taiwan',
  TJ: 'Tajikistan',
  TZ: 'Tanzania',
  TH: 'Thailand',
  TL: 'Timor-Leste',
  TG: 'Togo',
  TK: 'Tokelau',
  TO: 'Tonga',
  TT: 'Trinidad And Tobago',
  TN: 'Tunisia',
  TR: 'Turkey',
  TM: 'Turkmenistan',
  TC: 'Turks And Caicos Islands',
  TV: 'Tuvalu',
  UG: 'Uganda',
  UA: 'Ukraine',
  AE: 'United Arab Emirates',
  GB: 'United Kingdom',
  US: 'United States',
  UM: 'United States Outlying Islands',
  UY: 'Uruguay',
  UZ: 'Uzbekistan',
  VU: 'Vanuatu',
  VE: 'Venezuela',
  VN: 'Viet Nam',
  VG: 'Virgin Islands, British',
  VI: 'Virgin Islands, U.S.',
  WF: 'Wallis And Futuna',
  EH: 'Western Sahara',
  YE: 'Yemen',
  ZM: 'Zambia',
  ZW: 'Zimbabwe'
}
// {
// AD:"€",
// AE:"د.إ.‏",
// AF:"؋",
// AG:"$",
// AI:"$",
// AL:"Lekë",
// AM:"֏",
// AO:"Kz",
// AR:"$"
// AS:"$"
// AT:"€"
// AU:"$"
// AW:"Afl."
// AX:"€"
// AZ:"₼"
// BA:"KM"
// BB:"$"
// BD:"৳"
// BE:"€"
// BF:"CFA"
// BG:"лв."
// BI:"FBu"
// BJ:"CFA"
// BL:"€"
// BM:"$"
// BN:"$"
// BO:"Bs"
// BQ:"$"
// BR:"R$"
// BS:"$"
// BT:"Nu."
// BW:"P"
// BY:"р."
// BZ:"$"
// CA:"$"
// CC:"$"
// CD:"FC"
// CF:"FCFA"
// CG:"FCFA"
// CH:"CHF"
// CI:"CFA"
// CK:"$"
// CL:"$"
// CM:"FCFA"
// CN:¥
// CO:$
// CR:₡
// CU:$
// CV:​
// CW:NAf.
// CX:$
// CY:€
// CZ:Kč
// DE:€
// DG:US$
// DJ:Fdj
// DK:kr.
// DM:$
// DO:RD$
// DZ:د.ج.‏
// EA:€
// EC:$
// EE:€
// EG:ج.م.‏
// EH:د.م.‏
// ER:Nfk
// ES:€
// ET:Br
// FI:€
// FJ:$
// FK:£
// FM:US$
// FO:kr
// FR:€
// GA:FCFA
// GB:£
// GD:$
// GE:₾
// GF:€
// GG:£
// GH:GH₵
// GI:£
// GL:kr.
// GM:D
// GN:FG
// GP:€
// GQ:FCFA
// GR:€
// GT:Q
// GU:$
// GW:CFA
// GY:$
// HK:HK$
// HN:L
// HR:HRK
// HT:G
// HU:HUF
// IC:€
// ID:Rp
// IE:€
// IL:₪
// IM:£
// IN:₹
// IO:US$
// IQ:IQD
// IR:IRR
// IS:ISK
// IT:€
// JE:£
// JM:$
// JO:د.أ.‏
// JP:¥
// KE:Ksh
// KG:сом
// KH:៛
// KI:$
// KM:CF
// KN:$
// KP:KPW
// KR:₩
// KW:د.ك.‏
// KY:$
// KZ:₸
// LA:₭
// LB:ل.ل.‏
// LC:$
// LI:CHF
// LK:Rs.
// LR:$
// LS:R
// LT:€
// LU:€
// LV:€
// LY:د.ل.‏
// MA:MAD
// MC:€
// MD:L
// ME:€
// MF:€
// MG:Ar
// MH:$
// MK:den
// ML:CFA
// MM:K
// MN:₮
// MO:MOP$
// MP:$
// MQ:€
// MR:UM
// MS:$
// MT:€
// MU:Rs
// MV:MVR
// MW:MK
// MX:$
// MY:RM
// MZ:MTn
// NA:$
// NC:FCFP
// NE:CFA
// NF:$
// NG:₦
// NI:C$
// NL:€
// NO:kr
// NP:नेरू
// NR:$
// NU:$
// NZ:$
// OM:ر.ع.‏
// PA:B/.
// PE:S/.
// PF:FCFP
// PG:K
// PH:₱
// PK:Rs
// PL:PLN
// PM:€
// PN:$
// PR:$
// PS:₪
// PT:€
// PW:US$
// PY:Gs.
// QA:ر.ق.‏
// RE:€
// RO:RON
// RS:RSD
// RU:RUB
// RW:"RF"
// SB:"$"
// SC:"SR"
// SD:"SDG"
// SE:"kr"
// SG:"$"
// SH:"£"
// SI:"€"
// SJ:"kr"
// SK:"€"
// SL:"Le"
// SM:"€"
// SN:"CFA"
// SO:"S"
// SR:"$"
// SS:"£"
// ST:"Db"
// SV:"$"
// SX:"NAf."
// SZ:"E"
// TC:"US$"
// TD:"FCFA"
// TG:"CFA"
// TH:"฿"
// TJ:"сом"
// TK:"$"
// TL:"US$"
// TM:"TMT"
// TO:"T$"
// TR:"TRY",
// TT:"$"
// TV:"$"
// TW:"NT$"
// TZ:"TSh"
// UA:"₴"
// UG:"USh"
// UM:"$"
// US:"$"
// UY:"$"
// UZ:"soʻm"
// VC:"$"
// VE:"Bs."
// VG:"US$"
// VI:"$",
// VN:"₫",
// VU:"VT",
// WF:"FCFP",
// WS:"WS$",
// XK:"€",
// YT:"€",
// ZA:"R",
// ZM:"K",
//   ZW: "US$"}