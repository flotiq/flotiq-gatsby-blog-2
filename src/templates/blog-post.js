import React from 'react';
import { graphql } from 'gatsby';
import { Image, Header, Content } from 'flotiq-components-react';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/layout';
import BlogPostSidebar from '../sections/BlogPostSidebar';
import Logo from '../assets/blog-logo.svg';

const readingTime = '7min';
const tags = ['#photo', '#cookig', '#food'];
const postAuthor = 'John Doe';

const BlogPostTemplate = ({ data, pageContext }) => {
    const post = data.blogpost;
    return (
        <Layout additionalClass={['bg-light-gray']}>
            <div className="flex flex-wrap">
                <BlogPostSidebar logo={Logo} additionalClass={['w-full md:basis-auto md:w-[130px]']} />
                <div className="basis-full md:basis-auto md:pl-[130px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula ante malesuada, maximus dolor quis, commodo neque. Sed volutpat feugiat dapibus. Morbi ultricies mi in neque vehicula pellentesque. Sed gravida eros tellus, vitae finibus magna semper non. Etiam eu leo nec orci scelerisque vestibulum id in quam. Etiam ultricies non enim sit amet consequat. Maecenas lobortis vitae leo eget congue. Sed nibh sem, consequat ut placerat id, elementum non tellus. Pellentesque ac faucibus ligula. Quisque eget vehicula nisi. Donec eget eros non lectus hendrerit iaculis ut id purus. Sed iaculis neque ut felis efficitur maximus. Sed eros orci, sodales maximus tincidunt vehicula, luctus a orci. Morbi vitae ultrices nisi. Aenean quis ex eget quam vulputate tincidunt. Ut sit amet sapien dictum, sollicitudin arcu et, facilisis libero.

                    Suspendisse est erat, dictum at mi id, posuere porttitor ex. Sed feugiat ex diam. Aenean dictum ornare neque, a efficitur erat pulvinar nec. Mauris porttitor vehicula nunc vitae malesuada. Integer quam lorem, convallis at erat nec, volutpat lobortis libero. In scelerisque dapibus leo a tincidunt. Integer vulputate lectus quis feugiat molestie. Vestibulum mollis neque at enim ultricies, et luctus neque consequat. Nunc viverra, ipsum eu varius iaculis, ipsum urna feugiat urna, nec hendrerit massa justo dictum ex. Cras bibendum leo ac congue tempus. Fusce aliquam tincidunt eros, vel lacinia turpis scelerisque eu. Curabitur tempus id magna in eleifend.

                    Quisque mollis arcu ut augue consectetur, eu semper quam faucibus. Cras dapibus porttitor urna. Pellentesque vitae mi in dui euismod tincidunt. Etiam convallis tincidunt sapien quis tincidunt. Integer iaculis, arcu quis mollis tincidunt, sem mauris laoreet ex, in lacinia dui nulla id risus. Nullam sit amet dignissim turpis. Donec vel viverra magna, at feugiat enim. Aliquam purus est, laoreet vitae metus in, efficitur rhoncus urna. Nulla luctus efficitur pellentesque. Vestibulum eu imperdiet neque, eu malesuada ante. Nam pulvinar nibh condimentum, sodales lectus sit amet, luctus massa. Praesent varius enim vitae efficitur aliquam. Sed venenatis turpis vitae vestibulum dapibus.

                    Sed placerat leo sit amet nisl tempor, sed feugiat elit consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse non nisl porttitor, pretium tellus sed, consectetur lectus. Fusce sed eleifend massa. Nam iaculis erat eget odio accumsan, quis tempor erat accumsan. Duis at eleifend augue. Sed molestie erat ac euismod iaculis. Phasellus aliquam congue ex, eu pharetra justo luctus at. Cras sagittis velit at felis vulputate ullamcorper. Aenean viverra semper iaculis. Suspendisse efficitur lorem sit amet ipsum feugiat cursus.

                    Quisque elementum interdum mollis. Phasellus sed odio malesuada, porta turpis in, bibendum purus. Sed quis urna egestas, consequat augue et, blandit felis. Sed quis massa aliquam, hendrerit nulla sit amet, placerat metus. Quisque ultricies volutpat enim, vitae consectetur metus imperdiet at. Sed a est ut leo elementum aliquet sed vel ante. Sed malesuada est et gravida vestibulum. Pellentesque suscipit arcu eu elit efficitur malesuada. Integer tempor aliquet elit, id feugiat lectus euismod nec. Nulla facilisi. Quisque molestie, lectus nec auctor efficitur, nibh mi fringilla tellus, scelerisque imperdiet sem lacus sed diam. Donec varius tempus ultrices. Sed consequat imperdiet libero, sit amet efficitur tortor euismod eu. Nam odio ante, tristique sit amet tellus interdum, semper faucibus lorem. Donec volutpat sed ante id malesuada. Phasellus non dignissim diam.

                    Duis eros turpis, finibus eu volutpat eget, volutpat sit amet odio. Integer dictum, elit nec tincidunt volutpat, tortor sapien consectetur dolor, non laoreet sapien erat sed est. Curabitur non eleifend dolor. Sed ullamcorper auctor nunc, eu suscipit nibh dignissim quis. Nam faucibus, metus et semper rutrum, nulla augue fermentum nisi, nec placerat nunc turpis eget dui. Duis feugiat sapien sit amet auctor pellentesque. Donec ac cursus arcu. Ut quis ullamcorper purus. Donec nec porta tellus, ac lobortis nisl. Praesent malesuada porta nunc facilisis imperdiet. Fusce id viverra dui. Vivamus rhoncus augue sed mi malesuada, quis aliquet odio elementum. Praesent scelerisque posuere lorem. Sed sit amet efficitur purus. Praesent facilisis venenatis rhoncus. Etiam sapien neque, vehicula in sapien vel, ultricies commodo turpis.

                    Maecenas ac dignissim quam, eget ornare enim. Sed et pulvinar lacus. Nulla aliquet non orci eget sagittis. Quisque sagittis erat pharetra sodales maximus. Etiam vehicula magna ex, vitae bibendum augue commodo eu. Sed tellus ligula, aliquam eu dapibus at, pharetra vel odio. Nulla tincidunt justo vitae ligula condimentum iaculis a et lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis fringilla imperdiet magna, sit amet convallis nunc posuere ut. Proin ac fermentum dui. Cras quis ante feugiat, cursus sapien nec, aliquam ligula. Curabitur efficitur lectus vitae semper hendrerit. Ut luctus tincidunt urna, sit amet hendrerit neque malesuada laoreet. Morbi ac quam mauris. Nam sed eleifend massa.

                    Praesent quis lorem ac justo eleifend placerat et ut nibh. In et dui gravida, commodo enim id, semper risus. Mauris tincidunt lobortis eleifend. Suspendisse hendrerit sed nisi sit amet interdum. Etiam in lectus neque. Phasellus eu feugiat risus, ut suscipit mi. Duis mauris massa, vulputate vitae ornare vel, tristique id nibh. Donec ante risus, condimentum eu porta nec, molestie ac lacus.

                    Curabitur dui velit, pretium quis ante non, tristique cursus nulla. Sed sagittis sem et nulla imperdiet, quis egestas augue ullamcorper. Aenean a sapien justo. Vivamus non elementum nisi, in congue diam. Fusce tincidunt quam et est luctus posuere. Aenean ultrices est at eros malesuada porttitor. Phasellus accumsan lorem eu leo eleifend auctor ut vitae dui. Vestibulum accumsan ipsum est, in feugiat ipsum commodo ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In a neque eu eros venenatis auctor sit amet vulputate diam. Nam non urna est. Integer ornare fermentum vehicula. Sed facilisis, sapien sodales congue eleifend, arcu quam tincidunt felis, id rhoncus ex libero a risus. Curabitur ut mattis enim, ac molestie enim. Vestibulum maximus ut massa ac hendrerit.

                    Cras id ultrices augue. Sed ut facilisis urna. Curabitur tincidunt aliquet purus, ac dictum est. Phasellus interdum non diam in pulvinar. Ut at mattis massa. Aliquam id auctor diam, sit amet convallis leo. Aliquam fermentum ut diam rhoncus fermentum. Nullam sodales, felis sit amet sollicitudin condimentum, erat nisi interdum justo, non sagittis ex ex eu mauris. Phasellus eget metus pulvinar, rhoncus lacus eu, pulvinar nulla. Nullam tellus ipsum, eleifend a urna et, semper porttitor metus. Cras venenatis tellus est, eget dictum tellus commodo in. Sed vehicula magna vitae congue accumsan. Vestibulum at dapibus mi, id sollicitudin risus. Ut tincidunt pulvinar justo, in finibus urna luctus a. Donec rhoncus porttitor feugiat. In euismod, nulla quis dignissim fermentum, enim velit semper purus, nec eleifend mi mi non odio.

                    In hac habitasse platea dictumst. Nulla iaculis augue nec odio elementum, sed congue massa placerat. Sed lobortis faucibus lectus sed interdum. Nam id nulla posuere, aliquam ex vel, ornare est. Praesent tincidunt cursus dolor, sed rutrum sem blandit ac. Ut id nunc accumsan, faucibus enim quis, efficitur mi. Curabitur ut enim id velit ornare sodales. Morbi commodo velit nulla, eget tincidunt ipsum fermentum ut. Donec eleifend orci non tempor euismod. Duis scelerisque nunc et tellus sollicitudin molestie. Quisque et faucibus dui. Praesent eu lectus in odio eleifend iaculis. Mauris vel viverra augue, nec dapibus arcu. In nec tristique tellus. Integer consequat tortor sit amet tempus bibendum. Pellentesque vulputate id diam id pretium.

                    Phasellus ut orci purus. Sed varius egestas malesuada. Vestibulum facilisis posuere ex at pretium. Morbi vehicula ut nisi non vestibulum. Maecenas nec eleifend nisi. Integer dui felis, auctor sed felis nec, molestie gravida felis. Aenean lobortis malesuada nibh, a ullamcorper odio luctus eleifend. Quisque turpis felis, sodales in eros a, facilisis hendrerit sem.

                    Integer tortor elit, faucibus vitae euismod vel, pharetra vitae nulla. Fusce quis arcu pretium, facilisis orci ac, iaculis nibh. Etiam blandit tincidunt elit. Cras leo ipsum, fermentum vel eros id, posuere efficitur felis. Duis sit amet arcu pulvinar, interdum ligula vel, lobortis orci. Sed porttitor elit vitae neque porttitor, quis varius velit luctus. Vestibulum pellentesque, dolor vitae cursus tincidunt, sapien lacus malesuada enim, eget sagittis odio odio in metus. Pellentesque tristique tristique dui, et viverra magna vestibulum ac. Ut a tempor justo. Duis nisi turpis, ullamcorper quis ipsum sed, dapibus suscipit ipsum. Duis malesuada fermentum semper. Nunc eros magna, vehicula ac mauris at, elementum porta ex. Sed pharetra dapibus nisl sed consectetur. Vestibulum varius placerat condimentum.

                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque blandit interdum velit, a congue ligula molestie nec. Aliquam imperdiet eros vitae enim auctor, sit amet rhoncus diam ornare. Donec nec neque justo. Vivamus eros risus, tincidunt non sollicitudin sit amet, gravida vitae elit. Integer ultricies consequat nibh, at efficitur lacus laoreet eu. Donec felis felis, rhoncus ut lobortis vitae, rutrum eu mi. Cras sed eros dui. Pellentesque dictum fringilla commodo. Integer malesuada nisl nec elit vulputate vestibulum. Cras gravida venenatis massa. Donec tincidunt sit amet neque sit amet mollis. In maximus urna ut augue blandit fringilla. Aliquam purus ex, posuere at arcu in, elementum congue ex. Quisque convallis tincidunt quam ac sagittis. Fusce sit amet convallis libero.

                    Morbi erat nisi, rhoncus sollicitudin tempor vel, ornare sed lectus. Pellentesque ornare id eros blandit iaculis. Praesent malesuada est nec risus suscipit dapibus. Pellentesque massa nulla, dictum nec mauris ac, sollicitudin ullamcorper diam. Nam nec enim laoreet, rhoncus quam eget, placerat sem. Pellentesque placerat nulla vel leo feugiat, nec finibus magna ullamcorper. Pellentesque sit amet volutpat metus, vitae porta neque. Nam in iaculis tellus.

                    Fusce vestibulum, ligula pharetra congue bibendum, tortor turpis aliquet turpis, sit amet gravida erat nibh ac nibh. Nulla facilisi. Proin semper orci sit amet dui tempus lacinia. Duis id justo nec diam pellentesque porttitor. Curabitur enim diam, ultricies at condimentum non, fermentum non lectus. Morbi rutrum mauris neque, ac imperdiet tellus interdum et. Aliquam tempor nec eros in pretium. Nunc mauris diam, faucibus vel nisl vel, mollis tempus turpis. Curabitur ut feugiat justo. Maecenas vehicula enim nulla. Vivamus venenatis imperdiet diam.

                    Vivamus urna risus, rutrum a bibendum ac, imperdiet quis nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet lectus a quam euismod bibendum. Quisque congue accumsan ipsum. Fusce porttitor lorem eu quam dignissim porttitor. Donec nec purus augue. Mauris aliquet arcu augue, at commodo lorem iaculis et. Vestibulum faucibus orci vel sodales vulputate. Cras tellus lacus, fermentum ut leo eu, pharetra cursus lacus. In ut odio iaculis, posuere lectus nec, bibendum libero. Proin eget dolor eget elit varius tincidunt.

                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ultrices ut eros a dapibus. Etiam vitae sollicitudin erat. Ut leo diam, pharetra a fringilla quis, aliquam vel leo. Morbi vel malesuada augue. Ut ipsum magna, iaculis sodales est at, suscipit interdum quam. Aliquam et diam dolor. Ut lobortis dolor sed nibh sagittis, sed accumsan lorem volutpat. Integer rhoncus lectus sit amet odio blandit semper.

                    Aenean quam nibh, venenatis vitae dolor a, lobortis dignissim nulla. Sed eu cursus risus, in facilisis risus. Suspendisse potenti. Etiam consectetur tortor nunc. Nulla facilisi. Mauris blandit vitae enim nec interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam orci nisi, volutpat eu odio et, dictum scelerisque diam. Cras efficitur, velit vitae pharetra lacinia, est elit commodo nunc, fringilla vestibulum leo massa ut arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus in nunc malesuada, rhoncus nulla non, pellentesque arcu.

                    Donec ultrices fringilla justo interdum ullamcorper. Ut hendrerit, ligula id blandit elementum, risus nibh pellentesque lectus, ut dapibus neque orci a nisl. Fusce a tellus ullamcorper, porta elit a, faucibus mauris. Curabitur vitae lobortis leo. Mauris lobortis id enim eget dignissim. Integer in arcu eleifend, volutpat nisi et, imperdiet justo. Nullam in tortor sem. Nulla a ante feugiat nunc luctus euismod sed sit amet dui.

                    Fusce pharetra ornare orci, quis auctor velit imperdiet quis. Mauris iaculis vestibulum nisi. Praesent quam nibh, sagittis eu egestas eget, dictum elementum nibh. Maecenas a diam elit. In at nulla condimentum, facilisis quam id, condimentum est. Nunc nulla metus, eleifend et mollis quis, ullamcorper eget magna. Maecenas quis gravida leo, vitae sagittis neque. In tempus congue felis, non lobortis metus rhoncus a. Aenean cursus maximus purus nec euismod.

                    Aliquam libero massa, hendrerit sit amet dignissim at, elementum sit amet dui. Pellentesque in fringilla nunc. Fusce semper sapien lacus, a scelerisque magna cursus vitae. Nulla eu nunc vel ante imperdiet rhoncus ut eu quam. Maecenas eu nulla non nisi volutpat imperdiet eu ultricies quam. Aenean pellentesque mauris in arcu suscipit elementum. Nam gravida tincidunt nibh, ut pretium dolor ultrices sit amet. Praesent cursus nulla vel malesuada luctus. In hac habitasse platea dictumst. Phasellus porta a elit ac semper. Suspendisse vitae pulvinar est, ut iaculis ex. Phasellus blandit enim at ex tempus, ut vulputate sem finibus.

                    Nullam sit amet efficitur metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tempus molestie nunc ut dignissim. Donec vel orci arcu. Donec nisi ligula, aliquet ut dui feugiat, dictum malesuada odio. In vitae gravida velit. Cras tincidunt, orci ac rhoncus euismod, enim justo auctor ex, id molestie lectus sem ac ligula.

                    Vivamus porttitor ex urna, eu posuere ligula pulvinar eget. Cras arcu nibh, volutpat luctus ante et, efficitur efficitur odio. Etiam faucibus arcu eu nisl laoreet mattis et eu elit. Ut luctus, metus in maximus tincidunt, enim mi tristique risus, id pulvinar nunc massa sit amet orci. Cras eu tincidunt dolor. Duis sed justo arcu. Sed scelerisque sapien sit amet vehicula dictum. Cras rhoncus semper ultricies. In at erat a dolor gravida imperdiet sit amet sit amet sapien. Morbi finibus sit amet velit nec varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

                    Duis consectetur, tellus a facilisis cursus, lorem diam ultricies nibh, et vulputate lorem est faucibus elit. In hac habitasse platea dictumst. Morbi sit amet porta leo, id pretium massa. Quisque mollis sapien id metus auctor, sed rutrum nulla vestibulum. Fusce malesuada tempus ultricies. Nam sed turpis sit amet nisi euismod porta. Nunc sagittis lacus in eros suscipit, ultrices luctus tellus scelerisque. Nam congue sapien sit amet dolor feugiat, id maximus urna dignissim. Donec at sapien risus. Sed eget felis aliquam, facilisis arcu non, rutrum mi. Mauris viverra quam non dolor consequat tempus. Nam gravida justo eu elit aliquet malesuada. Suspendisse facilisis volutpat lorem vel dignissim. Praesent porttitor fringilla ipsum vel luctus. Nunc neque tellus, vestibulum in velit a, pretium auctor magna. Cras dictum vitae massa vitae aliquam.

                    Curabitur dapibus tincidunt maximus. Curabitur sed neque sit amet tortor tincidunt euismod ut ac libero. Sed quam lorem, euismod in lorem non, posuere sollicitudin quam. Curabitur consequat nibh a nisi suscipit, nec vehicula dolor malesuada. Duis scelerisque lorem quis mollis lobortis. Donec tempus urna ligula, quis molestie sapien vestibulum sed. Duis in ex eu lectus efficitur elementum quis sit amet mi. Cras auctor hendrerit metus, ut pellentesque augue dapibus in.

                    Vestibulum id faucibus enim, in cursus massa. Nunc arcu orci, suscipit tristique posuere a, ultricies vel felis. Praesent eget ultricies lectus. Sed dolor lacus, convallis et eros in, volutpat laoreet nibh. Sed vitae nunc ac leo volutpat ultricies nec eu lorem. Duis ornare ante nisi, accumsan mattis ipsum feugiat et. Maecenas cursus leo tortor, nec vulputate ipsum pharetra vel. Nullam accumsan risus in elit sagittis cursus. Ut ut felis molestie, vulputate urna vehicula, rutrum nisl. Sed luctus felis vitae pulvinar luctus. Vivamus maximus egestas justo, at volutpat purus venenatis facilisis. Morbi viverra augue nec rhoncus tempor. Aenean ut ultricies diam.

                    Donec sed maximus magna. Praesent hendrerit arcu id dignissim mollis. Donec tempus, felis sit amet viverra maximus, urna urna sagittis risus, in fermentum eros tellus quis nisi. Phasellus ultrices tempus tortor, ac ullamcorper lectus. Donec nunc diam, mattis vitae fermentum maximus, mollis ultrices nisi. Vestibulum molestie tempor quam, ac interdum turpis ornare facilisis. Integer placerat hendrerit efficitur. Vivamus commodo lectus quam, et tempor libero maximus vel. Aenean dictum molestie convallis. Sed in suscipit nisl.

                    Aliquam facilisis efficitur leo sit amet eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia congue mauris vitae tincidunt. Nunc accumsan pharetra leo, ut tristique libero interdum mollis. Morbi dapibus dui id tortor fermentum consequat. Maecenas sagittis massa non ex pulvinar eleifend. Quisque id posuere justo. Pellentesque sagittis tempor erat, id rutrum lorem rutrum eu. Quisque ac posuere sapien. Nulla suscipit leo a nisl mollis, sed malesuada purus posuere. Vestibulum fermentum nibh sed aliquam interdum. Donec dictum tristique dapibus. Praesent quis felis auctor ligula euismod bibendum at ut lacus.

                    Phasellus congue mi sit amet aliquam vulputate. Aenean a lacus nec urna interdum varius. Vestibulum vitae egestas ligula. Donec suscipit est ac commodo rutrum. Quisque malesuada laoreet lorem, ut aliquet orci sollicitudin eleifend. Nam rutrum tempor purus vitae consequat. Fusce elementum risus at metus dignissim suscipit. Mauris at rutrum arcu. Donec arcu ante, finibus lacinia placerat sed, ultrices ac risus.

                    Aliquam ligula mi, posuere et metus et, tristique tincidunt diam. Pellentesque aliquam augue quis lectus bibendum laoreet. Mauris pulvinar auctor elit, id eleifend nibh. Aliquam in nibh tortor. Donec bibendum semper orci ut iaculis. Vestibulum suscipit sem dui, sit amet sodales ipsum aliquet non. Sed luctus, erat ac consequat iaculis, sapien velit lacinia ipsum, ac faucibus nisl elit et velit. Quisque eu libero luctus, molestie quam eu, vestibulum erat.

                    Ut nec velit ac lorem lobortis lobortis. Cras id vehicula massa, ut pretium diam. Praesent tempor leo et quam faucibus porta. Praesent imperdiet suscipit velit, vel malesuada erat efficitur id. Duis vestibulum vestibulum tortor ac pharetra. Duis eu libero neque. Sed ac pulvinar dolor, vel sagittis neque. Cras at sem eu mi imperdiet porta. Maecenas congue, arcu non bibendum sollicitudin, nibh orci egestas diam, non condimentum dolor risus et mi. Suspendisse fermentum dui nibh, in commodo nunc volutpat id. Fusce convallis interdum varius. Proin in tellus in sapien efficitur consectetur.

                    Nullam rutrum orci id viverra rutrum. Proin laoreet tellus eget pellentesque viverra. Integer at enim euismod, dignissim arcu a, pulvinar felis. Praesent congue purus quis elit maximus euismod. Nam tincidunt sagittis ante ut euismod. Ut vehicula id sem in sagittis. Aenean luctus felis id efficitur lacinia. Praesent non condimentum sem. Nulla augue ligula, tempus nec vehicula ut, iaculis vel dui. Integer arcu odio, fermentum sit amet malesuada ullamcorper, fringilla sit amet elit. Pellentesque interdum vulputate risus in luctus. Phasellus congue mi justo, et posuere elit cursus at. Maecenas eu sapien dapibus arcu accumsan facilisis a ac sapien. Nullam porta libero a congue porttitor. Nulla dolor lacus, congue vel tellus sed, bibendum maximus ex.

                    Vestibulum ultrices dignissim libero, non dapibus orci gravida et. Fusce sed felis non ipsum ullamcorper eleifend interdum in felis. Duis imperdiet diam eu nunc sagittis, ut accumsan neque ultrices. Cras eu ligula id libero vulputate imperdiet. Maecenas cursus diam velit, vitae dignissim est faucibus a. Donec malesuada pharetra libero, ac tincidunt orci ultricies non. Duis in metus sit amet libero pharetra dapibus in eget justo.

                    Duis pretium vel magna eget fringilla. Mauris egestas libero id feugiat viverra. Sed velit purus, rhoncus at ipsum in, bibendum ornare libero. Ut convallis ligula sit amet porta consectetur. Donec suscipit imperdiet dapibus. Donec ac sodales erat. Nunc et nibh molestie sem congue sagittis ut non eros. Praesent hendrerit ullamcorper risus, nec pellentesque erat laoreet id.

                    Donec semper faucibus felis sit amet lacinia. Maecenas at porta lacus. Nulla facilisis pellentesque magna eget scelerisque. Mauris enim orci, malesuada quis finibus at, pretium vitae mi. Fusce convallis, enim eu pellentesque bibendum, nisi lacus blandit nulla, id lacinia erat leo vitae ex. Duis sit amet elementum tellus, quis commodo mauris. Integer lorem odio, placerat non eleifend vel, vulputate condimentum lacus. Suspendisse potenti. Donec a dignissim arcu. Proin ornare convallis dolor, ut faucibus urna pharetra quis. Donec dignissim est eu mi varius commodo. Cras sodales ligula enim, ut feugiat diam ornare molestie. In rutrum vehicula ultricies. Maecenas gravida dapibus purus, rhoncus lacinia velit dictum vitae. Suspendisse vestibulum egestas nulla in ornare.

                    Sed tempor, mauris quis faucibus hendrerit, nunc nisi bibendum dui, aliquet elementum odio lectus in tellus. Integer dapibus lectus lectus, eget rutrum turpis fermentum congue. Vestibulum quis turpis efficitur, hendrerit erat in, elementum eros. In tincidunt lorem metus, quis aliquet velit pellentesque vel. Morbi bibendum lectus vitae convallis sodales. Nulla feugiat molestie nisi non cursus. In vestibulum lacus ac diam congue suscipit. Integer sit amet lacus ut lacus fringilla vulputate. Fusce quis elit pellentesque elit ultricies fringilla. Fusce eget lorem vel massa tempus cursus in a ipsum. Donec purus velit, pulvinar ut est sit amet, dictum scelerisque elit. Cras at dolor feugiat, bibendum risus ac, volutpat nibh. Quisque imperdiet congue risus in laoreet. Quisque laoreet dignissim arcu vel egestas. In ultricies, tellus quis iaculis imperdiet, ex leo interdum augue, et semper odio orci et turpis. Etiam accumsan risus et nibh varius, in laoreet quam egestas.

                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris elementum nunc ut arcu pharetra, id auctor nulla ultricies. Pellentesque venenatis, felis ut placerat suscipit, sapien augue pharetra orci, non hendrerit elit nisl sit amet sapien. Donec turpis risus, sodales ac sem non, fermentum tincidunt orci. Phasellus eget pulvinar quam, vel luctus lectus. Duis fermentum semper viverra. Quisque vel velit justo. Praesent efficitur, purus et laoreet porta, quam ex finibus eros, in rutrum dui risus vitae mi. Nullam vestibulum interdum justo, eget porta nibh. Aliquam erat volutpat. Fusce eget auctor est. Nam egestas massa vel justo pellentesque mattis. Vivamus condimentum ullamcorper convallis. Donec nec lacus purus. Sed sollicitudin diam non rhoncus imperdiet. Nullam eu purus nunc.

                    Praesent eu enim pulvinar, pulvinar eros eget, tempor metus. Nullam vehicula blandit imperdiet. Nunc sapien augue, molestie vitae dapibus in, lacinia sed enim. Maecenas a cursus sapien, ut sodales mi. Donec ex ipsum, elementum a tellus eu, bibendum efficitur erat. Ut nisl massa, maximus viverra sem vitae, scelerisque imperdiet massa. Pellentesque efficitur ultricies justo at pulvinar. In purus nibh, tincidunt a erat nec, rhoncus rutrum tortor. Nullam scelerisque est erat, euismod mattis risus varius eu. Fusce imperdiet mollis leo quis pharetra. Duis gravida ut nulla nec volutpat. Etiam ultrices arcu tellus, ut gravida sem lobortis quis. Ut ut dignissim magna. Nam urna diam, pulvinar eget sem a, sagittis porta est.

                    Vestibulum sit amet aliquet enim, non facilisis mi. Cras commodo, libero sed convallis fringilla, orci turpis pretium nisi, nec consequat orci odio id diam. Nulla lobortis massa ut est consequat bibendum. Nulla cursus, dolor eget interdum fermentum, felis nisi tristique massa, eu laoreet diam sem sit amet libero. Donec quis viverra elit. Etiam eleifend, ex vitae aliquam tempor, tortor elit suscipit sapien, non hendrerit odio nulla eu nibh. Quisque in elit mollis, egestas erat vitae, tristique tellus. Phasellus vel interdum diam, id tincidunt mauris. Donec at massa maximus lacus dignissim efficitur. In eu ante varius, congue mauris sit amet, sollicitudin erat. Donec purus neque, mollis sit amet hendrerit in, cursus vitae neque.

                    Nullam eu aliquam nisi. Praesent eget finibus quam. Aliquam ex arcu, finibus vel mattis non, pretium nec diam. Donec arcu urna, tincidunt sed finibus nec, aliquet finibus odio. Sed sit amet molestie tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ligula elit, sodales nec lorem quis, accumsan dignissim neque. Vivamus ut fringilla dui, eu malesuada ex.

                    Fusce vitae erat varius, lobortis lectus eu, elementum purus. Morbi suscipit cursus lacus nec pharetra. Integer condimentum nibh in metus dapibus tincidunt. Pellentesque ornare malesuada ligula, nec rutrum massa posuere nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna odio, condimentum in est in, lobortis molestie odio. Nunc quis lacus tempus, finibus ipsum eu, suscipit sapien. Morbi eu ullamcorper nunc. Nulla viverra id lectus eu faucibus. Suspendisse vitae consectetur quam. Nullam nec imperdiet felis, in volutpat erat. Curabitur congue elementum mauris eu ultricies. Nam egestas vel est sit amet scelerisque. Integer commodo auctor justo quis elementum. Quisque velit massa, consectetur et pharetra rhoncus, blandit id orci. Nulla efficitur neque sed diam rutrum, a aliquet turpis luctus.

                    Phasellus vel nisl vel urna suscipit tincidunt sagittis vitae est. Aenean magna tellus, efficitur nec dolor non, venenatis rutrum dolor. Nullam eu libero vehicula, pretium velit id, condimentum ante. Nullam sed tellus luctus, aliquam dolor eu, consectetur diam. Nullam molestie porttitor interdum. Integer at rhoncus tellus. Aenean tristique vehicula velit id facilisis. Pellentesque sed felis vulputate metus aliquam egestas. Aliquam id purus dolor. Nullam a sagittis odio. Etiam felis orci, commodo quis imperdiet sed, volutpat ac ante. Integer commodo dui sit amet nisi ultricies aliquam. Maecenas sollicitudin est id orci finibus, a vestibulum dolor pretium.

                    Duis ac tellus felis. Donec auctor urna vitae ornare tempus. Cras suscipit risus vel neque dictum convallis. Maecenas metus ipsum, accumsan ac urna tempor, tincidunt convallis mauris. Suspendisse felis tortor, egestas et turpis ut, consectetur sodales nibh. Aliquam ac elit a nunc bibendum ultrices. Etiam a sodales leo. Pellentesque quis sollicitudin velit. Morbi aliquam sodales egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas at iaculis arcu, vel consequat nunc.

                    Nunc sit amet ornare ipsum. Curabitur condimentum mi imperdiet tellus laoreet, sed vulputate dolor pellentesque. Etiam nibh sem, luctus ac dignissim nec, lobortis a magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi eget neque erat. Etiam pellentesque viverra tortor ac ultrices. Mauris vel laoreet ipsum. Maecenas eget eros non turpis gravida mollis.

                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce accumsan luctus purus, id mattis purus malesuada sed. Nullam sed porttitor nisi, eu luctus justo. Sed elit enim, imperdiet non nisl in, tristique mattis tortor. Phasellus non dolor tristique, dignissim ante vel, fringilla ante. Quisque ac nisl eu eros pulvinar finibus eu non odio. Aenean bibendum vitae eros et congue. Phasellus et velit cursus, rutrum leo id, lobortis sapien. Proin lacinia iaculis elit. Curabitur quis rhoncus erat. Sed accumsan a neque eu gravida. Curabitur consequat semper libero, sed convallis neque commodo sed. Vestibulum vel dignissim nulla.

                    Phasellus in nibh nibh. Nunc erat purus, rhoncus quis iaculis sed, malesuada sit amet risus. Praesent interdum, felis vitae finibus placerat, tellus lacus auctor velit, in laoreet leo metus nec massa. Nulla non augue ligula. Donec sit amet sem porta, consequat ex ultrices, cursus erat. Nunc at maximus mi. Aenean non diam eros. Sed pharetra rutrum est at dapibus. Etiam volutpat dignissim dolor gravida rhoncus. Suspendisse ut cursus risus. Nullam feugiat, nisi in facilisis hendrerit, diam augue aliquet tellus, sit amet interdum orci metus et lorem. Donec id purus pulvinar, posuere erat ut, tincidunt turpis. Morbi at semper ligula.

                    Fusce vestibulum diam non rhoncus dapibus. Duis sit amet condimentum nibh. Proin non condimentum est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur massa lectus, semper volutpat ante sit amet, lacinia convallis quam. Praesent eget mi nec tortor tempor ultricies vitae eu massa. Quisque pellentesque pulvinar arcu at efficitur. Praesent dictum arcu non lorem porta, pulvinar euismod metus maximus. Suspendisse libero sapien, tempus in pulvinar non, congue sit amet ex. Nam et venenatis nisi, gravida dictum enim.

                    Duis dui nisl, facilisis vitae velit at, fringilla dapibus dui. Praesent dapibus nisl aliquet risus malesuada, eu suscipit risus sagittis. Sed nibh elit, mattis vitae metus sed, vehicula mollis lectus. Vivamus sit amet erat ultricies, sollicitudin turpis nec, blandit lacus. In imperdiet risus odio, et congue nisl mollis nec. Mauris iaculis mollis laoreet. Phasellus hendrerit suscipit ex, eu pharetra neque aliquet sed. Sed aliquet lacus mi. Cras scelerisque lacus arcu, at lobortis nunc tristique sed. Cras elit magna, interdum ac nibh non, aliquet placerat leo.

                    Aenean nec finibus magna, quis fringilla orci. Aenean vehicula tellus erat. Proin luctus maximus velit, at varius orci commodo sit amet. Sed quis velit sed enim interdum varius non id metus. Aliquam erat volutpat. Nam a dictum augue, eu ornare elit. Curabitur pretium risus vel velit accumsan, non venenatis est molestie. Integer risus dui, consequat vitae finibus eu, ullamcorper nec neque. Phasellus pharetra, quam et euismod porttitor, urna est ullamcorper nisl, eget convallis ex leo id ligula.
                </div>
        <Layout additionalClass={['']}>
            <Helmet>
                <title>{post.title}</title>
            </Helmet>
            <div className="max-w-7xl mx-auto mt-20 pb-4 rounded-2xl bg-light-gray overflow-hidden">
                <Image
                    url={post.headerImage[0] && post.headerImage[0].localFile.publicURL}
                    stretched
                    alt={post.title}
                />
                <div className="px-6 md:px-12 flex flex-wrap items-center justify-between font-light">
                    <div className="basis-full md:basis-1/2 flex flex-wrap
                    items-center justify-center md:justify-start space-x-6"
                    >
                        <p>
                            Date:
                            {post.date}
                        </p>
                        <p>
                            Reading Time:
                            {readingTime}
                        </p>
                        <div />
                    </div>
                    <div className="mt-4 md:mt-0 basis-full md:basis-1/2
        flex flex-wrap items-center justify-center md:justify-end space-x-6 md:space-x-8"
                    >
                        {tags && tags.map((tag) => (
                            <a
                                href="/"
                                className="hover:text-secondary"
                                key={tag}
                            >
                                {tag}
                            </a>
                        ))}
                    </div>
                </div>
                <Header text={post.title} alignement="center" additionalClasses={['px-4 md:px-12 pt-10 pb-10']} />
                <Content
                    blocks={post.content.blocks}
                    additionalClasses={['px-4 md:px-12 text-sm md:text-lg']}
                    fileProps={{
                        audioProps: { additionalClasses: ['px-6 md:px-12 w-full md:w-3/5 mx-auto'] },
                        imageProps: {
                            additionalClasses: ['w-full md:w-9/12 m-auto'],
                            rounded: '3xl',
                            captionAdditionalClasses: ['w-full md:w-9/12 m-auto'],
                        },
                    }}
                    quoteProps={
                        {
                            variant: 'dark',
                            additionalClasses: ['px-12 md:px-28 py-4'],
                            captionAdditionalClasses: ['bg-primary rounded px-8 py-1.5 opacity-100'],
                        }
                    }
                    paragraphProps={{ additionalClasses: ['font-light'] }}
                />
                <Header text={postAuthor} />
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        blogpost( slug: { eq: $slug } ) {
            id
            title
            headerImage {
                extension
                url
                width
                height
                localFile {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
            flotiqInternal {
                createdAt
            }
            content {
                blocks {
                    data {
                        alignment
                        anchor
                        caption
                        code
                        content
                        extension
                        fileName
                        height
                        items {
                            content
                            items {
                                content
                                items {
                                    content
                                    items {
                                        content
                                        items {
                                            content
                                            items {
                                                content
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        level
                        message
                        stretched
                        style
                        text
                        title
                        url
                        width
                        withBackground
                        withBorder
                        withHeadings
                    }
                    tunes {
                        alignmentTuneTool {
                            alignment
                        }
                    }
                    type
                }
            }
        }
    }
`;

export default BlogPostTemplate;
