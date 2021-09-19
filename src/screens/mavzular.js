import video1 from '../assets/corelvideos/rectangle_simple.MP4'
import video2 from '../assets/corelvideos/quadrat.MP4'
import video3 from '../assets/corelvideos/colors.MP4'
import video4 from '../assets/corelvideos/border_radius.MP4'
import video5 from '../assets/corelvideos/liniya.MP4'
import video6 from '../assets/corelvideos/razmer.MP4'
import video7 from '../assets/corelvideos/beshburchak.MP4'
import video8 from '../assets/corelvideos/circle.MP4'
import video9 from '../assets/corelvideos/circle_equal.MP4'
import video10 from '../assets/corelvideos/circle_equal.MP4'
import video11 from '../assets/corelvideos/magic.MP4'
import video12 from '../assets/corelvideos/colorcopy.MP4'
import video13 from '../assets/corelvideos/colorgradient.MP4'
import video14 from '../assets/corelvideos/connector.MP4'
import video15 from '../assets/corelvideos/cropper.MP4'
import video16 from '../assets/corelvideos/text.MP4'

import amaliy1 from './amaliy/1-Amaliy mashg\'ulot.pdf'
import amaliy2 from './amaliy/2-Amaliy mashg\'ulot.pdf'
import amaliy3 from './amaliy/3-Amaliy mashg\'ulot.pdf'
import amaliy4 from './amaliy/4-Amaliy mashg\'ulot.pdf'
import amaliy5 from './amaliy/5-Amaliy mashg\'ulot.pdf'
import amaliy6 from './amaliy/6-Amaliy mashg\'ulot.pdf'
import amaliy7 from './amaliy/7-Amaliy mashg\'ulot.pdf'

import maruza1 from './maruza/1-Ma\'ruza.pdf'
import maruza2 from './maruza/2-Ma\'ruza.pdf'
import maruza3 from './maruza/3-Ma\'ruza.pdf'
import maruza4 from './maruza/4-Ma\'ruza.pdf'
import maruza5 from './maruza/5-Ma\'ruza.pdf'
import maruza6 from './maruza/6-Ma\'ruza.pdf'
import maruza7 from './maruza/7-Ma\'ruza.pdf'
import maruza8 from './maruza/8-Ma\'ruza.pdf'
import maruza9 from './maruza/9-Ma\'ruza.pdf'

import amaliy_topshiriq1 from './amaliym/2-Amaliy topshiriqlar.pdf'
import amaliy_topshiriq2 from './amaliym/2-Amaliy topshiriqlar.pdf'
import amaliy_topshiriq3 from './amaliym/3-Amaliy topshiriqlar.pdf'
import amaliy_topshiriq4 from './amaliym/4-Amaliy topshiriqlar.pdf'
import amaliy_topshiriq5 from './amaliym/5-Amaliy topshiriqlar.pdf'

import kim1 from './kim/kim1.mp4'


export function getAlias(menu, alias) {
    const hammaMalumot = {
        fan_haqida: {
            title: 'Fan haqida',
            content: {
                maqsad: ``
            }
        },
        maruza: {
            title: 'Ma\'ruza mashg\'ulotlar',
            content: {
                "1-maruza": {
                    text: maruza1
                },
                "2-maruza": {
                    text: maruza2
                },
                "3-maruza": {
                    text: maruza3
                },
                "4-maruza": {
                    text: maruza4
                },
                "5-maruza": {
                    text: maruza5
                },
                "6-maruza": {
                    text: maruza6
                },
                "7-maruza": {
                    text: maruza7
                },
                "8-maruza": {
                    text: maruza8
                },
                "9-maruza": {
                    text: maruza9
                }
            }
        },
        amaliy: {
            title: "Amaliy mashg'ulotlar",
            content: {
                "1-amaliy": {
                    text: amaliy1
                },
                "2-amaliy": {
                    text: amaliy2
                },
                "3-amaliy": {
                    text: amaliy3
                },
                "4-amaliy": {
                    text: amaliy4
                },
                "5-amaliy": {
                    text: amaliy5
                },
                "6-amaliy": {
                    text: amaliy6
                },
                "7-amaliy": {
                    text: amaliy7
                }
            }
        },
        mustaqil: {
            title: "Mustaqil ish mavzulari",
            content: {
                "": {
                    text: ``
                }
            }
        },
        xgi: {
            title: "XGI mavzulari",
            content: {
                "": {
                    text: ``
                }
            }
        },
        amaliy_topshiriqlar: {
            title: "Amaliy topshiriqlar",
            content: {
                "1-amaliy_topshiriq": {
                    text: amaliy_topshiriq1
                },
                "2-amaliy_topshiriq": {
                    text: amaliy_topshiriq2
                },
                "3-amaliy_topshiriq": {
                    text: amaliy_topshiriq3
                },
                "4-amaliy_topshiriq": {
                    text: amaliy_topshiriq4
                },
                "5-amaliy_topshiriq": {
                    text: amaliy_topshiriq5
                },
            }
        },
        video_darslar: {
            title: "Video darslar",
            content: {

                "1-DARS": {
                    text: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
                    video: video1
                },

                "2-DARS": {
                    text: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
                    video: video2
                },

                "3-DARS": {
                    text: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
                    video: video3
                },

                "4-DARS": {
                    text: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
                    video: video4
                },

                "5-DARS": {
                    text: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
                    video: video5
                },

                "6-DARS": {
                    text: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
                    video: video6
                },

                "7-DARS": {
                    text: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
                    video: video7
                },

                "8-DARS": {
                    text: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
                    video: video8
                },

                "9-DARS": {
                    text: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
                    video: video9
                },

                "10-DARS": {
                    text: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
                    video: video10
                },

                "11-DARS": {
                    text: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
                    video: video11
                },

                "12-DARS": {
                    text: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
                    video: video12
                },

                "13-DARS": {
                    text: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
                    video: video13
                },

                "14-DARS": {
                    text: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
                    video: video14
                },

                "15-DARS": {
                    text: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
                    video: video15
                },

                "16-DARS": {
                    text: "In publishing and graphic design, Lorem ipsum is a placeholder text.",
                    video: video16
                }
            }
        },
        kim_modellar: {
            title: "KIM modellar",
            content: {
                "kim1": {
                    text: "",
                    video: kim1
                }
            }
        }
    }
    return hammaMalumot[menu]['content'][alias]
}