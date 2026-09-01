import { STATES_DATA } from './statesData';
import { StateData } from '../types';

export interface StateMapPath {
  id: string;
  path: string;
  labelPos: { x: number; y: number };
  shortNamePos?: { x: number; y: number };
}

// Vector paths projected on a 650 x 720 coordinate grid representing India with all 28 states & 8 UTs
export const MAP_PATHS: Record<string, StateMapPath> = {
  // Ladakh (North)
  'IN-LA': {
    id: 'IN-LA',
    path: 'M 215,25 L 260,35 L 305,55 L 325,95 L 300,125 L 275,135 L 255,115 L 230,120 L 210,95 L 200,60 Z',
    labelPos: { x: 260, y: 75 },
    shortNamePos: { x: 260, y: 80 }
  },
  // Jammu & Kashmir (North)
  'IN-JK': {
    id: 'IN-JK',
    path: 'M 175,65 L 200,60 L 210,95 L 230,120 L 210,135 L 180,140 L 165,115 L 160,85 Z',
    labelPos: { x: 190, y: 105 },
    shortNamePos: { x: 190, y: 105 }
  },
  // Himachal Pradesh (North)
  'IN-HP': {
    id: 'IN-HP',
    path: 'M 210,135 L 230,120 L 255,115 L 275,135 L 260,170 L 230,175 L 215,160 Z',
    labelPos: { x: 240, y: 145 },
    shortNamePos: { x: 240, y: 145 }
  },
  // Punjab (North)
  'IN-PB': {
    id: 'IN-PB',
    path: 'M 180,140 L 210,135 L 215,160 L 210,195 L 175,185 L 165,155 Z',
    labelPos: { x: 190, y: 165 },
    shortNamePos: { x: 190, y: 165 }
  },
  // Chandigarh (UT)
  'IN-CH': {
    id: 'IN-CH',
    path: 'M 216,165 A 6,6 0 1,0 216,177 A 6,6 0 1,0 216,165 Z',
    labelPos: { x: 216, y: 171 },
    shortNamePos: { x: 216, y: 171 }
  },
  // Uttarakhand (North)
  'IN-UT': {
    id: 'IN-UT',
    path: 'M 260,170 L 275,135 L 300,165 L 315,195 L 285,210 L 265,195 Z',
    labelPos: { x: 285, y: 175 },
    shortNamePos: { x: 285, y: 175 }
  },
  // Haryana (North)
  'IN-HR': {
    id: 'IN-HR',
    path: 'M 215,160 L 230,175 L 245,180 L 240,225 L 205,230 L 195,195 L 210,195 Z',
    labelPos: { x: 215, y: 205 },
    shortNamePos: { x: 215, y: 205 }
  },
  // Delhi (NCT)
  'IN-DL': {
    id: 'IN-DL',
    path: 'M 235,210 A 7,7 0 1,0 235,224 A 7,7 0 1,0 235,210 Z',
    labelPos: { x: 235, y: 217 },
    shortNamePos: { x: 235, y: 217 }
  },
  // Rajasthan (West)
  'IN-RJ': {
    id: 'IN-RJ',
    path: 'M 175,185 L 205,230 L 240,225 L 245,260 L 220,310 L 180,320 L 125,290 L 115,245 L 145,200 Z',
    labelPos: { x: 180, y: 255 },
    shortNamePos: { x: 180, y: 255 }
  },
  // Uttar Pradesh (North)
  'IN-UP': {
    id: 'IN-UP',
    path: 'M 245,180 L 265,195 L 285,210 L 315,195 L 365,235 L 390,270 L 375,305 L 325,320 L 285,305 L 255,300 L 245,260 L 240,225 Z',
    labelPos: { x: 310, y: 260 },
    shortNamePos: { x: 310, y: 260 }
  },
  // Bihar (East)
  'IN-BR': {
    id: 'IN-BR',
    path: 'M 365,235 L 435,245 L 450,285 L 425,300 L 390,295 L 375,305 L 390,270 Z',
    labelPos: { x: 410, y: 270 },
    shortNamePos: { x: 410, y: 270 }
  },
  // Sikkim (North East)
  'IN-SK': {
    id: 'IN-SK',
    path: 'M 448,220 L 465,218 L 470,240 L 452,242 Z',
    labelPos: { x: 460, y: 230 },
    shortNamePos: { x: 460, y: 230 }
  },
  // West Bengal (East)
  'IN-WB': {
    id: 'IN-WB',
    path: 'M 452,242 L 470,240 L 465,270 L 450,285 L 440,335 L 475,355 L 465,395 L 435,370 L 425,335 L 450,310 Z',
    labelPos: { x: 450, y: 320 },
    shortNamePos: { x: 450, y: 320 }
  },
  // Jharkhand (East)
  'IN-JH': {
    id: 'IN-JH',
    path: 'M 390,295 L 425,300 L 450,310 L 425,355 L 385,360 L 375,325 L 375,305 Z',
    labelPos: { x: 405, y: 330 },
    shortNamePos: { x: 405, y: 330 }
  },
  // Odisha (East)
  'IN-OR': {
    id: 'IN-OR',
    path: 'M 385,360 L 425,355 L 435,370 L 420,430 L 375,455 L 350,430 L 360,390 Z',
    labelPos: { x: 390, y: 405 },
    shortNamePos: { x: 390, y: 405 }
  },
  // Chhattisgarh (Central)
  'IN-CT': {
    id: 'IN-CT',
    path: 'M 325,320 L 375,325 L 360,390 L 350,430 L 330,465 L 315,445 L 310,380 L 335,350 Z',
    labelPos: { x: 335, y: 390 },
    shortNamePos: { x: 335, y: 390 }
  },
  // Madhya Pradesh (Central)
  'IN-MP': {
    id: 'IN-MP',
    path: 'M 220,310 L 245,260 L 255,300 L 285,305 L 325,320 L 335,350 L 310,380 L 280,380 L 245,360 L 205,340 Z',
    labelPos: { x: 265, y: 335 },
    shortNamePos: { x: 265, y: 335 }
  },
  // Gujarat (West)
  'IN-GJ': {
    id: 'IN-GJ',
    path: 'M 125,290 L 180,320 L 205,340 L 195,385 L 175,410 L 140,410 L 145,375 L 110,370 L 80,345 L 90,310 Z',
    labelPos: { x: 145, y: 350 },
    shortNamePos: { x: 145, y: 350 }
  },
  // Maharashtra (West)
  'IN-MH': {
    id: 'IN-MH',
    path: 'M 175,410 L 195,385 L 245,360 L 280,380 L 310,380 L 315,445 L 280,470 L 230,485 L 180,480 L 170,440 Z',
    labelPos: { x: 235, y: 430 },
    shortNamePos: { x: 235, y: 430 }
  },
  // Goa (West)
  'IN-GA': {
    id: 'IN-GA',
    path: 'M 183,502 L 195,502 L 192,518 L 180,518 Z',
    labelPos: { x: 187, y: 510 },
    shortNamePos: { x: 187, y: 510 }
  },
  // Dadra & Nagar Haveli and Daman & Diu (UT)
  'IN-DN': {
    id: 'IN-DN',
    path: 'M 165,395 A 5,5 0 1,0 165,405 A 5,5 0 1,0 165,395 Z',
    labelPos: { x: 165, y: 400 },
    shortNamePos: { x: 165, y: 400 }
  },
  // Telangana (South)
  'IN-TG': {
    id: 'IN-TG',
    path: 'M 280,470 L 315,445 L 330,465 L 320,510 L 275,520 L 260,490 Z',
    labelPos: { x: 290, y: 485 },
    shortNamePos: { x: 290, y: 485 }
  },
  // Andhra Pradesh (South)
  'IN-AP': {
    id: 'IN-AP',
    path: 'M 350,430 L 375,455 L 340,510 L 310,575 L 275,570 L 275,520 L 320,510 L 330,465 Z',
    labelPos: { x: 315, y: 535 },
    shortNamePos: { x: 315, y: 535 }
  },
  // Karnataka (South)
  'IN-KA': {
    id: 'IN-KA',
    path: 'M 180,480 L 230,485 L 260,490 L 275,520 L 275,570 L 245,600 L 210,590 L 190,545 L 183,502 Z',
    labelPos: { x: 230, y: 540 },
    shortNamePos: { x: 230, y: 540 }
  },
  // Kerala (South)
  'IN-KL': {
    id: 'IN-KL',
    path: 'M 210,590 L 235,595 L 245,640 L 235,675 L 225,665 L 215,625 Z',
    labelPos: { x: 228, y: 635 },
    shortNamePos: { x: 228, y: 635 }
  },
  // Tamil Nadu (South)
  'IN-TN': {
    id: 'IN-TN',
    path: 'M 245,600 L 275,570 L 310,575 L 295,640 L 260,670 L 235,675 L 245,640 L 235,595 Z',
    labelPos: { x: 270, y: 625 },
    shortNamePos: { x: 270, y: 625 }
  },
  // Puducherry (UT - multi point)
  'IN-PY': {
    id: 'IN-PY',
    path: 'M 298,590 A 6,6 0 1,0 298,602 A 6,6 0 1,0 298,590 Z',
    labelPos: { x: 298, y: 596 },
    shortNamePos: { x: 298, y: 596 }
  },
  // Lakshadweep (UT)
  'IN-LD': {
    id: 'IN-LD',
    path: 'M 155,615 A 5,5 0 1,0 155,625 A 5,5 0 1,0 155,615 Z M 150,640 A 4,4 0 1,0 150,648 A 4,4 0 1,0 150,640 Z M 160,665 A 4,4 0 1,0 160,673 A 4,4 0 1,0 160,665 Z',
    labelPos: { x: 155, y: 645 },
    shortNamePos: { x: 155, y: 645 }
  },
  // Andaman & Nicobar Islands (UT)
  'IN-AN': {
    id: 'IN-AN',
    path: 'M 545,520 A 4,4 0 1,0 545,528 A 4,4 0 1,0 545,520 Z M 548,545 A 5,5 0 1,0 548,555 A 5,5 0 1,0 548,545 Z M 552,580 A 5,5 0 1,0 552,590 A 5,5 0 1,0 552,580 Z M 558,620 A 6,6 0 1,0 558,632 A 6,6 0 1,0 558,620 Z M 562,655 A 6,6 0 1,0 562,667 A 6,6 0 1,0 562,655 Z',
    labelPos: { x: 555, y: 590 },
    shortNamePos: { x: 555, y: 590 }
  },
  // Assam (North East)
  'IN-AS': {
    id: 'IN-AS',
    path: 'M 490,250 L 530,240 L 565,245 L 560,270 L 525,275 L 515,305 L 485,290 L 480,265 Z',
    labelPos: { x: 525, y: 265 },
    shortNamePos: { x: 525, y: 265 }
  },
  // Arunachal Pradesh (North East)
  'IN-AR': {
    id: 'IN-AR',
    path: 'M 505,225 L 550,195 L 610,215 L 620,245 L 575,250 L 530,240 L 490,250 Z',
    labelPos: { x: 560, y: 225 },
    shortNamePos: { x: 560, y: 225 }
  },
  // Meghalaya (North East)
  'IN-ML': {
    id: 'IN-ML',
    path: 'M 485,290 L 515,290 L 520,310 L 475,310 Z',
    labelPos: { x: 498, y: 300 },
    shortNamePos: { x: 498, y: 300 }
  },
  // Nagaland (North East)
  'IN-NL': {
    id: 'IN-NL',
    path: 'M 575,250 L 600,255 L 595,290 L 570,280 Z',
    labelPos: { x: 585, y: 270 },
    shortNamePos: { x: 585, y: 270 }
  },
  // Manipur (North East)
  'IN-MN': {
    id: 'IN-MN',
    path: 'M 570,280 L 595,290 L 585,330 L 565,320 Z',
    labelPos: { x: 580, y: 305 },
    shortNamePos: { x: 580, y: 305 }
  },
  // Mizoram (North East)
  'IN-MZ': {
    id: 'IN-MZ',
    path: 'M 545,335 L 565,320 L 565,370 L 545,365 Z',
    labelPos: { x: 555, y: 345 },
    shortNamePos: { x: 555, y: 345 }
  },
  // Tripura (North East)
  'IN-TR': {
    id: 'IN-TR',
    path: 'M 525,325 L 545,335 L 540,365 L 520,355 Z',
    labelPos: { x: 532, y: 345 },
    shortNamePos: { x: 532, y: 345 }
  }
};

// Combine metadata with paths
export const ALL_STATES_DATA: StateData[] = Object.keys(STATES_DATA).map((key) => {
  const meta = STATES_DATA[key];
  const mapPath = MAP_PATHS[key] || {
    id: key,
    path: 'M 0,0 Z',
    labelPos: { x: 300, y: 300 }
  };
  return {
    ...meta,
    path: mapPath.path,
    labelPos: mapPath.labelPos
  };
});
