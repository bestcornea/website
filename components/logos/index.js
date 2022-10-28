import ChuLogo from 'components/logos/chu.js'
import ImeldaLogo from 'components/logos/imelda.js'
import KceLogo from 'components/logos/kce.js'
import MmLogo from 'components/logos/mm.js'
import OkLogo from 'components/logos/ok.js'
import StJanLogo from 'components/logos/stjan.js'
import UlbLogo from 'components/logos/ulb.js'
import UzaLogo from 'components/logos/uza.js'
import UzbLogo from 'components/logos/uzb.js'
import UzgLogo from 'components/logos/uzg.js'
import UzlLogo from 'components/logos/uzl.js'
import ZolLogo from 'components/logos/zol.js'

export const order = [
  // KCE first, as they finance
  'kce',
  // University hospitals, starting with UZA where the CI is from
  'uza',
  'uzb',
  'ulb',
  'uzg',
  'uzl',
  'chu',
  // Other hospitals
  'stjan',
  'imelda',
  'mm',
  'ok',
  'zol',
]

export const links = {
  kce: "https://kce.fgov.be/en/kce-trials/funded-trials/best-cornea-a-randomised-multicentric-parallel-group-pragmatic-trial-of-descemet-stripping-automated",
  uza: "https://www.uza.be/",
  uzb: "https://www.uzbrussel.be/",
  ulb: "https://www.erasme.ulb.ac.be/",
  uzg: "https://www.uzgent.be/",
  uzl: "https://www.uzleuven.be/",
  chu: "https://www.chuliege.be/",
  stjan: "https://www.azsintjan.be/",
  imelda: "https://www.imelda.be/",
  mm: "https://www.mariamiddelares.be/",
  ok: "https://oogkliniek.be/",
  zol: "https://www.zol.be/",
}

export const logos = {
  kce: props => <KceLogo {...props} />,
  uza:props => <UzaLogo {...props} />,
  uzb: props => <UzbLogo {...props} />,
  ulb: props => <UlbLogo {...props} />,
  uzg: props => <UzgLogo {...props} />,
  uzl: props => <UzlLogo {...props} />,
  chu: props => <ChuLogo {...props} />,
  stjan: props => <StJanLogo {...props} />,
  imelda: props => <ImeldaLogo {...props} />,
  mm: props => <MmLogo {...props} />,
  ok: props => <OkLogo {...props} />,
  zol: props => <ZolLogo {...props} />,
}
