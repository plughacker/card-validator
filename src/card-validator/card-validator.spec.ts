import { describe, it, expect } from 'vitest'

import valid from './card-validator'

const cards = [
  {
    issuer: 'American Express',
    cardNumber: '371372427515352',
  },
  {
    issuer: 'American Express',
    cardNumber: '347050342094197',
  },
  {
    issuer: 'American Express',
    cardNumber: '376387542398406',
  },
  {
    issuer: 'American Express',
    cardNumber: '378650494220979',
  },
  {
    issuer: 'American Express',
    cardNumber: '377463222821071',
  },
  {
    issuer: 'American Express',
    cardNumber: '370466736800330',
  },
  {
    issuer: 'American Express',
    cardNumber: '377787760664851',
  },
  {
    issuer: 'American Express',
    cardNumber: '376070090660498',
  },
  {
    issuer: 'American Express',
    cardNumber: '377343936184729',
  },
  {
    issuer: 'American Express',
    cardNumber: '379399548966828',
  },
  {
    issuer: 'American Express',
    cardNumber: '343605747331884',
  },
  {
    issuer: 'American Express',
    cardNumber: '347221172333639',
  },
  {
    issuer: 'American Express',
    cardNumber: '373758070386570',
  },
  {
    issuer: 'American Express',
    cardNumber: '347327240275098',
  },
  {
    issuer: 'American Express',
    cardNumber: '376061127557062',
  },
  {
    issuer: 'American Express',
    cardNumber: '377796794450344',
  },
  {
    issuer: 'American Express',
    cardNumber: '346856896994603',
  },
  {
    issuer: 'American Express',
    cardNumber: '340892749353073',
  },
  {
    issuer: 'American Express',
    cardNumber: '378845615573062',
  },
  {
    issuer: 'American Express',
    cardNumber: '372602316932659',
  },
  {
    issuer: 'American Express',
    cardNumber: '343921955051837',
  },
  {
    issuer: 'American Express',
    cardNumber: '373776194131607',
  },
  {
    issuer: 'American Express',
    cardNumber: '373031387841111',
  },
  {
    issuer: 'American Express',
    cardNumber: '376770423308919',
  },
  {
    issuer: 'American Express',
    cardNumber: '374713268136211',
  },
  {
    issuer: 'American Express',
    cardNumber: '340442752136260',
  },
  {
    issuer: 'American Express',
    cardNumber: '375779467166019',
  },
  {
    issuer: 'American Express',
    cardNumber: '340843246821435',
  },
  {
    issuer: 'American Express',
    cardNumber: '342077034696596',
  },
  {
    issuer: 'American Express',
    cardNumber: '372817840521550',
  },
  {
    issuer: 'American Express',
    cardNumber: '346080647599997',
  },
  {
    issuer: 'American Express',
    cardNumber: '378451099435892',
  },
  {
    issuer: 'American Express',
    cardNumber: '342698276784103',
  },
  {
    issuer: 'American Express',
    cardNumber: '377801342915192',
  },
  {
    issuer: 'American Express',
    cardNumber: '347360139490791',
  },
  {
    issuer: 'American Express',
    cardNumber: '371026232277786',
  },
  {
    issuer: 'American Express',
    cardNumber: '349099013043767',
  },
  {
    issuer: 'American Express',
    cardNumber: '371469894685872',
  },
  {
    issuer: 'American Express',
    cardNumber: '371597774562520',
  },
  {
    issuer: 'American Express',
    cardNumber: '346635001329362',
  },
  {
    issuer: 'American Express',
    cardNumber: '349563930546293',
  },
  {
    issuer: 'American Express',
    cardNumber: '371315271601802',
  },
  {
    issuer: 'American Express',
    cardNumber: '378932410631962',
  },
  {
    issuer: 'American Express',
    cardNumber: '371699857742761',
  },
  {
    issuer: 'American Express',
    cardNumber: '348255329535307',
  },
  {
    issuer: 'American Express',
    cardNumber: '370447820892896',
  },
  {
    issuer: 'American Express',
    cardNumber: '377251772835876',
  },
  {
    issuer: 'American Express',
    cardNumber: '343489889895992',
  },
  {
    issuer: 'American Express',
    cardNumber: '375895845681402',
  },
  {
    issuer: 'American Express',
    cardNumber: '348650707331776',
  },
  {
    issuer: 'American Express',
    cardNumber: '370743505139987',
  },
  {
    issuer: 'American Express',
    cardNumber: '344831471818982',
  },
  {
    issuer: 'American Express',
    cardNumber: '340045517388066',
  },
  {
    issuer: 'American Express',
    cardNumber: '340934862629515',
  },
  {
    issuer: 'American Express',
    cardNumber: '378559394204332',
  },
  {
    issuer: 'American Express',
    cardNumber: '343051754295268',
  },
  {
    issuer: 'American Express',
    cardNumber: '346658042296432',
  },
  {
    issuer: 'American Express',
    cardNumber: '343005075609474',
  },
  {
    issuer: 'American Express',
    cardNumber: '371102316730857',
  },
  {
    issuer: 'American Express',
    cardNumber: '348354062545613',
  },
  {
    issuer: 'American Express',
    cardNumber: '342709387438677',
  },
  {
    issuer: 'American Express',
    cardNumber: '371302455119884',
  },
  {
    issuer: 'American Express',
    cardNumber: '344437923478415',
  },
  {
    issuer: 'American Express',
    cardNumber: '343113694409894',
  },
  {
    issuer: 'American Express',
    cardNumber: '344962007556299',
  },
  {
    issuer: 'American Express',
    cardNumber: '345883209444085',
  },
  {
    issuer: 'American Express',
    cardNumber: '343135219837051',
  },
  {
    issuer: 'American Express',
    cardNumber: '345567144797265',
  },
  {
    issuer: 'American Express',
    cardNumber: '348981836904823',
  },
  {
    issuer: 'American Express',
    cardNumber: '374293067954320',
  },
  {
    issuer: 'American Express',
    cardNumber: '377738497984393',
  },
  {
    issuer: 'American Express',
    cardNumber: '372244280786272',
  },
  {
    issuer: 'American Express',
    cardNumber: '343678044747243',
  },
  {
    issuer: 'American Express',
    cardNumber: '377425383289497',
  },
  {
    issuer: 'American Express',
    cardNumber: '370997713880986',
  },
  {
    issuer: 'American Express',
    cardNumber: '373680781716640',
  },
  {
    issuer: 'American Express',
    cardNumber: '378696861816774',
  },
  {
    issuer: 'American Express',
    cardNumber: '375500867525517',
  },
  {
    issuer: 'American Express',
    cardNumber: '376181511068219',
  },
  {
    issuer: 'American Express',
    cardNumber: '348548942415752',
  },
  {
    issuer: 'American Express',
    cardNumber: '370941008059724',
  },
  {
    issuer: 'American Express',
    cardNumber: '346900704838741',
  },
  {
    issuer: 'American Express',
    cardNumber: '346594475607987',
  },
  {
    issuer: 'American Express',
    cardNumber: '376142867508653',
  },
  {
    issuer: 'American Express',
    cardNumber: '342053250831324',
  },
  {
    issuer: 'American Express',
    cardNumber: '377144161716304',
  },
  {
    issuer: 'American Express',
    cardNumber: '341803434171596',
  },
  {
    issuer: 'American Express',
    cardNumber: '340257927505193',
  },
  {
    issuer: 'American Express',
    cardNumber: '341729877264517',
  },
  {
    issuer: 'American Express',
    cardNumber: '341351327105529',
  },
  {
    issuer: 'American Express',
    cardNumber: '375095122552026',
  },
  {
    issuer: 'American Express',
    cardNumber: '347649624751638',
  },
  {
    issuer: 'American Express',
    cardNumber: '346707539870843',
  },
  {
    issuer: 'American Express',
    cardNumber: '349700296697126',
  },
  {
    issuer: 'American Express',
    cardNumber: '343157927114540',
  },
  {
    issuer: 'American Express',
    cardNumber: '344605157179558',
  },
  {
    issuer: 'American Express',
    cardNumber: '372928417436203',
  },
  {
    issuer: 'American Express',
    cardNumber: '347717272307803',
  },
  {
    issuer: 'American Express',
    cardNumber: '344533770774250',
  },
  {
    issuer: 'American Express',
    cardNumber: '340441526378521',
  },
  {
    issuer: 'American Express',
    cardNumber: '345811967803820',
  },
  {
    issuer: 'American Express',
    cardNumber: '345174753736625',
  },
  {
    issuer: 'American Express',
    cardNumber: '378936141763960',
  },
  {
    issuer: 'American Express',
    cardNumber: '376735114307314',
  },
  {
    issuer: 'American Express',
    cardNumber: '378706985603030',
  },
  {
    issuer: 'American Express',
    cardNumber: '379356310560643',
  },
  {
    issuer: 'American Express',
    cardNumber: '378638865089396',
  },
  {
    issuer: 'American Express',
    cardNumber: '346154562200830',
  },
  {
    issuer: 'American Express',
    cardNumber: '348334832142305',
  },
  {
    issuer: 'American Express',
    cardNumber: '375002832698248',
  },
  {
    issuer: 'American Express',
    cardNumber: '342993987693580',
  },
  {
    issuer: 'American Express',
    cardNumber: '374804425237180',
  },
  {
    issuer: 'American Express',
    cardNumber: '373881110699164',
  },
  {
    issuer: 'American Express',
    cardNumber: '372565488808736',
  },
  {
    issuer: 'American Express',
    cardNumber: '342695059457287',
  },
  {
    issuer: 'American Express',
    cardNumber: '372364030750988',
  },
  {
    issuer: 'American Express',
    cardNumber: '344494073660649',
  },
  {
    issuer: 'American Express',
    cardNumber: '340189448740928',
  },
  {
    issuer: 'American Express',
    cardNumber: '348753176794142',
  },
  {
    issuer: 'American Express',
    cardNumber: '347488812469798',
  },
  {
    issuer: 'American Express',
    cardNumber: '375768837739522',
  },
  {
    issuer: 'American Express',
    cardNumber: '343856998176342',
  },
  {
    issuer: 'American Express',
    cardNumber: '374650968368258',
  },
  {
    issuer: 'American Express',
    cardNumber: '344789225292013',
  },
  {
    issuer: 'American Express',
    cardNumber: '341134176375025',
  },
  {
    issuer: 'American Express',
    cardNumber: '377912971752085',
  },
  {
    issuer: 'American Express',
    cardNumber: '344512791804171',
  },
  {
    issuer: 'American Express',
    cardNumber: '348337936701629',
  },
  {
    issuer: 'American Express',
    cardNumber: '372089192553801',
  },
  {
    issuer: 'American Express',
    cardNumber: '377562379222726',
  },
  {
    issuer: 'American Express',
    cardNumber: '375013112173240',
  },
  {
    issuer: 'American Express',
    cardNumber: '378966897411647',
  },
  {
    issuer: 'American Express',
    cardNumber: '345262496337650',
  },
  {
    issuer: 'American Express',
    cardNumber: '349685927936078',
  },
  {
    issuer: 'American Express',
    cardNumber: '379291752126878',
  },
  {
    issuer: 'American Express',
    cardNumber: '345504728956173',
  },
  {
    issuer: 'American Express',
    cardNumber: '344581104901206',
  },
  {
    issuer: 'American Express',
    cardNumber: '373358161821880',
  },
  {
    issuer: 'American Express',
    cardNumber: '346332637452673',
  },
  {
    issuer: 'American Express',
    cardNumber: '377350997929793',
  },
  {
    issuer: 'American Express',
    cardNumber: '373626873207386',
  },
  {
    issuer: 'American Express',
    cardNumber: '343071956051517',
  },
  {
    issuer: 'American Express',
    cardNumber: '378882038508250',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3039581464935855',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3030966497874552',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3014911034461034',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3634272091059264',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3022331995380471',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3020504740637377',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3009745354027281',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3006795731120336',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3025200842345176',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3029844946133453',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3006087190452651',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3031968141185137',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3008119744091525',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3001833160972540',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3866101500141075',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3016655787323432',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3011399909111921',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3019047698781774',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3629402283713652',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3011747066765659',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3024592095233757',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3030565703439885',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3806116939925982',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3870975871321794',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3881261489213211',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3038261646734986',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3004357043770001',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3013400947551322',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3647132324378631',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3653135653196814',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3038406073306416',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3024898393901304',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3023988150937160',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3682038471430511',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3026452549475736',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3800458677939387',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3018848008793206',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3032470720952069',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3600181844082103',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3636543789765240',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3039003312486510',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3620635612733102',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3020956794073083',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3006203941319939',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3000036803890860',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3832761925119831',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3022172516928657',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3813486427245768',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3652806290933840',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3003595261361703',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3015211857417919',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3018418763835814',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3002862311929868',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3003474410827487',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3880164537917562',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3008520254466371',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3888367293619809',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3003917827515145',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3676187261168340',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3619243312415998',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3022901761805172',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3628047751740959',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3696489746889607',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3846825573824549',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3025215872346183',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3001877922343433',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3012114720888485',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3817935480625189',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3676442420613128',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3003810883185616',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3029977535821169',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3603631056791624',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3663898048964174',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3019761044424182',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3608162243585096',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3034139743085920',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3033191548039363',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3034079225328861',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3683664684918668',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3619772524630325',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3005290492478348',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3021663401909076',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3027131835042439',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3838901853283670',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3659771833241932',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3023690902922017',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3015072299518528',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3034780119946466',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3022346949551019',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3026883436841434',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3643422435704260',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3031560921374203',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3029324649295644',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3021557533923635',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3017448246219600',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3011284340562454',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3027762607422936',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3007691814558501',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3018682736773739',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3022784169438014',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3643266346795663',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3641531386549185',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3032798951007058',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3698765930868905',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3019361942073460',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3683396545949471',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3035139872612519',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3011772252771436',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3862317940694614',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3036686771943659',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3012220298063615',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3010241127518274',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3028971871123786',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3010495201942079',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3676770334537979',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3002915937730589',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3886743113041840',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3624602303214038',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3019304618896574',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3674477405872473',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3030446946638825',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3004633202187116',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3035968261915228',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3002735422942089',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3028440135904597',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3881622994104569',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3004286832489640',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3012046655106972',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3895654680805930',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3857971082946559',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3691752598174054',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3007520745680532',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3024214194304633',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3039570195311445',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3005265796243473',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3837628596915711',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3034699820241910',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3629114149831335',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3659537192590338',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3029872990354725',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3006295649341686',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3006569482956663',
  },
  {
    issuer: 'Diners Club',
    cardNumber: '3804702865352341',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531560089949619',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550667051627017807',
  },
  {
    issuer: 'JCB',
    cardNumber: '3530533032162233474',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563129057676340342',
  },
  {
    issuer: 'JCB',
    cardNumber: '3529486441199929625',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550858804112230569',
  },
  {
    issuer: 'JCB',
    cardNumber: '3529286038191670520',
  },
  {
    issuer: 'JCB',
    cardNumber: '3589732360168334482',
  },
  {
    issuer: 'JCB',
    cardNumber: '3528542991870322247',
  },
  {
    issuer: 'JCB',
    cardNumber: '3528515378035387021',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550442073572373318',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550675926169589208',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550524001586392223',
  },
  {
    issuer: 'JCB',
    cardNumber: '3530191390553056257',
  },
  {
    issuer: 'JCB',
    cardNumber: '3529116404296751852',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531716478901458160',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550466513799935457',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531962221361062127',
  },
  {
    issuer: 'JCB',
    cardNumber: '3529861713440726017',
  },
  {
    issuer: 'JCB',
    cardNumber: '3540729322524079407',
  },
  {
    issuer: 'JCB',
    cardNumber: '3529690291275720642',
  },
  {
    issuer: 'JCB',
    cardNumber: '3589910999359239630',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563292175650497101',
  },
  {
    issuer: 'JCB',
    cardNumber: '3528622959046733749',
  },
  {
    issuer: 'JCB',
    cardNumber: '3589325960817839832',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563902018262784916',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550888723289459054',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531785611822236564',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531475732010184856',
  },
  {
    issuer: 'JCB',
    cardNumber: '3540581808139537471',
  },
  {
    issuer: 'JCB',
    cardNumber: '3528730951385122369',
  },
  {
    issuer: 'JCB',
    cardNumber: '3530555335081213227',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550337687122410607',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550443938347677699',
  },
  {
    issuer: 'JCB',
    cardNumber: '3540419083086558585',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563486063943352562',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550453256395589915',
  },
  {
    issuer: 'JCB',
    cardNumber: '3589862473705745565',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531274757443478131',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531574562628784890',
  },
  {
    issuer: 'JCB',
    cardNumber: '3589945500635679539',
  },
  {
    issuer: 'JCB',
    cardNumber: '3529910310700268169',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563288879854929761',
  },
  {
    issuer: 'JCB',
    cardNumber: '3540781437135337344',
  },
  {
    issuer: 'JCB',
    cardNumber: '3528801477915675886',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563920872651118252',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550880718140265326',
  },
  {
    issuer: 'JCB',
    cardNumber: '3589237704960686500',
  },
  {
    issuer: 'JCB',
    cardNumber: '3540068560651260659',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531231430088785531',
  },
  {
    issuer: 'JCB',
    cardNumber: '3528423802154170471',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563182821895750290',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550375307629455764',
  },
  {
    issuer: 'JCB',
    cardNumber: '3528671132387749647',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563299886529247922',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563676953179164048',
  },
  {
    issuer: 'JCB',
    cardNumber: '3530123931912016921',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563826739589493518',
  },
  {
    issuer: 'JCB',
    cardNumber: '3529256778324469466',
  },
  {
    issuer: 'JCB',
    cardNumber: '3529562216389842516',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563147333420842323',
  },
  {
    issuer: 'JCB',
    cardNumber: '3528119664594348003',
  },
  {
    issuer: 'JCB',
    cardNumber: '3540965975278627326',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550632826019047609',
  },
  {
    issuer: 'JCB',
    cardNumber: '3528999567045310016',
  },
  {
    issuer: 'JCB',
    cardNumber: '3530726303684968773',
  },
  {
    issuer: 'JCB',
    cardNumber: '3530308696935634631',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563590428762201500',
  },
  {
    issuer: 'JCB',
    cardNumber: '3528867776555711039',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531917610520986182',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563519278470157264',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563823350520741313',
  },
  {
    issuer: 'JCB',
    cardNumber: '3528840509716073854',
  },
  {
    issuer: 'JCB',
    cardNumber: '3529018869621445330',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563680803732407398',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531657002925229398',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531537331176572826',
  },
  {
    issuer: 'JCB',
    cardNumber: '3530937230130925278',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563903438242131799',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531669579530214200',
  },
  {
    issuer: 'JCB',
    cardNumber: '3530862328928421788',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550024300579088276',
  },
  {
    issuer: 'JCB',
    cardNumber: '3529586842409953017',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550174508662237661',
  },
  {
    issuer: 'JCB',
    cardNumber: '3529172641063116782',
  },
  {
    issuer: 'JCB',
    cardNumber: '3529576242623872022',
  },
  {
    issuer: 'JCB',
    cardNumber: '3530500748329646907',
  },
  {
    issuer: 'JCB',
    cardNumber: '3529840851727479110',
  },
  {
    issuer: 'JCB',
    cardNumber: '3529401297072896147',
  },
  {
    issuer: 'JCB',
    cardNumber: '3589786301666386181',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531219796406309220',
  },
  {
    issuer: 'JCB',
    cardNumber: '3528924915394983141',
  },
  {
    issuer: 'JCB',
    cardNumber: '3528732638198963208',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550038149770671321',
  },
  {
    issuer: 'JCB',
    cardNumber: '3540494555103788913',
  },
  {
    issuer: 'JCB',
    cardNumber: '3589729952957611479',
  },
  {
    issuer: 'JCB',
    cardNumber: '3530278309668672572',
  },
  {
    issuer: 'JCB',
    cardNumber: '3529402085554672741',
  },
  {
    issuer: 'JCB',
    cardNumber: '3529926535726900666',
  },
  {
    issuer: 'JCB',
    cardNumber: '3540459626497953703',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550747185258570280',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550161738560308612',
  },
  {
    issuer: 'JCB',
    cardNumber: '3529629919225914883',
  },
  {
    issuer: 'JCB',
    cardNumber: '3530006305178053237',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563485933892319872',
  },
  {
    issuer: 'JCB',
    cardNumber: '3528659702609753696',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550565700995998922',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563982733888886274',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531228978892008099',
  },
  {
    issuer: 'JCB',
    cardNumber: '3589827367441273029',
  },
  {
    issuer: 'JCB',
    cardNumber: '3589702549165841988',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550919959254270737',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563967383903311707',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531295602775590464',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531039379072238649',
  },
  {
    issuer: 'JCB',
    cardNumber: '3530344727577634435',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531438960421398593',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550997580630198122',
  },
  {
    issuer: 'JCB',
    cardNumber: '3528239683791055554',
  },
  {
    issuer: 'JCB',
    cardNumber: '3528806339703809959',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550056450142974626',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531465313288438431',
  },
  {
    issuer: 'JCB',
    cardNumber: '3530320239725114573',
  },
  {
    issuer: 'JCB',
    cardNumber: '3528050835541862673',
  },
  {
    issuer: 'JCB',
    cardNumber: '3589282179360897011',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531305299905520327',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531678616665121666',
  },
  {
    issuer: 'JCB',
    cardNumber: '3589309144758312121',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563971185826196477',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531184638674592288',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550938860120974063',
  },
  {
    issuer: 'JCB',
    cardNumber: '3530392004161933149',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531231259099411195',
  },
  {
    issuer: 'JCB',
    cardNumber: '3540307118904866201',
  },
  {
    issuer: 'JCB',
    cardNumber: '3531449400761885575',
  },
  {
    issuer: 'JCB',
    cardNumber: '3550093478310849127',
  },
  {
    issuer: 'JCB',
    cardNumber: '3540220938916263004',
  },
  {
    issuer: 'JCB',
    cardNumber: '3528814566720416174',
  },
  {
    issuer: 'JCB',
    cardNumber: '3528894839960625280',
  },
  {
    issuer: 'JCB',
    cardNumber: '3530931448970945554',
  },
  {
    issuer: 'JCB',
    cardNumber: '3589059099895687268',
  },
  {
    issuer: 'JCB',
    cardNumber: '3563801381443818629',
  },
  {
    issuer: 'JCB',
    cardNumber: '3589582456517186929',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720920348180203',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5544474301037726',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720655178885980',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5558438878869913',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5380107149825194',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5523447621638618',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5112502577440984',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5417904930164008',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720553903721812',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5551907531651295',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5342585043334990',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5322133829789121',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5489699414249480',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221268189989017',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5397225115953633',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5544736989269304',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5564933773455711',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5198996319506465',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720435122886297',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5458428024733478',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720747522330027',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5342722974973286',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5358503803206184',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5548437872389558',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5191011197626513',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221737279437178',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5175788284895966',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5348257625299827',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5426508446781970',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5245277842589879',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221362750896717',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5333936640980894',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5575836795967372',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5180894632219512',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5473886043795102',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5177853432096731',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5236904845026820',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5482903486343867',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720433018731917',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5129713085882127',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5145790096087110',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5307111856179993',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5342422353077821',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5242021520903470',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5487378871377488',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221083777352183',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5590378944528616',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5204574243361489',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5183766842348363',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5148893609094347',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5271718544037102',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5314398651005629',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5230479667864604',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5466078414616575',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720056784115252',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720778907778738',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5477321494318119',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5465929200020235',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720682431565340',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221846471929575',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5485301757713628',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5287568329623978',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5315403496624755',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720729297944208',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221075538437295',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221266650791573',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5161668896556568',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5533171744467600',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5261051984731816',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5264248077708829',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5315726822615307',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5160663489309849',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221460388781705',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221890441710632',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5291113144325592',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5173604084000313',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221450624689978',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5376613426845884',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720531500774848',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720833318635728',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5334195630432452',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5206123809891329',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720210888526415',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5172762798672479',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221787377896387',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720971949776154',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5327882050247416',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221193331607699',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5144573815581543',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720755959046339',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221059857245257',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5523692633416582',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720771184855485',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720488388746135',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5375468288860310',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5480468594939826',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221349447903964',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720149119386035',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720353304113648',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5327244679853068',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5399787700373988',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221515889763716',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5599651275772446',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5151561965674135',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5365682759118105',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5201117758304651',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720583009200981',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5304596998780000',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5567177710017146',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5305153973900515',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5222997123862599',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5539470383168022',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5558891307668951',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5546792768314710',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720837170646731',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5267232141569828',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221184592826847',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5419135730108196',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5373118029033360',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5392662827518285',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720232636008090',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5320281380796332',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5232182241486369',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5400748445034324',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5119159550425087',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221566860353597',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5103734272137422',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221236189564940',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720636699008625',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5441900604686839',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221006635289578',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5155055481517411',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5292985583452303',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221823252004654',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5508639217426981',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221891767875876',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5117524018154581',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5244324336862031',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5189983723036090',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2221430667205858',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720749915688557',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '5437045592250861',
  },
  {
    issuer: 'Mastercard',
    cardNumber: '2720295104665238',
  },
  {
    issuer: 'Visa',
    cardNumber: '4485453928155834',
  },
  {
    issuer: 'Visa',
    cardNumber: '4485936914465480',
  },
  {
    issuer: 'Visa',
    cardNumber: '4652133174284838',
  },
  {
    issuer: 'Visa',
    cardNumber: '4929976785368433',
  },
  {
    issuer: 'Visa',
    cardNumber: '4764776002566779',
  },
  {
    issuer: 'Visa',
    cardNumber: '4024007179864656',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532344896369098',
  },
  {
    issuer: 'Visa',
    cardNumber: '4961353992946642',
  },
  {
    issuer: 'Visa',
    cardNumber: '4024007163580086',
  },
  {
    issuer: 'Visa',
    cardNumber: '4959966533715996',
  },
  {
    issuer: 'Visa',
    cardNumber: '4530863853378018',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532867192768548',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532280164752807',
  },
  {
    issuer: 'Visa',
    cardNumber: '4515170345688239',
  },
  {
    issuer: 'Visa',
    cardNumber: '4556680611685701',
  },
  {
    issuer: 'Visa',
    cardNumber: '4929455155635549',
  },
  {
    issuer: 'Visa',
    cardNumber: '4844361288370008',
  },
  {
    issuer: 'Visa',
    cardNumber: '4556044775525312',
  },
  {
    issuer: 'Visa',
    cardNumber: '4716407209358294',
  },
  {
    issuer: 'Visa',
    cardNumber: '4539997364027705',
  },
  {
    issuer: 'Visa',
    cardNumber: '4916696101255305',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532786103321140',
  },
  {
    issuer: 'Visa',
    cardNumber: '4299314099961150',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532807383084008',
  },
  {
    issuer: 'Visa',
    cardNumber: '4485101999567508',
  },
  {
    issuer: 'Visa',
    cardNumber: '4485516770454396',
  },
  {
    issuer: 'Visa',
    cardNumber: '4716434210440838',
  },
  {
    issuer: 'Visa',
    cardNumber: '4929978271371228',
  },
  {
    issuer: 'Visa',
    cardNumber: '4485195474144544',
  },
  {
    issuer: 'Visa',
    cardNumber: '4556283838964916',
  },
  {
    issuer: 'Visa',
    cardNumber: '4716787051270295',
  },
  {
    issuer: 'Visa',
    cardNumber: '4929477614952380',
  },
  {
    issuer: 'Visa',
    cardNumber: '4243974470485462',
  },
  {
    issuer: 'Visa',
    cardNumber: '4929639493454131',
  },
  {
    issuer: 'Visa',
    cardNumber: '4556743084446835',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532612312304497',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532331986727988',
  },
  {
    issuer: 'Visa',
    cardNumber: '4916298131509379',
  },
  {
    issuer: 'Visa',
    cardNumber: '4485129641907277',
  },
  {
    issuer: 'Visa',
    cardNumber: '4539094916848380',
  },
  {
    issuer: 'Visa',
    cardNumber: '4916346024698393',
  },
  {
    issuer: 'Visa',
    cardNumber: '4071369366441884',
  },
  {
    issuer: 'Visa',
    cardNumber: '4916591164648357',
  },
  {
    issuer: 'Visa',
    cardNumber: '4716317174724844',
  },
  {
    issuer: 'Visa',
    cardNumber: '4024007195619126',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532483410540907',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532584589858523',
  },
  {
    issuer: 'Visa',
    cardNumber: '4485465362039225',
  },
  {
    issuer: 'Visa',
    cardNumber: '4556194094932846',
  },
  {
    issuer: 'Visa',
    cardNumber: '4716931323874654',
  },
  {
    issuer: 'Visa',
    cardNumber: '4485153154891561',
  },
  {
    issuer: 'Visa',
    cardNumber: '4633306554922896',
  },
  {
    issuer: 'Visa',
    cardNumber: '4929210640836594',
  },
  {
    issuer: 'Visa',
    cardNumber: '4716223587779294',
  },
  {
    issuer: 'Visa',
    cardNumber: '4556260067421511',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532026800476040',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532357337430113',
  },
  {
    issuer: 'Visa',
    cardNumber: '4547086820760784',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532269156596264',
  },
  {
    issuer: 'Visa',
    cardNumber: '4929734357887086',
  },
  {
    issuer: 'Visa',
    cardNumber: '4908633198277413',
  },
  {
    issuer: 'Visa',
    cardNumber: '4716652358746548',
  },
  {
    issuer: 'Visa',
    cardNumber: '4929186581330559',
  },
  {
    issuer: 'Visa',
    cardNumber: '4716234349912560',
  },
  {
    issuer: 'Visa',
    cardNumber: '4916962205157619',
  },
  {
    issuer: 'Visa',
    cardNumber: '4539934782774808',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532163055298926',
  },
  {
    issuer: 'Visa',
    cardNumber: '4716503000619221',
  },
  {
    issuer: 'Visa',
    cardNumber: '4929995430362369',
  },
  {
    issuer: 'Visa',
    cardNumber: '4564267700939205',
  },
  {
    issuer: 'Visa',
    cardNumber: '4795483928026987',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532160964035803',
  },
  {
    issuer: 'Visa',
    cardNumber: '4929314569526515',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532846294894055',
  },
  {
    issuer: 'Visa',
    cardNumber: '4024007135844081',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532199187007199',
  },
  {
    issuer: 'Visa',
    cardNumber: '4716564641353968',
  },
  {
    issuer: 'Visa',
    cardNumber: '4916937495113837',
  },
  {
    issuer: 'Visa',
    cardNumber: '4970155025469859',
  },
  {
    issuer: 'Visa',
    cardNumber: '4556682287948991',
  },
  {
    issuer: 'Visa',
    cardNumber: '4916474772830545',
  },
  {
    issuer: 'Visa',
    cardNumber: '4024007181543611',
  },
  {
    issuer: 'Visa',
    cardNumber: '4556296265213466',
  },
  {
    issuer: 'Visa',
    cardNumber: '4716486915125239',
  },
  {
    issuer: 'Visa',
    cardNumber: '4463839824804887',
  },
  {
    issuer: 'Visa',
    cardNumber: '4485158159846809',
  },
  {
    issuer: 'Visa',
    cardNumber: '4485460681272177',
  },
  {
    issuer: 'Visa',
    cardNumber: '4716064530503013',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532463856297162',
  },
  {
    issuer: 'Visa',
    cardNumber: '4024007174609536',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532231402004196',
  },
  {
    issuer: 'Visa',
    cardNumber: '4485714332162017',
  },
  {
    issuer: 'Visa',
    cardNumber: '4929871285313213',
  },
  {
    issuer: 'Visa',
    cardNumber: '4539290414036003',
  },
  {
    issuer: 'Visa',
    cardNumber: '4916844584967067',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532253175375868',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532688511675408',
  },
  {
    issuer: 'Visa',
    cardNumber: '4556675588487867',
  },
  {
    issuer: 'Visa',
    cardNumber: '4716354474184551',
  },
  {
    issuer: 'Visa',
    cardNumber: '4301009901754266',
  },
  {
    issuer: 'Visa',
    cardNumber: '4485376421765256',
  },
  {
    issuer: 'Visa',
    cardNumber: '4539354673552314',
  },
  {
    issuer: 'Visa',
    cardNumber: '4485348027508539',
  },
  {
    issuer: 'Visa',
    cardNumber: '4539965624496119',
  },
  {
    issuer: 'Visa',
    cardNumber: '4556153578760925',
  },
  {
    issuer: 'Visa',
    cardNumber: '4716148798484774',
  },
  {
    issuer: 'Visa',
    cardNumber: '4929595005656946',
  },
  {
    issuer: 'Visa',
    cardNumber: '4094900912228400',
  },
  {
    issuer: 'Visa',
    cardNumber: '4929620529070414',
  },
  {
    issuer: 'Visa',
    cardNumber: '4024007108038109',
  },
  {
    issuer: 'Visa',
    cardNumber: '4929351619870626',
  },
  {
    issuer: 'Visa',
    cardNumber: '4539524165213027',
  },
  {
    issuer: 'Visa',
    cardNumber: '4929633400833230',
  },
  {
    issuer: 'Visa',
    cardNumber: '4485989121404503',
  },
  {
    issuer: 'Visa',
    cardNumber: '4929336957588427',
  },
  {
    issuer: 'Visa',
    cardNumber: '4024007176331345',
  },
  {
    issuer: 'Visa',
    cardNumber: '4192717276469896',
  },
  {
    issuer: 'Visa',
    cardNumber: '4556128062527212',
  },
  {
    issuer: 'Visa',
    cardNumber: '4556834294808458',
  },
  {
    issuer: 'Visa',
    cardNumber: '4166406370223332',
  },
  {
    issuer: 'Visa',
    cardNumber: '4916582902843038',
  },
  {
    issuer: 'Visa',
    cardNumber: '4795262604731288',
  },
  {
    issuer: 'Visa',
    cardNumber: '4716327794959738',
  },
  {
    issuer: 'Visa',
    cardNumber: '4539853667155794',
  },
  {
    issuer: 'Visa',
    cardNumber: '4556094217109001',
  },
  {
    issuer: 'Visa',
    cardNumber: '4539838102539728',
  },
  {
    issuer: 'Visa',
    cardNumber: '4929326823580351',
  },
  {
    issuer: 'Visa',
    cardNumber: '4485349413043255',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532062009078279',
  },
  {
    issuer: 'Visa',
    cardNumber: '4556281387406883',
  },
  {
    issuer: 'Visa',
    cardNumber: '4556416358656401',
  },
  {
    issuer: 'Visa',
    cardNumber: '4929789547022762',
  },
  {
    issuer: 'Visa',
    cardNumber: '4716781315434128',
  },
  {
    issuer: 'Visa',
    cardNumber: '4485939934712683',
  },
  {
    issuer: 'Visa',
    cardNumber: '4532558763729999',
  },
  {
    issuer: 'Visa',
    cardNumber: '4966177920338076',
  },
  {
    issuer: 'Visa',
    cardNumber: '4138352615877927',
  },
  {
    issuer: 'Visa',
    cardNumber: '4539563617848253',
  },
  {
    issuer: 'Visa',
    cardNumber: '4192036048748291',
  },
  {
    issuer: 'Visa',
    cardNumber: '4716423266262170',
  },
  {
    issuer: 'Visa',
    cardNumber: '4485076683096339',
  },
  {
    cardNumber: '6370367100000993',
    issuer: 'VR',
  },
  {
    cardNumber: '6274160007029307',
    issuer: 'VR',
  },
  {
    cardNumber: '6274166432164437',
    issuer: 'VR',
  },
  {
    cardNumber: '6060716432164437',
    issuer: 'Sodexo',
  },
  {
    cardNumber: '6033895206335656',
    issuer: 'Sodexo',
  },
  {
    cardNumber: '6060703595792089',
    issuer: 'Sodexo',
  },
  {
    cardNumber: '6060699748183012',
    issuer: 'Sodexo',
  },
  {
    cardNumber: '6060684908041978',
    issuer: 'Sodexo',
  },
  {
    cardNumber: '6008181902829594',
    issuer: 'Sodexo',
  },
]

describe('card-validator', () => {
  // test.each was not used because the table is too big
  it('should be a valid card number and brand', () => {
    cards.forEach((card) => {
      const result = valid.number(card.cardNumber)
      expect(result.isValid).toBeTruthy()
      expect(result.isPotentiallyValid).toBeTruthy()
      expect(result.card?.niceType).toBe(card.issuer)
    })
  })
})
