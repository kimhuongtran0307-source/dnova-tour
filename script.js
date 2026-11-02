const $=id=>document.getElementById(id);const money=n=>Math.round(n).toLocaleString('vi-VN')+' ₫';
const destinations=[
{name:'Đà Lạt',region:'TÂY NGUYÊN',img:'assets/dalat.jpg',story:'Một thành phố để sống chậm: rừng thông, sương sớm, quán nhỏ và những con dốc đưa bạn đến gần thiên nhiên hơn.',days:['Chạm vào sương sớm','Rừng thông và những khoảng lặng','Một buổi sáng không vội'],map:'Đà Lạt, Lâm Đồng',price:3200000,kind:'nature'},
{name:'Hà Nội',region:'MIỀN BẮC',img:'assets/hanoi.jpg',story:'Hà Nội mở ra qua những lớp thời gian: con phố cũ, mùi cà phê, di sản và những câu chuyện được kể bằng nhịp sống thường ngày.',days:['Chạm vào phố cũ','Di sản và hương vị Hà thành','Một Hà Nội của riêng bạn'],map:'Hồ Hoàn Kiếm, Hà Nội',price:3500000,kind:'culture'},
{name:'Nha Trang',region:'DUYÊN HẢI NAM TRUNG BỘ',img:'assets/nhatrang.jpg',story:'Biển xanh, bờ cát và những ngày nắng dài. Một hành trình có thể sôi động với thể thao biển hoặc dịu dàng như một kỳ nghỉ không báo thức.',days:['Đón nắng bên vịnh','Biển xanh và trải nghiệm địa phương','Hoàng hôn trên bờ biển'],map:'Nha Trang, Khánh Hòa',price:3900000,kind:'nature'},
{name:'Sài Gòn',region:'NAM BỘ',img:'assets/saigon.jpg',story:'Một thành phố luôn chuyển động, nơi những công trình hiện đại, hẻm nhỏ và hàng quán đường phố cùng tạo nên nhịp sống không trộn lẫn.',days:['Thành phố thức giấc','Đi qua những lớp ký ức','Sài Gòn về đêm'],map:'Phố đi bộ Nguyễn Huệ, TP. Hồ Chí Minh',price:2800000,kind:'food'},
{name:'Huế',region:'MIỀN TRUNG',img:'assets/hue.jpg',story:'Huế không vội. Di sản, dòng sông, vườn nhà và những món ăn tinh tế mời bạn khám phá bằng sự chậm rãi và tò mò.',days:['Dấu xưa cố đô','Vườn nhà và hương vị Huế','Nghe sông Hương kể chuyện'],map:'Đại Nội Huế, Thừa Thiên Huế',price:3400000,kind:'culture'},
{name:'Đà Nẵng',region:'MIỀN TRUNG',img:'assets/danang.jpg',story:'Từ biển đến núi, từ thành phố trẻ đến những cung đường ngắm cảnh, Đà Nẵng phù hợp với hành trình kết hợp thư giãn và khám phá.',days:['Biển gọi bình minh','Giữa núi và mây','Thành phố bên sông'],map:'Cầu Vàng, Đà Nẵng',price:3700000,kind:'adventure'},
{name:'Hội An',region:'MIỀN TRUNG',img:'assets/hoi-an.png',story:'Đèn lồng, mái nhà vàng, làng nghề và những bữa ăn đậm vị địa phương. Hội An dành cho người muốn tìm vẻ đẹp trong những điều giản dị.',days:['Phố cổ khi nắng lên','Làng nghề và món ngon','Đèn lồng bên sông Hoài'],map:'Phố cổ Hội An, Quảng Nam',price:3300000,kind:'culture'},
{name:'Hà Giang',region:'ĐÔNG BẮC',img:'assets/hero-trekking.jpg',story:'Cung đường đèo uốn lượn, núi đá và văn hóa bản địa làm nên một chuyến đi giàu thử thách, đáng nhớ và cần chuẩn bị kỹ.',days:['Bắt đầu cung đường đá','Đèo cao và bản làng','Gặp gỡ miền cực Bắc'],map:'Đèo Mã Pí Lèng, Hà Giang',price:4900000,kind:'adventure'},
{name:'Ninh Bình',region:'MIỀN BẮC',img:'assets/ninh-binh.png',story:'Núi đá vôi, dòng nước lặng và những ngôi đền cổ tạo nên hành trình nhẹ nhàng giữa thiên nhiên và chiều sâu lịch sử.',days:['Theo dòng non nước','Di sản giữa thung xanh','Một buổi chiều chậm'],map:'Tràng An, Ninh Bình',price:2900000,kind:'nature'},
{name:'Phú Quốc',region:'ĐẢO NGỌC',img:'assets/phu-quoc.png',story:'Một hành trình dành cho biển, hoàng hôn, hải sản và những khoảng thời gian không cần lên kế hoạch quá dày.',days:['Chạm biển đảo','Khám phá hương vị đảo','Hoàng hôn không vội'],map:'Bãi Sao, Phú Quốc',price:5200000,kind:'nature'},
{name:'Cần Thơ',region:'MIỀN TÂY',img:'assets/can-tho.png',story:'Miền sông nước hiện lên qua chợ nổi, vườn cây và những câu chuyện đời thường hiếu khách.',days:['Sông thức dậy sớm','Vườn xanh và bữa cơm quê','Một chiều bên bến Ninh Kiều'],map:'Bến Ninh Kiều, Cần Thơ',price:2600000,kind:'food'},
{name:'Quảng Bình',region:'BẮC TRUNG BỘ',img:'assets/quang-binh.png',story:'Hang động kỳ vĩ, rừng xanh và các cung khám phá dành cho người muốn bước ra ngoài vùng quen thuộc.',days:['Rừng và sông ngầm','Khám phá kỳ quan hang động','Nghỉ giữa thiên nhiên'],map:'Phong Nha - Kẻ Bàng, Quảng Bình',price:4500000,kind:'adventure'},
{name:'Sa Pa',region:'TÂY BẮC',img:'assets/sapa.png',story:'Mây núi, ruộng bậc thang theo mùa và văn hóa cộng đồng tạo nên chuyến đi cần nhịp độ linh hoạt.',days:['Chạm vào mây núi','Bản làng và ruộng bậc thang','Một buổi sáng vùng cao'],map:'Sa Pa, Lào Cai',price:4300000,kind:'nature'},
{name:'Quy Nhơn',region:'DUYÊN HẢI NAM TRUNG BỘ',img:'assets/quy-nhon.png',story:'Biển xanh, vách đá và nhịp sống miền biển phù hợp với hành trình thư thả hoặc khám phá ngoài trời.',days:['Bình minh miền biển','Cung đường ven bờ','Hoàng hôn Quy Nhơn'],map:'Quy Nhơn, Bình Định',price:3600000,kind:'nature'},
{name:'Côn Đảo',region:'ĐẢO PHÍA NAM',img:'assets/con-dao.png',story:'Thiên nhiên nguyên sơ, biển đảo và chiều sâu lịch sử trong một hành trình cần tôn trọng quy định bảo tồn.',days:['Chạm vào đảo xanh','Thiên nhiên và ký ức','Một buổi sáng tĩnh lặng'],map:'Côn Đảo, Bà Rịa - Vũng Tàu',price:5900000,kind:'nature'},
{name:'Mộc Châu',region:'TÂY BẮC',img:'assets/moc-chau.png',story:'Đồi chè, thung lũng và cảnh sắc đổi theo mùa, lý tưởng cho người thích không gian rộng và chậm.',days:['Đồi chè buổi sớm','Khám phá cao nguyên','Thảnh thơi giữa thung lũng'],map:'Mộc Châu, Sơn La',price:3900000,kind:'nature'},
{name:'Cao Bằng',region:'ĐÔNG BẮC',img:'assets/cao-bang.png',story:'Thác nước, núi rừng và bản làng tạo nên hành trình khám phá thiên nhiên cần chuẩn bị theo thời tiết.',days:['Theo dòng nước xanh','Thác và núi rừng','Một ngày gần bản làng'],map:'Thác Bản Giốc, Cao Bằng',price:4700000,kind:'adventure'},
{name:'Lý Sơn',region:'ĐẢO TIỀN TIÊU',img:'assets/ly-son.png',story:'Địa hình núi lửa, văn hóa biển đảo và những cung bờ biển bình yên, phụ thuộc nhiều vào điều kiện tàu và sóng.',days:['Đón gió đảo xa','Dấu tích núi lửa','Bình yên bên biển'],map:'Đảo Lý Sơn, Quảng Ngãi',price:4100000,kind:'nature'}];
// Defensive de-duplication: the first curated entry for each destination is canonical.
const uniqueDestinations=new Map();
destinations.forEach(d=>{if(!uniqueDestinations.has(d.name)) uniqueDestinations.set(d.name,d)});
destinations.splice(0,destinations.length,...uniqueDestinations.values());
const soloTour={title:'Solo Reset — Một mình, không cô đơn',story:'Dành cho người muốn tự do chọn nhịp đi, kết nối với thiên nhiên và gặp gỡ những người bạn mới mà không phải hy sinh khoảng riêng tư. Lịch trình có thời gian tự do, hoạt động nhóm tùy chọn và điểm dừng an toàn.',img:'assets/solo-trekking.jpg',facts:['1 khách','Nhịp độ linh hoạt','Hỗ trợ trước chuyến đi'],days:[['Ngày 1','Đến nơi, nhận phòng, dạo bộ làm quen và thưởng thức bữa tối địa phương.'],['Ngày 2','Hoạt động thiên nhiên hoặc trekking theo thể lực; buổi chiều tự do ghi lại câu chuyện của mình.'],['Ngày 3','Cà phê sáng, khám phá một điểm ít đông và kết thúc hành trình.']]};
const coupleTour={title:'Two of Us — Một chuyến đi, hai ký ức',story:'Thiết kế cho cặp đôi cần thời gian chất lượng bên nhau: lịch trình không quá dày, một bữa tối lãng mạn và các hoạt động có thể cùng lựa chọn. Quà tặng trải nghiệm ăn tối trên du thuyền chỉ áp dụng khi có đối tác, ngày khởi hành và điều kiện dịch vụ được xác nhận.',img:'assets/couple-dining.jpg',facts:['2 khách','Bữa tối lãng mạn tùy gói','Nhịp độ chậm'],days:[['Ngày 1','Nhận phòng, dạo phố hoặc ngắm hoàng hôn; bữa tối dành riêng cho hai người.'],['Ngày 2','Trải nghiệm chung đã chọn, thời gian tự do và điểm ngắm cảnh lúc chiều muộn.'],['Ngày 3','Bữa sáng thong thả, chụp ảnh kỷ niệm và trả phòng.']]};
const familyTour={title:'Together — Ký ức của cả nhà',story:'Một hành trình cho gia đình 5 người, cân bằng giữa vui chơi, nghỉ ngơi và trải nghiệm phù hợp nhiều lứa tuổi. Có khoảng nghỉ giữa ngày, phương án dự phòng trong nhà và lựa chọn hoạt động theo sức khỏe từng thành viên.',img:'assets/family-experience.jpg',facts:['Gợi ý cho 5 khách','Nhịp độ thân thiện gia đình','Tùy chọn hoạt động trẻ em'],days:[['Ngày 1','Di chuyển, nhận phòng và khám phá một điểm nhẹ nhàng gần nơi lưu trú.'],['Ngày 2','Hoạt động phù hợp nhiều lứa tuổi, ăn trưa nghỉ ngơi và trải nghiệm gia đình buổi chiều.'],['Ngày 3','Tham quan ngắn, mua quà địa phương và kết thúc hành trình.']]};
let currentPrice={per:0,total:0,coupon:'',destination:'Đà Lạt',days:3,people:5};let showAll=false;
function renderDestinations(){const list=showAll?destinations:destinations.slice(0,8);$('destinationGrid').innerHTML=list.map((d,i)=>`<button class="destination-card" data-dest="${d.name}"><img src="${d.img}" alt="${d.name}" loading="lazy"><span class="dest-label"><small>${d.region}</small><b>${d.name}</b><span>Khám phá điểm đến ↗</span></span></button>`).join('');document.querySelectorAll('[data-dest]').forEach(b=>b.addEventListener('click',()=>openDestination(b.dataset.dest)));$('showMore').textContent=showAll?'Thu gọn điểm đến −':'Khám phá thêm điểm đến ＋'}
function selectedVibes(){return [...document.querySelectorAll('input[name="vibe"]:checked')].map(x=>x.value)}
function vibeName(){const names={nature:'Thiên nhiên',culture:'Văn hóa',food:'Ẩm thực',adventure:'Mạo hiểm',wellness:'Chữa lành',local:'Bản địa',photo:'Săn ảnh',eco:'Sinh thái'};return selectedVibes().map(x=>names[x]).join(' + ')||'Cân bằng'}
function getCoupon(people,weekend,early){if(weekend)return {code:'',desc:'Không áp dụng mã giảm giá cuối tuần',discount:0};if(early)return {code:'EARLYBIRD',desc:'Ưu đãi đặt trước từ 14 ngày (dự kiến 7%)',discount:.07};if(people>=5)return {code:'GROUPVUIVE',desc:'Ưu đãi nhóm từ 5 khách (dự kiến 5%)',discount:.05};return {code:'KHACHMOI1',desc:'Ưu đãi khách mới (dự kiến 5%)',discount:.05}}
function updatePlan(){const dest=$('destination').value,d=destinations.find(x=>x.name===dest)||destinations[0],people=+$('people').value,days=+$('days').value,budget=+$('budget').value,vibe=vibeName(),weekend=$('weekend').checked,start=$('startDate').value;let early=false;if(start){const diff=(new Date(start+'T12:00:00')-new Date(new Date().toDateString()))/86400000;early=diff>=14}const coupon=getCoupon(people,weekend,early);let base=d.price*(days/3);const factors={nature:1,culture:.96,food:.92,adventure:1.15,wellness:1.12,local:.98,photo:1.04,eco:1.03};const selected=selectedVibes();const vibeFactor=selected.length?selected.reduce((sum,v)=>sum+(factors[v]||1),0)/selected.length:1;let comfort=budget===2500000?.82:budget===4000000?1:budget===7000000?1.38:1.85;let transport=$('transport').value==='car'?days*280000:0;base=base*vibeFactor*comfort+transport;let per=Math.max(850000,base);if(people>=5)per*=.96;const total=per*people;const discount=total*coupon.discount;const final=total-discount;currentPrice={per,total:final,coupon:coupon.code,destination:dest,days,people};$('planTitle').textContent=dest+', theo nhịp của bạn';$('planSub').textContent=`${days} ngày · ${Math.max(1,days-1)} đêm · ${vibe} · ${people} khách · Nhịp độ: `+({balanced:'cân bằng',fast:'nhộn nhịp & nhanh',slow:'yên tĩnh, chậm rãi'}[document.querySelector('input[name="pace"]:checked')?.value||'balanced']);$('timeline').innerHTML=Array.from({length:days},(_,i)=>{const dayNames=d.days;let title=dayNames[i%dayNames.length];let detail=i===0?`Đến ${dest}, làm quen không gian và trải nghiệm địa phương phù hợp với DNA ${vibe.toLowerCase()}.`:i===days-1?'Chọn một điểm dừng nhẹ nhàng, mua quà địa phương và khép lại hành trình.':`Khám phá ${selectedVibes().includes('nature')?'cảnh quan và những khoảng xanh':selectedVibes().includes('culture')?'di sản, kiến trúc và câu chuyện bản địa':selectedVibes().includes('food')?'đặc sản và những địa chỉ ăn uống địa phương':selectedVibes().includes('wellness')?'không gian thư giãn và chăm sóc bản thân':selectedVibes().includes('local')?'làng nghề, chợ địa phương và cuộc sống bản địa':'hoạt động ngoài trời phù hợp thể lực'} tại ${dest}.`;return `<div class="day-item"><div class="day-num">DAY 0${i+1}</div><div class="day-content"><b>${title}</b><p>${detail}</p><div class="activity">✳ ${i===0?'Nhận phòng · trải nghiệm mở đầu':i===days-1?'Tự do · kết thúc hành trình':'Trải nghiệm chính · nghỉ ngơi linh hoạt'}</div></div></div>`}).join('');$('perPerson').textContent=money(per);$('guestCount').textContent=people+' người';$('couponCode').textContent=coupon.code||'KHÔNG CÓ MÃ';$('couponLabel').textContent=coupon.code||'Không áp dụng';$('couponDesc').textContent=coupon.desc;$('totalPrice').textContent=money(final);$('includedText').textContent=`Lịch trình ${days} ngày · hoạt động gợi ý · dự toán lưu trú tiêu chuẩn${$('transport').value==='car'?' · phương tiện theo lựa chọn':''}`;$('excludedText').textContent=$('transport').value==='flight'?'Vé máy bay chưa bao gồm · chi tiêu cá nhân · dịch vụ ngoài lịch trình':'Chi tiêu cá nhân · bữa ăn ngoài chương trình · vé máy bay';$('transportNote').hidden=$('transport').value!=='flight';$('transportNote').innerHTML='✈ Bạn chọn di chuyển bằng máy bay. Để được tư vấn và mua vé, vui lòng liên hệ hotline <a href="tel:0333624382"><b>0333 624 382</b></a>. Giá vé chưa nằm trong dự toán.';$('bookingSummary').textContent=`Hành trình: ${dest} · ${days} ngày · ${people} khách · dự toán ${money(final)}${coupon.code?' · mã '+coupon.code:''}`}
function openDestination(name){const d=destinations.find(x=>x.name===name);if(!d)return;$('modalImage').src=d.img;$('modalImage').alt=d.name;$('modalTitle').textContent=d.name+' — hành trình mang dấu ấn riêng';$('modalStory').textContent=d.story;$('modalFacts').innerHTML=[d.region,`${d.days.length} ngày gợi ý`,money(d.price)+'/người từ',`Nên đi: ${seasonFor(d.name)[0]}`,seasonFor(d.name)[1]].map(x=>`<span>${x}</span>`).join('');$('modalTimeline').innerHTML=d.days.map((x,i)=>`<div class="modal-day"><b>Ngày ${i+1} · ${x}</b><br>${i===0?'Bắt đầu bằng một trải nghiệm đặc trưng và làm quen với điểm đến.':i===1?'Kết hợp khám phá, ẩm thực và thời gian nghỉ ngơi.':'Tự do lựa chọn hoạt động và kết thúc chuyến đi.'}</div>`).join('');$('modalMapText').textContent=d.map;$('modalMap').href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(d.map);$('useTour').onclick=()=>{$('destination').value=d.name;$('dna').scrollIntoView({behavior:'smooth'});$('detailModal').hidden=true;updatePlan()};$('detailModal').hidden=false}
function openJourney(type){const t=type==='solo'?soloTour:type==='couple'?coupleTour:familyTour;$('modalImage').src=t.img;$('modalImage').alt=t.title;$('modalTitle').textContent=t.title;$('modalStory').textContent=t.story;$('modalFacts').innerHTML=t.facts.map(x=>`<span>${x}</span>`).join('');$('modalTimeline').innerHTML=t.days.map((x)=>`<div class="modal-day"><b>${x[0]}</b><br>${x[1]}</div>`).join('');$('modalMapText').textContent='Điểm đến sẽ được chọn trong phần cá nhân hóa DNA.';$('modalMap').href='https://www.google.com/maps';$('useTour').onclick=()=>{$('traveler').value=type==='solo'?'solo':type==='couple'?'couple':'family';$('people').value=type==='solo'?'1':type==='couple'?'2':'5';$('dna').scrollIntoView({behavior:'smooth'});$('detailModal').hidden=true;updatePlan()};$('detailModal').hidden=false}
document.querySelectorAll('.journey-card').forEach(b=>b.addEventListener('click',()=>openJourney(b.dataset.type)));$('dnaForm').addEventListener('input',updatePlan);$('dnaForm').addEventListener('change',updatePlan);$('dnaForm').addEventListener('submit',e=>{e.preventDefault();updatePlan();$('planTitle').scrollIntoView({behavior:'smooth',block:'center'})});$('copyCoupon').addEventListener('click',async()=>{if(!currentPrice.coupon){$('couponDesc').textContent='Không có mã giảm giá áp dụng cho lựa chọn này.';return}try{await navigator.clipboard.writeText(currentPrice.coupon);$('copyCoupon').textContent='Đã sao chép ✓'}catch{const ta=document.createElement('textarea');ta.value=currentPrice.coupon;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();$('copyCoupon').textContent='Đã sao chép ✓'}setTimeout(()=>$('copyCoupon').textContent='Sao chép',1600)});
// Production connection: DNOVA Google Apps Script Web App endpoint.
const DNOVA_BOOKING_API = 'https://script.google.com/macros/s/AKfycbzU5lZKY9Ut_5pY_bdpxaxp-4BPY6G0y3PeKaWWfxIU46kPH-jrPVb3U6VAR2Fx28qWWg/exec';
$('bookingForm').addEventListener('submit', async e => {
  e.preventDefault();
  const button = $('bookingForm').querySelector('button[type="submit"]');
  const message = $('bookingMessage');
  const email = $('email').value.trim().toLowerCase();
  const phone = $('phone').value.replace(/\D/g, '');
  const name = $('fullName').value.trim();
  if (!name) { message.textContent = 'Vui lòng nhập họ và tên.'; return; }
  if (!/^\S+@\S+\.\S+$/.test(email)) { message.textContent = 'Vui lòng kiểm tra địa chỉ email.'; return; }
  if (phone.length < 9) { message.textContent = 'Vui lòng kiểm tra số điện thoại.'; return; }
  updatePlan();
  const pace = document.querySelector('input[name="pace"]:checked')?.value || 'balanced';
  const transport = $('transport').value;
  const transportNames = { self: 'Tự túc', car: 'Xe riêng / xe du lịch', flight: 'Máy bay — cần tư vấn vé' };
  const paceNames = { balanced: 'Cân bằng', fast: 'Nhộn nhịp & nhanh', slow: 'Yên tĩnh, chậm rãi' };
  const arrivalPoint = $('arrivalPoint')?.value || '';
  const arrivalPlace = $('arrivalFields') && !$('arrivalFields').hidden ? $('arrivalPlace').value : '';
  const payload = {
    name, email, phone,
    destination: currentPrice.destination,
    startDate: $('startDate').value || '',
    days: currentPrice.days,
    people: currentPrice.people,
    total: Math.round(currentPrice.total),
    totalFormatted: $('totalPrice').textContent,
    coupon: currentPrice.coupon || '',
    dna: selectedVibes().join(', '),
    pace: paceNames[pace],
    traveler: $('traveler').value,
    budget: $('budget').selectedOptions[0]?.textContent || '',
    originCity: $('originCity').value,
    transport: transportNames[transport] || transport,
    meetingType: arrivalPoint,
    meetingPoint: arrivalPlace,
    experience: $('experience').selectedOptions[0]?.textContent || '',
    notes: $('notes').value.trim(),
    source: location.hostname,
    submittedAt: new Date().toISOString()
  };
  button.disabled = true;
  const originalButton = button.innerHTML;
  button.textContent = 'Đang gửi yêu cầu…';
  message.textContent = 'Đang gửi thông tin đặt tour đến hệ thống DNOVA. Vui lòng không đóng trang.';
  try {
    // Apps Script is cross-origin; no-cors sends the request without requiring a browser CORS response.
    // The opaque response cannot prove server-side success, so the message below does not claim confirmed booking.
    await fetch(DNOVA_BOOKING_API, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    });
    message.textContent = 'Yêu cầu đã được gửi đi. Đây chưa phải xác nhận dịch vụ/ thanh toán; DNOVA sẽ gửi email tiếp nhận nếu hệ thống xử lý thành công. Nếu chưa nhận email trong 5 phút, vui lòng gọi 0333 624 382 để kiểm tra.';
    message.classList.add('booking-success');
  } catch (err) {
    message.textContent = 'Chưa gửi được yêu cầu do lỗi kết nối. Vui lòng thử lại hoặc gọi hotline DNOVA 0333 624 382.';
    message.classList.remove('booking-success');
    console.error('DNOVA booking submission failed:', err);
  } finally {
    button.disabled = false;
    button.innerHTML = originalButton;
  }
});
function chatNormalize(s){return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase()}
function chatReply(message){
 const q=chatNormalize(message);
 const dest=destinations.find(d=>q.includes(chatNormalize(d.name)) || (d.name==='Sài Gòn' && /sai gon|ho chi minh|tphcm/.test(q)));
 const peopleMatch=q.match(/(\d+)\s*(nguoi|khach|ban)/); const people=peopleMatch?Number(peopleMatch[1]):null;
 if(/xin chao|hello|hi\b|chao ban/.test(q)) return 'Xin chào! Mình là trợ lý DNOVA. Mình có thể giúp bạn chọn điểm đến, gợi ý tour theo ngân sách, giải thích lịch trình hoặc hướng dẫn đặt tour. Bạn dự định đi đâu và đi cùng ai?';
 if(/uu dai|ma giam|coupon|khach moi|earlybird|groupvuive/.test(q)) return 'Các mã đang được website mô phỏng gồm EARLYBIRD (đặt trước từ 14 ngày), GROUPVUIVE (nhóm từ 5 khách) và KHACHMOI1 (ưu đãi khách mới). Điều kiện thực tế cần được DNOVA xác nhận khi đặt; không nên xem đây là xác nhận tự động về tư cách khách mới.';
 if(/dat tour|dat cho|dat ve|booking|xac nhan don/.test(q)) return 'Để gửi yêu cầu đặt tour, bạn hãy vào phần đặt tour trên website, điền thông tin liên hệ, điểm đến, ngày đi và số khách rồi gửi yêu cầu. Giá và dịch vụ chỉ được xác nhận sau khi DNOVA kiểm tra lại. Cần hỗ trợ trực tiếp? Gọi 0333 624 382.';
 if(/may bay|ve may bay|bay den|hang khong/.test(q)) return 'Dự toán trên website chưa mặc định bao gồm vé máy bay. Bạn nên kiểm tra ngày bay và hành lý trước khi chốt lịch trình; DNOVA hỗ trợ tư vấn qua hotline 0333 624 382.';
 if(/thoi tiet|mua khong|du bao|nhiet do/.test(q)) return 'Bạn có thể mở chi tiết từng điểm đến trên website để xem dự báo thời tiết. Dự báo chỉ có giá trị tham khảo và thay đổi theo ngày; hãy kiểm tra lại sát ngày khởi hành, đặc biệt với tour biển, đảo hoặc trekking.';
 if(/gia|bao nhieu|chi phi|ngan sach|re nhat|tiet kiem/.test(q)) {if(dest)return `${dest.name}: giá tham khảo trên website từ ${Math.round(dest.price).toLocaleString('vi-VN')} ₫/người cho hành trình mẫu. Giá thực tế thay đổi theo ngày đi, số khách, số ngày, lưu trú và dịch vụ. Mở “Thiết kế chuyến đi” để chỉnh ngân sách và nhận dự toán cá nhân hóa.`;return 'Giá trên DNOVA là dự toán tham khảo, thay đổi theo điểm đến, thời lượng, số khách và mức trải nghiệm. Bạn cho mình biết điểm đến hoặc ngân sách mỗi người để mình gợi ý sát hơn nhé.';}
 if(/mot minh|solo|doc than/.test(q)) return 'Nếu đi một mình, mình ưu tiên hành trình linh hoạt, dễ di chuyển và có khoảng nghỉ. Hà Giang hợp người thích khám phá nhưng cung đường đèo cần cân nhắc kinh nghiệm; Đà Lạt hợp nghỉ dưỡng, thiên nhiên và săn ảnh. Chọn “Một mình” trong bộ thiết kế DNA để xem lịch trình mẫu.';
 if(/cap doi|nguoi yeu|lang man|honeymoon/.test(q)) return 'Nếu đi cùng người thương, Hội An hợp dạo phố cổ và trải nghiệm văn hóa; Đà Lạt hợp nghỉ dưỡng, quán cà phê và săn ảnh. Hãy cho mình biết ngân sách và số ngày để chọn phương án phù hợp.';
 if(/gia dinh|tre em|nhom ban|nhom dong/.test(q) || (people && people>=5)) return `Với ${people?people+' khách':'gia đình hoặc nhóm bạn'}, nên ưu tiên lịch trình có thời gian nghỉ, phương tiện phù hợp và xác nhận trước các dịch vụ cho trẻ nhỏ/người lớn tuổi. Ninh Bình hợp kết hợp thiên nhiên và di sản; Đà Nẵng phù hợp biển và nhiều loại hoạt động. Vào “Thiết kế chuyến đi” để nhập số người chính xác.`;
 if(/trekking|mao hiem|leo nui|di bo duong dai/.test(q)) return 'Nếu thích trekking và mạo hiểm, bạn có thể cân nhắc Hà Giang, Sa Pa hoặc Quảng Bình. Hãy chọn cung theo thể lực, kinh nghiệm, thời tiết và hướng dẫn địa phương; lịch trình mẫu không thay thế đánh giá an toàn thực tế.';
 if(/am thuc|mon an|an gi|food/.test(q)) return 'Nếu ưu tiên ẩm thực, bạn có thể khám phá Hà Nội (phở, món phố cổ), Huế (ẩm thực cung đình và món địa phương), Hội An (cao lầu, mì Quảng) hoặc Sài Gòn (ẩm thực đường phố). Đây là gợi ý phổ biến, hãy kiểm tra địa điểm và giờ mở cửa trước khi đi.';
 if(dest) return `${dest.name} — ${dest.story} Hành trình mẫu: ${dest.days.join(' → ')}. Giá tham khảo hiện trên website từ ${Math.round(dest.price).toLocaleString('vi-VN')} ₫/người; chưa phải báo giá cuối cùng. Bạn muốn xem lịch trình, thời tiết hay thiết kế tour theo ngân sách?`;
 const matches=destinations.filter(d=>q.includes(chatNormalize(d.name)));
 if(matches.length) return matches.map(d=>`${d.name}: từ ${Math.round(d.price).toLocaleString('vi-VN')} ₫/người`).join('\n')+'. Đây là giá tham khảo; mở chi tiết điểm đến để xem hành trình.';
 return 'Mình có thể tư vấn điểm đến, giá tham khảo, thời tiết, ưu đãi, ẩm thực và cách đặt tour. Để gợi ý chính xác hơn, bạn cho mình biết 3 điều: đi đâu (hoặc thích biển/núi/văn hóa), mấy người và ngân sách mỗi người?';
}
function addChat(text,who){const div=document.createElement('div');div.className=who==='user'?'user-msg':'bot-msg';div.textContent=text;$('chatMessages').appendChild(div);$('chatMessages').scrollTop=$('chatMessages').scrollHeight}
$('chatLaunch').onclick=()=>{$('chatBox').hidden=!$('chatBox').hidden;if(!$('chatBox').hidden)$('chatInput').focus()};$('chatClose').onclick=()=>$('chatBox').hidden=true;
$('chatForm').addEventListener('submit',e=>{e.preventDefault();const text=$('chatInput').value.trim();if(!text)return;addChat(text,'user');$('chatInput').value='';setTimeout(()=>addChat(chatReply(text),'bot'),180)});
document.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{addChat(b.dataset.q,'user');addChat(chatReply(b.dataset.q),'bot')});
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>$('detailModal').hidden=true);document.addEventListener('keydown',e=>{if(e.key==='Escape')$('detailModal').hidden=true});$('hamb').onclick=()=>document.querySelector('.nav nav').classList.toggle('open');document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav nav').classList.remove('open')));const minDate=new Date();$('startDate').min=minDate.toISOString().slice(0,10);const defaultDate=new Date();defaultDate.setDate(defaultDate.getDate()+21);$('startDate').value=defaultDate.toISOString().slice(0,10);renderDestinations();updatePlan();

/* DNOVA destinations cleanup: keep one canonical entry per destination. */
// Best travel windows: general guidance, not a weather guarantee.
const bestSeason={
'Đà Lạt':['Tháng 11–3','Mùa khô, trời mát; thuận lợi ngắm sương sớm và hoa theo mùa.'],
'Hà Nội':['Tháng 9–11 và 3–4','Thu dịu mát hoặc xuân; hợp đi bộ phố cổ và khám phá ẩm thực.'],
'Nha Trang':['Tháng 2–8','Thường nắng và biển thuận lợi hơn; vẫn cần xem dự báo biển.'],
'Sài Gòn':['Tháng 12–4','Mùa khô, thuận tiện city tour và khám phá ẩm thực đường phố.'],
'Huế':['Tháng 2–4','Thời tiết thường dễ chịu, phù hợp tham quan di sản và đi bộ.'],
'Đà Nẵng':['Tháng 3–8','Thường thuận lợi cho biển và hoạt động ngoài trời; mùa mưa có thể thay đổi.'],
'Hội An':['Tháng 2–4','Thời tiết thường khô ráo, hợp dạo phố cổ và làng nghề.'],
'Hà Giang':['Tháng 9–11','Mùa thu có cảnh núi đá và mùa hoa tam giác mạch; đường đèo cần thận trọng.'],
'Ninh Bình':['Tháng 1–3 và 5–6','Mùa xuân có không khí lễ hội; cuối xuân–đầu hè có thể ngắm đồng lúa và non nước.'],
'Phú Quốc':['Tháng 11–4','Mùa khô thường thuận lợi cho biển, đảo và ngắm hoàng hôn.'],
'Cần Thơ':['Tháng 12–4','Mùa khô dễ di chuyển; chợ nổi nên đi từ sáng sớm.'],
'Quảng Bình':['Tháng 3–8','Thường phù hợp khám phá hang động và thiên nhiên; phải kiểm tra điều kiện hang, mưa lũ.'],
'Sa Pa':['Tháng 3–5 và 9–11','Mùa xuân xanh mát, mùa thu có ruộng bậc thang; thời tiết núi thay đổi nhanh.'],
'Quy Nhơn':['Tháng 3–8','Thường nắng và biển đẹp hơn; theo dõi dự báo gió và sóng.'],
'Côn Đảo':['Tháng 3–9','Có thời điểm biển êm hơn cho tham quan biển; hoạt động xem rùa phụ thuộc mùa và quy định bảo tồn.'],
'Mộc Châu':['Tháng 10–2','Trời mát, có thể gặp mùa hoa theo từng năm; cảnh quan thay đổi theo mùa.'],
'Cao Bằng':['Tháng 9–11','Mùa thu thường thuận lợi ngắm thác và cung đường núi; cần kiểm tra mưa.'],
'Lý Sơn':['Tháng 3–8','Thường thuận lợi hơn cho đi đảo khi biển êm; lịch tàu phụ thuộc thời tiết.']
};
function seasonFor(name){return bestSeason[name]||['Tùy mùa','Kiểm tra dự báo thời tiết và điều kiện vận hành sát ngày đi.']}

// Make the three signature journeys lead to the requested destinations.
const originalOpenJourney=openJourney;
openJourney=function(type){const preferred=type==='solo'?'Hà Giang':type==='couple'?'Hội An':'Ninh Bình';const d=destinations.find(x=>x.name===preferred);const t=type==='solo'?soloTour:type==='couple'?coupleTour:familyTour;$('modalImage').src=t.img;$('modalImage').alt=t.title;$('modalTitle').textContent=t.title+' · '+preferred;$('modalStory').textContent=t.story+' Điểm đến gợi ý: '+preferred+'.';$('modalFacts').innerHTML=[...t.facts,preferred, money(d.price)+'/người từ',`Nên đi: ${seasonFor(preferred)[0]}`,seasonFor(preferred)[1]].map(x=>`<span>${x}</span>`).join('');$('modalTimeline').innerHTML=t.days.map(x=>`<div class="modal-day"><b>${x[0]}</b><br>${x[1]}</div>`).join('');$('modalMapText').textContent=d.map;$('modalMap').href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(d.map);$('useTour').onclick=()=>{$('traveler').value=type;$('people').value=type==='solo'?'1':type==='couple'?'2':'5';$('destination').value=preferred;$('dna').scrollIntoView({behavior:'smooth'});$('detailModal').hidden=true;updatePlan();refreshDNOVAExtras()};$('detailModal').hidden=false};
// Add an extra style of quiet travel and rhythm choices to the live estimate.
function refreshDNOVAExtras(){
 const dest=$('destination').value, d=destinations.find(x=>x.name===dest)||destinations[0],days=+$('days').value, start=$('startDate').value, pace=document.querySelector('input[name="pace"]:checked')?.value||'balanced';
 const season=start?new Date(start+'T12:00:00').getMonth()+1:new Date().getMonth()+1;
const packingByDestination={
 'Đà Lạt':'Mang áo khoác mỏng/ấm cho sáng sớm và buổi tối, giày đế bám để đi dốc, ô hoặc áo mưa gọn vào mùa mưa. Nếu đi săn mây, chuẩn bị đồ giữ ấm và xuất phát sớm; mang kem chống nắng vì ban ngày vẫn có nắng.',
 'Hà Nội':'Mang giày đi bộ êm, ô gấp và chai nước khi tham quan phố cổ. Mùa hè cần mũ, kem chống nắng và nước; mùa đông thêm áo ấm. Chuẩn bị trang phục kín đáo khi vào đền, chùa và di tích.',
 'Nha Trang':'Chuẩn bị đồ bơi, khăn nhanh khô, dép chống trượt, kem chống nắng chống nước và túi chống nước cho điện thoại. Nếu đi đảo, mang thuốc say sóng nếu cần và xác nhận lịch tàu/cano theo tình hình biển.',
 'Sài Gòn':'Mang giày thoáng, áo chống nắng, mũ và nước uống vì di chuyển ngoài trời khá nóng. Mùa mưa nên có áo mưa gọn; chuẩn bị túi đeo trước người khi đi khu đông khách và dùng ứng dụng gọi xe/định vị điểm hẹn.',
 'Huế':'Mang ô hoặc áo mưa nhẹ, giày đi bộ chống trượt vì có thể gặp mưa và nền đá ướt ở khu di tích. Chuẩn bị trang phục lịch sự, kín vai/gối khi vào lăng tẩm, chùa; mùa nắng cần mũ và kem chống nắng.',
 'Đà Nẵng':'Mang giày đi bộ, đồ bơi nếu đi biển, kem chống nắng, mũ và túi chống nước. Nếu lên Bà Nà hoặc đèo Hải Vân, chuẩn bị áo khoác mỏng; mùa mưa bão cần kiểm tra cảnh báo biển và tình trạng các điểm tham quan.',
 'Hội An':'Mang giày hoặc dép êm để đi bộ phố cổ, ô gấp và túi chống nước cho điện thoại. Khi đi thuyền thúng/ven sông, mặc đồ gọn, dép chống trượt; mùa mưa cần kiểm tra cảnh báo ngập và không đi vào khu vực nước dâng.',
 'Hà Giang':'Chuẩn bị áo khoác nhiều lớp, giày trekking bám tốt, áo mưa, găng tay và thuốc say xe nếu dễ say. Nếu đi xe máy, cần bằng lái phù hợp, mũ bảo hiểm đạt chuẩn và chỉ đi cung đường đèo khi đủ kinh nghiệm; không tự đi khi thời tiết xấu.',
 'Ninh Bình':'Mang giày thể thao hoặc dép có quai bám tốt, mũ, kem chống nắng và nước uống khi leo Hang Múa/tham quan ngoài trời. Đi thuyền Tràng An hoặc Tam Cốc nên mang túi chống nước; chuẩn bị trang phục kín đáo khi vào đền, chùa.',
 'Quảng Bình':'Mang giày trekking/giày chống trượt, quần áo nhanh khô, túi chống nước và đèn pin nếu lịch trình có hang động. Không tự vào hang hoặc suối khi không có hướng dẫn; kiểm tra thời tiết, cảnh báo lũ và tình trạng tour trước ngày khởi hành.',
 'Mộc Châu':'Mang áo khoác vì sáng tối có thể lạnh, giày đế bám khi đi đồi chè/thác, áo mưa gọn và túi chống nước. Nếu đi mùa hoa, chuẩn bị đồ màu trung tính để chụp ảnh và hỏi trước tình trạng hoa nở, đường vào điểm tham quan.',
 'Phú Quốc':'Mang đồ bơi, kem chống nắng chống nước, mũ, dép chống trượt và túi chống nước. Nếu đi cano/đảo, chuẩn bị thuốc say sóng nếu cần và xác nhận lịch khởi hành theo thời tiết biển; không tự xuống nước khi có cảnh báo.',
 'Quy Nhơn':'Chuẩn bị đồ bơi, mũ rộng vành, kem chống nắng, dép chống trượt và túi chống nước khi đi Kỳ Co/Eo Gió. Mang nước uống cho các điểm nắng gió; kiểm tra tình trạng biển, lịch cano và đường vào các điểm ven biển.',
 'Sa Pa':'Mang áo ấm nhiều lớp, áo mưa, giày trekking bám tốt và tất dự phòng; thời tiết thay đổi nhanh, có thể lạnh dù dưới thị trấn không quá rét. Nếu leo núi, dùng hướng dẫn viên phù hợp, mang nước/đồ ăn nhẹ và không đi đường mòn khi sương mù dày.',
 'Cao Bằng':'Chuẩn bị giày chống trượt, áo mưa gọn, áo khoác nhẹ và túi chống nước cho điện thoại khi tham quan thác, suối, hang. Đường đi giữa các điểm khá xa nên mang thuốc cá nhân, nước và sạc dự phòng; tránh sát mép nước/đá trơn.',
 'Côn Đảo':'Mang đồ bơi, kem chống nắng, mũ, thuốc cá nhân và túi chống nước. Nếu đi tàu, chuẩn bị thuốc say sóng nếu cần; xác nhận lịch tàu và điều kiện biển trước ngày đi. Khi tham quan di tích/tâm linh, chọn trang phục kín đáo và giữ yên tĩnh.',
 'Cần Thơ':'Mang mũ, kem chống nắng, thuốc chống muỗi và áo khoác mỏng khi đi chợ nổi lúc sáng sớm. Chuẩn bị tiền mặt mệnh giá nhỏ, dép dễ tháo khi lên xuống thuyền và áo mưa gọn vào mùa mưa; tuân thủ áo phao khi đi ghe/thuyền.',
 'Lý Sơn':'Mang mũ, kem chống nắng, nước uống, dép/giày bám tốt và túi chống nước. Xác nhận giờ tàu cao tốc và dự báo biển trước khi đi; mang thuốc say sóng nếu cần, hạn chế đi sát vách đá và không tắm ở nơi có biển cảnh báo.',
 'Côn Đảo':'Mang đồ bơi, kem chống nắng, mũ, thuốc cá nhân và túi chống nước. Nếu đi tàu, chuẩn bị thuốc say sóng nếu cần; xác nhận lịch tàu và điều kiện biển trước ngày đi. Khi tham quan di tích/tâm linh, chọn trang phục kín đáo và giữ yên tĩnh.'
};
 const seasonalPrep=(season>=5&&season<=10)?' Mùa mưa có thể thay đổi theo từng khu vực: kiểm tra dự báo và thông báo của điểm tham quan trước khi khởi hành.':' Trước ngày đi, kiểm tra dự báo thời tiết và giờ mở cửa/lịch hoạt động của các điểm trong lịch trình.';
 const pack=(packingByDestination[dest]||'Mang giấy tờ tùy thân, thuốc cá nhân, sạc dự phòng, giày phù hợp và tiền mặt nhỏ. Kiểm tra các hoạt động cụ thể trong lịch trình để chuẩn bị trang phục, dụng cụ phù hợp.')+seasonalPrep;
 $('packingText').textContent=pack;
 const origin=$('originCity')?.value||'Hồ Chí Minh'; const transport=$('transport').value;
 const af=$('arrivalFields'); if(af){af.hidden=transport==='flight'||origin==='Hồ Chí Minh';}
 if(transport==='flight'){$('transportNote').hidden=false;$('transportNote').innerHTML='✈ Vé máy bay chưa nằm trong dự toán. Liên hệ tư vấn và mua vé qua hotline <a href="tel:0333624382"><b>0333 624 382</b></a>.';}
 if(af && !af.hidden){const point=$('arrivalPoint').value;const places={station:[`Ga ${dest}`,`Ga gần ${dest} (cần xác nhận)`],bus:[`Bến xe trung tâm ${dest}`,`Bến xe liên tỉnh ${dest} (cần xác nhận)`],hotel:[`Khách sạn do khách cung cấp tại ${dest}`,`Điểm lưu trú đã xác nhận tại ${dest}`]};$('arrivalPlace').innerHTML=(places[point]||places.station).map(x=>`<option>${x}</option>`).join('');}
 const paceText={balanced:'Cân bằng: mỗi ngày một trải nghiệm chính, có thời gian nghỉ.',fast:'Nhộn nhịp & nhanh: tăng số điểm tham quan, thời gian di chuyển và hoạt động; cần kiểm tra sức bền.',slow:'Yên tĩnh, chậm rãi: giảm số điểm, ưu tiên thiên nhiên, quán địa phương và khoảng thời gian tự do.'}[pace];
 const sub=$('planSub');if(sub&&!sub.textContent.includes(paceText))sub.textContent=sub.textContent.split(' · Nhịp độ:')[0]+' · Nhịp độ: '+({balanced:'cân bằng',fast:'nhộn nhịp & nhanh',slow:'yên tĩnh, chậm rãi'}[pace]);
}
function renderDNOVAPDF(){const dest=$('destination').value,d=destinations.find(x=>x.name===dest)||destinations[0],days=+$('days').value,people=+$('people').value,pace=document.querySelector('input[name="pace"]:checked')?.value||'balanced',vibe=vibeName(),transport=$('transport').value,origin=$('originCity').value;const weatherHtml=$('weatherGrid')?.innerHTML?`<h2>Thời tiết theo từng ngày</h2><div class="note"><p>${$('weatherStatus').textContent}</p>${$('weatherGrid').innerHTML}<p>${$('weatherFoot').textContent}</p></div>`:`<h2>Thời tiết theo từng ngày</h2><div class="note">Chưa có dữ liệu dự báo. Vui lòng kiểm tra lại gần ngày khởi hành.</div>`;const timeline=[...$('timeline').querySelectorAll('.day-item')].map((el,i)=>`<section class="day"><h2>Ngày ${i+1}: ${el.querySelector('b').textContent}</h2><p>${el.querySelector('p').textContent}</p><p><b>Hoạt động:</b> ${el.querySelector('.activity').textContent.replace('✳','').trim()}</p><p><b>Gợi ý:</b> Ăn uống địa phương, nghỉ ngơi phù hợp và kiểm tra giờ mở cửa trước khi đến.</p></section>`).join('');const html=`<!doctype html><html lang="vi"><meta charset="utf-8"><title>DNOVA - Lịch trình ${dest}</title><style>body{font:15px/1.65 Arial,sans-serif;color:#26382d;max-width:850px;margin:35px auto;padding:0 28px}header{background:#173e2c;color:white;padding:28px;border-radius:14px}h1{font-size:30px;margin:8px 0}h2{color:#20563b;border-bottom:1px solid #d8c58a;padding-bottom:6px}.gold{color:#a37b22}.meta{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:20px 0}.meta div,.price{background:#f4f3eb;padding:12px;border-radius:8px}.day{page-break-inside:avoid;padding:8px 0}.columns{display:grid;grid-template-columns:1fr 1fr;gap:16px}.note{background:#eef3ec;padding:14px;border-radius:8px}@media print{body{margin:0;max-width:none}button{display:none}header{print-color-adjust:exact;-webkit-print-color-adjust:exact}.day{page-break-inside:avoid}}</style><body><header><div>DNOVA · TOUR DNA AI</div><h1>Lịch trình ${dest}</h1><div>Your DNA. Your Journey.</div></header><div class="meta"><div><b>Thời lượng</b><br>${days} ngày ${Math.max(1,days-1)} đêm</div><div><b>Số khách</b><br>${people} người</div><div><b>Phong cách</b><br>${vibe} · ${pace==='slow'?'Yên tĩnh, chậm rãi':pace==='fast'?'Nhộn nhịp & nhanh':'Cân bằng'}</div><div><b>Khởi hành</b><br>${$('startDate').value||'Chưa chọn ngày'} · từ ${origin}</div><div><b>Phương tiện đến điểm xuất phát</b><br>${transport==='flight'?'Máy bay — gọi 0333 624 382 để tư vấn vé':transport==='self'?'Tự túc':'Xe riêng / xe du lịch'}</div><div><b>Điểm đón</b><br>${$('arrivalFields').hidden?'Chưa áp dụng / sẽ xác nhận':$('arrivalPlace').value}</div></div>${weatherHtml}<h2>Timeline chi tiết</h2>${timeline}<h2>Dự toán chi phí</h2><div class="price"><p>Chi phí dự toán / người: <b>${$('perPerson').textContent}</b></p><p>Số khách: <b>${people}</b></p><p>Mã ưu đãi: <b>${$('couponCode').textContent}</b> — ${$('couponDesc').textContent}</p><h2>Tổng dự toán: ${$('totalPrice').textContent}</h2><p><b>Giá tour bao gồm</b></p><p>Gợi ý lịch trình; lưu trú tiêu chuẩn theo giả định; hoạt động cơ bản trong timeline; tư vấn và hỗ trợ sắp xếp. Xe đưa đón chỉ bao gồm khi được chọn trong phương án và xác nhận trong báo giá cuối cùng.</p><p><b>Giá tour không bao gồm</b></p><p>Vé máy bay/tàu/xe đến điểm khởi hành (trừ khi được xác nhận), chi tiêu cá nhân, bữa ăn ngoài chương trình, phụ thu phòng đơn, hoạt động tự chọn, phí phát sinh do thời tiết hoặc thay đổi dịch vụ.</p><p><b>Bảo hiểm du lịch:</b> Chỉ được tính là bao gồm khi DNOVA xác nhận gói, phạm vi và mức quyền lợi trong báo giá chính thức; không coi nội dung mẫu này là xác nhận bảo hiểm.</p></div><h2>Mùa đẹp để đi</h2><div class="note"><b>${seasonFor(dest)[0]}</b><br>${seasonFor(dest)[1]}</div><h2>Cần chuẩn bị</h2><div class="note">${$('packingText').textContent}</div><h2>Bản đồ</h2><p>${d.map}</p><p>Google Maps: https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.map)}</p><h2>Thông tin DNOVA</h2><p>Hotline: 0333 624 382 · Email: kimhuongtran0307@gmail.com</p><p><i>Đây là lịch trình và dự toán tham khảo do công cụ demo tạo ra. Giá, tình trạng dịch vụ, bảo hiểm, điểm đón và các điều kiện cần được DNOVA xác nhận trước khi thanh toán.</i></p><button onclick="window.print()">In / Lưu thành PDF</button><script>window.onload=()=>setTimeout(()=>window.print(),500)<\/script></body></html>`;const w=window.open('','_blank');if(!w){alert('Trình duyệt đang chặn cửa sổ bật lên. Hãy cho phép popup để xuất PDF.');return}w.document.open();w.document.write(html);w.document.close()}
$('downloadPdf').addEventListener('click',()=>{refreshDNOVAExtras();renderDNOVAPDF()});['transport','originCity','arrivalPoint','destination','startDate','days','people','budget','experience','localTransport'].forEach(id=>$(id)?.addEventListener('change',refreshDNOVAExtras));document.querySelectorAll('input[name="pace"],input[name="vibe"]').forEach(el=>el.addEventListener('change',refreshDNOVAExtras));$('arrivalPoint')?.addEventListener('change',refreshDNOVAExtras);$('showMore')?.addEventListener('click',()=>{showAll=!showAll;renderDestinations()});
// Override destination rendering so the additional quiet destinations appear in the grid.
renderDestinations();refreshDNOVAExtras();

/* DNOVA personalized itinerary engine: rebuilds the timeline from destination + multi-select DNA + pace + traveler type. */
(function(){
 const placeActivities={
  'Đà Lạt':{nature:['Đón bình minh giữa đồi thông','Tản bộ quanh hồ Tuyền Lâm','Ngắm hoàng hôn ở đồi cao'],culture:['Thăm nhà ga Đà Lạt và kiến trúc xưa','Khám phá không gian nghệ thuật địa phương','Dạo khu phố trung tâm'],food:['Thử bánh căn và món nóng địa phương','Ghé quán cà phê rang tại chỗ','Chợ đêm: chọn món theo sở thích'],adventure:['Đi bộ đường mòn rừng thông có hướng dẫn','Chèo SUP nếu thời tiết cho phép','Đạp xe cung đường phù hợp thể lực'],wellness:['Thiền nhẹ giữa rừng thông','Nghỉ tại quán cà phê yên tĩnh','Dành khoảng trống không lịch hẹn'],local:['Ghé vườn nông sản có đón khách','Trò chuyện cùng người làm cà phê','Chọn một tiệm nhỏ do người địa phương gợi ý'],photo:['Săn sương sớm ở đồi cao','Chụp ảnh kiến trúc và nhà kính','Canh ánh chiều bên hồ'],eco:['Thăm vườn theo hướng dẫn','Tìm hiểu canh tác bền vững','Đi bộ và mang rác về đúng nơi']},
  'Hà Nội':{nature:['Dạo quanh hồ Hoàn Kiếm lúc sáng sớm','Nghỉ chân ở vườn hoặc không gian xanh','Ngắm thành phố khi chiều xuống'],culture:['Thăm Văn Miếu hoặc di tích phù hợp giờ mở cửa','Dạo phố cổ theo một chủ đề kiến trúc','Ghé bảo tàng hoặc không gian di sản'],food:['Ăn sáng món Hà Nội truyền thống','Thử món địa phương ở hàng quán lâu năm','Khám phá phố ẩm thực buổi tối'],adventure:['Đi bộ khám phá phố theo tuyến dài','Đạp xe khu vực phù hợp và an toàn','Thử lớp trải nghiệm thủ công'],wellness:['Cà phê chậm bên hồ','Nghỉ trưa tránh giờ đông','Tản bộ không mục tiêu ở khu phố yên tĩnh'],local:['Ghé chợ dân sinh cùng người dẫn đường','Tìm hiểu nếp sống trong ngõ nhỏ','Trò chuyện với người làm nghề truyền thống'],photo:['Chụp phố cổ buổi sớm','Tìm chi tiết cửa, mái và biển hiệu cũ','Chụp ánh đèn phố khi lên tối'],eco:['Đi bộ hoặc dùng phương tiện công cộng','Chọn quán địa phương hạn chế đồ dùng một lần','Tham quan di tích với ứng xử có trách nhiệm']},
  'Nha Trang':{nature:['Ngắm bình minh ven biển','Tham quan vịnh nếu điều kiện biển cho phép','Ngắm hoàng hôn dọc bờ biển'],culture:['Thăm Tháp Bà Ponagar','Tìm hiểu nghề biển địa phương','Ghé không gian văn hóa phù hợp'],food:['Thử bún cá hoặc bánh căn địa phương','Thưởng thức hải sản tại nơi niêm yết giá','Dạo chợ địa phương'],adventure:['Chọn hoạt động biển theo tình trạng sóng','Lặn/ngắm san hô chỉ với đơn vị đủ điều kiện','Đi bộ ven biển'],wellness:['Nghỉ sáng bên biển','Dành thời gian spa hoặc thư giãn tự chọn','Ngắm biển không lịch hẹn'],local:['Ghé chợ hải sản cùng hướng dẫn','Tìm hiểu nhịp sống làng chài','Thử món ăn ở quán gia đình'],photo:['Chụp bình minh trên bãi biển','Ghi lại kiến trúc Chăm','Săn ánh chiều bên vịnh'],eco:['Tìm hiểu bảo vệ hệ sinh thái biển','Không chạm hoặc lấy sinh vật biển','Chọn tour có quy tắc bảo tồn rõ ràng']},
  'Sài Gòn':{nature:['Dạo công viên lúc sáng sớm','Tìm một khoảng xanh giữa đô thị','Ngắm thành phố từ không gian công cộng'],culture:['Thăm Dinh Độc Lập hoặc bảo tàng','Đi bộ tìm dấu ấn kiến trúc đô thị','Khám phá một khu phố có câu chuyện'],food:['Ăn sáng món quen của người Sài Gòn','Thử món đường phố tại điểm vệ sinh phù hợp','Khám phá quán ăn trong hẻm'],adventure:['Đi bộ theo tuyến đô thị tự chọn','Trải nghiệm xe buýt sông nếu hoạt động','Khám phá khu phố về đêm an toàn'],wellness:['Cà phê sáng thong thả','Nghỉ trưa giữa lịch trình','Tản bộ ven sông lúc chiều muộn'],local:['Ghé chợ truyền thống','Tìm hiểu nhịp sống trong hẻm','Trò chuyện cùng chủ quán địa phương'],photo:['Chụp kiến trúc trung tâm buổi sớm','Săn chi tiết đời sống đô thị','Chụp đường phố khi lên đèn'],eco:['Ưu tiên đi bộ/xe buýt ở chặng phù hợp','Mang bình nước cá nhân','Ủng hộ cửa hàng địa phương']},
  'Huế':{nature:['Tản bộ bên sông Hương','Dạo vườn nhà hoặc không gian xanh','Ngắm hoàng hôn ven sông'],culture:['Tham quan Đại Nội theo tuyến phù hợp','Khám phá lăng tẩm và câu chuyện triều Nguyễn','Ghé làng nghề truyền thống'],food:['Thử bún bò Huế hoặc món sáng địa phương','Thưởng thức các món bánh Huế','Chọn quán nhỏ có thực đơn rõ ràng'],adventure:['Đạp xe tuyến bằng phẳng phù hợp','Đi bộ khám phá thành cổ','Trải nghiệm chèo thuyền khi dịch vụ hoạt động'],wellness:['Ngồi bên sông không vội','Nghỉ trưa tại vườn nhà/café yên tĩnh','Nghe nhã nhạc hoặc trải nghiệm nhẹ nếu có lịch'],local:['Ghé chợ Đông Ba','Tìm hiểu nghề làm nón hoặc làng nghề','Trò chuyện cùng người làm ẩm thực'],photo:['Chụp Đại Nội sáng sớm','Ghi lại nhịp sống bên sông','Chụp vườn nhà và mái ngói'],eco:['Đi bộ/xe đạp khi phù hợp','Tôn trọng quy định tại di tích','Chọn trải nghiệm cộng đồng có trách nhiệm']},
  'Đà Nẵng':{nature:['Ngắm bình minh ở biển','Khám phá bán đảo Sơn Trà theo quy định','Ngắm sông Hàn lúc chiều muộn'],culture:['Thăm bảo tàng Chăm','Tìm hiểu câu chuyện làng biển','Khám phá kiến trúc cầu và đô thị'],food:['Thử mì Quảng hoặc bún chả cá','Ghé chợ địa phương','Ăn tối với đặc sản miền Trung'],adventure:['Đi bộ cung đường cảnh quan phù hợp','Chọn hoạt động biển theo thời tiết','Khám phá điểm nhìn trên núi nếu vận hành an toàn'],wellness:['Nghỉ sáng bên biển','Dành thời gian thư giãn tự chọn','Đi dạo bờ sông khi ít đông'],local:['Ghé chợ Cồn hoặc chợ địa phương','Tìm quán ăn gia đình','Tìm hiểu nghề biển'],photo:['Chụp bình minh ven biển','Ghi lại cầu và đường chân trời','Săn ánh đèn thành phố'],eco:['Tuân thủ quy định bảo tồn Sơn Trà','Không cho động vật hoang dã ăn','Ưu tiên dịch vụ địa phương có trách nhiệm']},
  'Hội An':{nature:['Đạp xe qua vùng đồng quê nếu thời tiết thuận lợi','Dạo ven sông Hoài','Ghé không gian xanh ngoại ô'],culture:['Dạo phố cổ theo tuyến di sản','Thăm nhà cổ hoặc hội quán','Tìm hiểu nghề thủ công truyền thống'],food:['Thử cao lầu hoặc mì Quảng','Tham gia trải nghiệm món địa phương','Chọn quán nhỏ theo mùa'],adventure:['Đạp xe khám phá làng nghề','Tham gia lớp làm đèn lồng','Chọn hoạt động ngoài trời phù hợp thời tiết'],wellness:['Dạo phố trước giờ đông','Nghỉ trưa tránh nắng','Ngắm đèn lồng bên sông không vội'],local:['Ghé chợ Hội An buổi sáng','Trò chuyện với nghệ nhân nếu có dịp','Khám phá làng nghề'],photo:['Chụp phố cổ sáng sớm','Ghi lại màu tường vàng và cửa gỗ','Chụp đèn lồng lúc chạng vạng'],eco:['Đi bộ/xe đạp trong khu phù hợp','Tôn trọng không gian cư dân','Chọn sản phẩm thủ công bản địa']},
  'Hà Giang':{nature:['Ngắm cảnh cao nguyên đá tại điểm dừng an toàn','Đi cung đường đèo cùng tài xế/hướng dẫn đủ kinh nghiệm','Dành thời gian ngắm núi và thung lũng'],culture:['Tìm hiểu kiến trúc và đời sống bản địa','Thăm điểm di sản theo tuyến phù hợp','Tìm hiểu chợ phiên nếu đúng ngày'],food:['Thử món địa phương theo mùa','Ghé chợ bản địa có hướng dẫn','Dùng bữa tại homestay'],adventure:['Chinh phục cung đường bằng phương tiện an toàn','Đi bộ ngắn có hướng dẫn','Chọn hoạt động theo thời tiết và thể lực'],wellness:['Dừng ngắm cảnh, không chạy lịch','Nghỉ tại homestay giữa núi','Dành buổi tối yên tĩnh'],local:['Ghé bản làng với sự tôn trọng văn hóa','Tìm hiểu nghề thủ công','Trò chuyện cùng chủ homestay'],photo:['Chụp núi đá vào sáng sớm','Ghi lại ruộng bậc thang theo mùa','Chụp đường đèo tại điểm dừng an toàn'],eco:['Không xả rác trên cung đường','Xin phép trước khi chụp chân dung','Chọn hướng dẫn viên địa phương']},
  'Ninh Bình':{nature:['Đi thuyền Tràng An/Tam Cốc theo vé và thời tiết','Ngắm núi đá vôi và cánh đồng','Dạo đường làng vào giờ mát'],culture:['Thăm cố đô Hoa Lư','Tìm hiểu câu chuyện di sản địa phương','Ghé chùa/di tích với trang phục phù hợp'],food:['Thử cơm cháy và đặc sản dê tại nơi rõ nguồn gốc','Ăn sáng món địa phương','Ghé quán gia đình'],adventure:['Leo Hang Múa nếu thể lực và thời tiết phù hợp','Đạp xe đường làng','Chọn tuyến tham quan thiên nhiên có hướng dẫn'],wellness:['Đi thuyền vào khung giờ ít đông nếu có thể','Nghỉ trưa giữa vùng quê','Ngắm chiều bên đồng lúa theo mùa'],local:['Ghé chợ địa phương','Tìm hiểu nghề truyền thống','Trò chuyện với người làm dịch vụ bản địa'],photo:['Chụp non nước vào sáng sớm','Ngắm đồng lúa theo mùa','Chụp toàn cảnh từ điểm được phép'],eco:['Tuân thủ quy định khu bảo tồn','Không làm ồn khi đi thuyền','Ưu tiên dịch vụ cộng đồng địa phương']},
  'Phú Quốc':{nature:['Ngắm biển buổi sáng','Chọn bãi biển theo điều kiện sóng và gió','Ngắm hoàng hôn tại bờ biển phù hợp'],culture:['Tìm hiểu làng chài và nghề nước mắm','Ghé điểm văn hóa địa phương','Khám phá kiến trúc và lịch sử đảo'],food:['Thử bún quậy hoặc món hải sản','Ghé chợ đêm với ngân sách dự kiến','Chọn hải sản theo giá niêm yết'],adventure:['Chọn tour đảo theo điều kiện biển','Lặn ngắm san hô cùng đơn vị đủ điều kiện','Đi bộ khám phá thiên nhiên'],wellness:['Buổi sáng không lịch hẹn bên biển','Nghỉ trưa tránh nắng','Ngắm hoàng hôn và thư giãn'],local:['Ghé làng chài','Tìm hiểu nghề nước mắm/tiêu','Chọn quán do người địa phương giới thiệu'],photo:['Chụp biển lúc bình minh','Săn hoàng hôn','Ghi lại đời sống làng chài'],eco:['Không lấy san hô/sinh vật biển','Chọn tour có nguyên tắc bảo tồn','Hạn chế nhựa dùng một lần']},
  'Cần Thơ':{nature:['Ngắm sông lúc bình minh','Tham quan vườn cây theo mùa','Dạo bến Ninh Kiều lúc chiều'],culture:['Tìm hiểu đời sống chợ nổi','Ghé nhà cổ hoặc điểm văn hóa','Tìm hiểu lịch sử vùng sông nước'],food:['Thử món miền Tây theo mùa','Ăn sáng trước chuyến chợ nổi','Ghé chợ địa phương'],adventure:['Đi thuyền cùng nhà cung cấp đủ điều kiện','Đạp xe đường quê phù hợp','Trải nghiệm làm món địa phương'],wellness:['Ngắm sông lúc sáng sớm','Nghỉ giữa trưa nóng','Dành thời gian bên bến sông'],local:['Ghé chợ nổi vào sáng sớm','Thăm vườn và trò chuyện với chủ vườn','Tìm hiểu nghề thủ công'],photo:['Chụp thuyền trên sông sáng sớm','Ghi lại vườn cây theo mùa','Chụp hoàng hôn bên bến'],eco:['Tôn trọng môi trường sông','Không xả rác xuống nước','Chọn thuyền và trải nghiệm cộng đồng có trách nhiệm']},
  'Quảng Bình':{nature:['Khám phá cảnh quan Phong Nha theo điều kiện vận hành','Dạo ven sông và vùng xanh','Ngắm cảnh vùng karst'],culture:['Tìm hiểu lịch sử địa phương','Ghé làng quê và di tích phù hợp','Khám phá câu chuyện cộng đồng'],food:['Thử món địa phương miền Trung','Ăn tại quán gia đình','Ghé chợ địa phương'],adventure:['Chọn tuyến hang được cấp phép và phù hợp thể lực','Đi bộ thiên nhiên cùng hướng dẫn','Kiểm tra thời tiết và quy định trước hoạt động'],wellness:['Nghỉ ngơi giữa thiên nhiên','Dành thời gian bên sông','Giữ buổi tối nhẹ nhàng'],local:['Ghé làng du lịch cộng đồng','Tìm hiểu nghề và món ăn địa phương','Trò chuyện với người dẫn đường'],photo:['Chụp cảnh karst lúc sáng','Ghi lại dòng sông và thảm xanh','Chụp ánh chiều tại điểm an toàn'],eco:['Không tự ý vào hang chưa được phép','Tuân thủ hướng dẫn bảo tồn','Mang rác ra khỏi khu tự nhiên']},
  'Sa Pa':{nature:['Ngắm mây khi điều kiện thời tiết cho phép','Dạo ruộng bậc thang theo mùa','Khám phá cung đường làng cùng hướng dẫn'],culture:['Tìm hiểu văn hóa cộng đồng bản địa','Ghé chợ phiên nếu đúng lịch','Tìm hiểu nghề thủ công truyền thống'],food:['Thử món vùng cao theo mùa','Dùng bữa tại homestay','Ghé chợ địa phương'],adventure:['Trekking theo thể lực và thời tiết','Đi bộ cung ngắn cùng hướng dẫn','Chọn tuyến an toàn, tránh tự đi khi sương dày'],wellness:['Uống trà ngắm núi','Nghỉ trưa tại homestay','Dành thời gian yên tĩnh giữa mây núi'],local:['Thăm bản với hướng dẫn địa phương','Tìm hiểu nghề dệt/thủ công','Dùng bữa cùng gia đình bản địa nếu có chương trình'],photo:['Săn mây ở điểm an toàn','Chụp ruộng bậc thang đúng mùa','Ghi lại kiến trúc và đời sống bản'],eco:['Xin phép trước khi chụp người dân','Đi đúng lối mòn','Ưu tiên dịch vụ cộng đồng có trách nhiệm']},
  'Quy Nhơn':{nature:['Ngắm bình minh ven biển','Khám phá bờ đá theo điều kiện sóng','Dạo biển lúc chiều mát'],culture:['Thăm tháp Chăm phù hợp tuyến','Tìm hiểu làng chài','Khám phá lịch sử vùng duyên hải'],food:['Thử bánh xèo tôm nhảy hoặc món địa phương','Ăn hải sản theo giá niêm yết','Ghé chợ địa phương'],adventure:['Chọn tuyến ven biển an toàn','Chèo/kayak nếu dịch vụ và thời tiết cho phép','Đi bộ khám phá cảnh quan'],wellness:['Nghỉ sáng bên biển','Dành khoảng nghỉ giữa ngày','Ngắm hoàng hôn không vội'],local:['Ghé chợ cá vào giờ phù hợp','Trò chuyện cùng người làm nghề biển','Tìm quán ăn gia đình'],photo:['Chụp bình minh trên biển','Ghi lại vách đá tại điểm được phép','Săn ánh chiều ven bờ'],eco:['Không đi sát mép đá khi sóng lớn','Hạn chế rác nhựa','Tôn trọng hệ sinh thái ven biển']},
  'Côn Đảo':{nature:['Khám phá bãi biển theo tình trạng sóng','Đi bộ đường thiên nhiên theo hướng dẫn','Ngắm biển tại điểm được phép'],culture:['Tìm hiểu di tích lịch sử Côn Đảo','Ghé bảo tàng/di tích theo giờ mở cửa','Tìm hiểu câu chuyện địa phương'],food:['Thử món hải sản theo mùa','Ghé quán địa phương','Chọn món theo giá niêm yết'],adventure:['Chọn tuyến đi bộ phù hợp thời tiết','Tham gia hoạt động biển với đơn vị đủ điều kiện','Xác nhận lịch tàu và điều kiện biển'],wellness:['Nghỉ sáng giữa thiên nhiên','Dành buổi chiều thư giãn','Ngắm biển yên tĩnh'],local:['Tìm hiểu nghề biển','Ghé chợ địa phương','Trò chuyện với người dân khi phù hợp'],photo:['Chụp biển vào giờ ánh sáng dịu','Ghi lại cảnh quan tự nhiên từ lối đi','Chụp di tích với thái độ tôn trọng'],eco:['Tuân thủ nghiêm quy định bảo tồn','Không làm phiền động vật hoang dã','Không tự ý tiếp cận khu sinh sản rùa']},
  'Mộc Châu':{nature:['Dạo đồi chè theo lối được phép','Khám phá thung lũng theo mùa','Ngắm bình minh vùng cao'],culture:['Tìm hiểu văn hóa cộng đồng địa phương','Ghé chợ hoặc làng nghề','Khám phá kiến trúc nhà sàn'],food:['Thử món đặc sản cao nguyên','Dùng bữa tại homestay','Ghé chợ địa phương'],adventure:['Đi bộ đường mòn phù hợp','Đạp xe tuyến an toàn','Chọn trải nghiệm theo thời tiết'],wellness:['Uống trà giữa đồi chè','Nghỉ trưa ở homestay','Ngắm chiều cao nguyên'],local:['Thăm cơ sở nông nghiệp có đón khách','Tìm hiểu nghề làm chè','Trò chuyện với chủ homestay'],photo:['Chụp đồi chè sáng sớm','Ghi lại hoa theo đúng mùa','Săn ánh chiều ở thung lũng'],eco:['Không giẫm lên cây trồng','Xin phép khi chụp người dân','Chọn trải nghiệm nông nghiệp có trách nhiệm']},
  'Cao Bằng':{nature:['Tham quan thác Bản Giốc nếu điều kiện cho phép','Ngắm núi và sông tại điểm an toàn','Khám phá cảnh quan theo mùa'],culture:['Tìm hiểu di tích lịch sử địa phương','Ghé làng nghề truyền thống','Tìm hiểu văn hóa cộng đồng'],food:['Thử món đặc sản Cao Bằng','Ghé chợ địa phương','Dùng bữa tại quán gia đình'],adventure:['Chọn tuyến đi bộ cùng hướng dẫn','Đi cung đường núi với phương tiện an toàn','Kiểm tra mưa và tình trạng đường'],wellness:['Nghỉ giữa cảnh quan núi rừng','Dành thời gian ở homestay','Ngắm chiều yên tĩnh'],local:['Ghé bản với sự tôn trọng văn hóa','Tìm hiểu nghề thủ công','Trò chuyện với người dẫn đường địa phương'],photo:['Chụp thác ở khu vực được phép','Ghi lại cảnh núi sông sáng sớm','Chụp đời sống bản địa khi được đồng ý'],eco:['Không xuống khu vực nước nguy hiểm','Tuân thủ quy định tại thác','Không để lại rác']},
  'Lý Sơn':{nature:['Ngắm biển và miệng núi lửa từ điểm an toàn','Dạo bờ biển theo điều kiện sóng','Ngắm hoàng hôn trên đảo'],culture:['Tìm hiểu di tích và văn hóa biển đảo','Ghé điểm thờ tự với trang phục phù hợp','Tìm hiểu lịch sử nghề biển'],food:['Thử món địa phương và tỏi Lý Sơn','Ăn hải sản theo giá niêm yết','Ghé chợ đảo'],adventure:['Đi tuyến đảo theo điều kiện tàu và thời tiết','Khám phá địa hình núi lửa có lối đi an toàn','Chọn hoạt động biển với nhà cung cấp đủ điều kiện'],wellness:['Dành buổi sáng bên biển','Nghỉ trưa tránh nắng','Ngắm biển khi chiều xuống'],local:['Tìm hiểu nghề trồng tỏi','Ghé chợ và trò chuyện với người dân','Tìm hiểu đời sống ngư dân'],photo:['Chụp miệng núi lửa từ điểm cho phép','Săn ánh sáng bình minh trên đảo','Ghi lại ruộng tỏi theo mùa'],eco:['Không bước vào ruộng canh tác khi chưa được phép','Kiểm tra lịch tàu trước khi đi','Không xả rác xuống biển']}
 };
 const vibeNames={nature:'Thiên nhiên',culture:'Văn hóa',food:'Ẩm thực',adventure:'Mạo hiểm',wellness:'Chữa lành',local:'Bản địa',photo:'Săn ảnh',eco:'Sinh thái'};
 function makePersonalTimeline(){
  const root=$('timeline'); if(!root)return;
  const dest=$('destination').value, d=destinations.find(x=>x.name===dest)||destinations[0];
  const days=+$('days').value||3, pace=document.querySelector('input[name="pace"]:checked')?.value||'balanced';
  const traveler=$('traveler')?.value||'family', vibes=selectedVibes();
  const chosen=vibes.length?vibes:['nature']; const activitySet=placeActivities[dest]||placeActivities['Đà Lạt'];
  const dayTitles={solo:['Tự do chạm vào điểm đến','Khám phá theo cách của mình','Khép lại hành trình riêng'],couple:['Bắt đầu câu chuyện của hai người','Cùng khám phá, cùng tận hưởng','Giữ lại một ký ức đẹp'],family:['Cả nhà làm quen điểm đến','Một ngày trải nghiệm cùng nhau','Ngày cuối nhẹ nhàng cho cả nhà'],friends:['Khởi động chuyến đi','Ngày trải nghiệm cùng hội bạn','Tổng kết chuyến đi']}[traveler]||['Chạm vào điểm đến','Khám phá theo DNA','Khép lại hành trình'];
  const density=pace==='fast'?3:pace==='slow'?1:2;
  const timeSets=pace==='fast'?[['07:00–08:00','08:30–11:00','11:30–13:00','13:30–16:30','18:00–20:30'],['06:30–08:00','08:30–11:30','12:00–13:00','13:30–17:00','18:30–21:00']]:pace==='slow'?[['08:30–09:30','10:00–12:00','12:00–14:30','15:00–17:00','Tối linh hoạt']]:[['07:30–08:30','09:00–11:30','11:30–13:30','14:00–16:30','18:00–20:00']];
  const paceIntro={fast:'Nhịp nhanh: nhiều hoạt động hơn, cần giữ thời gian di chuyển và nghỉ phù hợp.',balanced:'Nhịp cân bằng: một trải nghiệm chính, một trải nghiệm bổ trợ và khoảng nghỉ mỗi ngày.',slow:'Nhịp chậm: ít điểm hơn, ưu tiên nghỉ ngơi, quan sát và thời gian tự do.'}[pace];
  const travelerNote={solo:'Ưu tiên tuyến dễ tự di chuyển, điểm đông người vừa đủ và thời gian riêng; hoạt động mạo hiểm cần hướng dẫn.',couple:'Ưu tiên trải nghiệm chung, một khoảng ngắm cảnh lúc chiều và thời gian riêng tư.',family:'Ưu tiên quãng đường ngắn, nghỉ giữa trưa và lựa chọn thay thế phù hợp nhiều độ tuổi.',friends:'Có thể chọn hoạt động nhóm, nhưng cần thống nhất ngân sách và thể lực trước khi đi.'}[traveler]||'';
  const vibeActivities=(v,idx)=>{const arr=(activitySet[v]||activitySet.nature);return arr[(idx+days)%arr.length]};
  const timeSlots=pace==='fast'?['Sáng sớm','Buổi sáng','Buổi trưa','Buổi chiều','Buổi tối']:pace==='slow'?['Buổi sáng thong thả','Cuối buổi sáng','Nghỉ trưa dài','Buổi chiều nhẹ nhàng','Buổi tối tự do']:['Buổi sáng','Cuối buổi sáng','Nghỉ trưa','Buổi chiều','Buổi tối'];
  const timeline=Array.from({length:days},(_,i)=>{
   const title=dayTitles[i]||`Ngày ${i+1} · Khám phá theo DNA`;
   const items=[];
   // A different lead DNA is used each day; secondary styles influence the remaining activities.
   const lead=chosen[i%chosen.length], secondary=chosen[(i+1)%chosen.length];
   if(i===0){items.push({time:pace==='fast'?'08:00–09:00':pace==='slow'?'09:00–10:00':'08:30–09:30',name:'Đến '+dest+' · nhận phòng/gửi hành lý và làm quen khu vực',tag:'Khởi động'});}
   const count=density===3?3:density===2?2:1;
   for(let j=0;j<count;j++){
    const v=j===0?lead:(j===1?secondary:chosen[(i+j+1)%chosen.length]);
    const idx=(i+j+chosen.length)%3;
    items.push({time:timeSets[Math.min(i%timeSets.length,timeSets.length-1)][Math.min(j+1, timeSets[0].length-1)],name:vibeActivities(v,idx),tag:vibeNames[v]||'Trải nghiệm'});
   }
   if(i===days-1){items.push({time:pace==='fast'?'16:00–17:00':pace==='slow'?'15:00–16:00':'15:30–16:30',name:'Mua quà địa phương, kiểm tra hành lý và di chuyển về điểm hẹn',tag:'Kết thúc'});}
   else if(pace==='slow'){items.push({time:'Sau 17:00',name:'Khoảng thời gian tự do: nghỉ tại nơi lưu trú hoặc chọn một hoạt động nhẹ',tag:'Khoảng thở'});}
   else {items.push({time:pace==='fast'?'19:00–21:00':'18:00–20:00',name:vibeActivities(chosen[(i+2)%chosen.length],(i+1)%3),tag:'Buổi tối'});}
   if(traveler==='couple'&&i===0)items.push({time:'Buổi tối',name:'Gợi ý cho cặp đôi: bữa tối riêng tư hoặc ngắm hoàng hôn (chi phí tùy chọn)',tag:'Dành cho hai người'});
   if(traveler==='family')items.push({time:'Lưu ý',name:'Chừa thời gian nghỉ, ăn uống và điều chỉnh hoạt động theo độ tuổi/thể lực của cả nhà',tag:'Thân thiện gia đình'});
   if(traveler==='solo'&&i===0)items.push({time:'Lưu ý an toàn',name:'Lưu địa chỉ nơi lưu trú, số liên hệ hỗ trợ và chia sẻ lịch trình cho người thân',tag:'Solo-safe'});
   const detail=items.map(x=>`<div class="personal-slot"><span class="slot-time">${x.time}</span><span class="slot-copy"><b>${x.name}</b><small>${x.tag}</small></span></div>`).join('');
   return `<div class="day-item"><div class="day-num">DAY ${String(i+1).padStart(2,'0')}</div><div class="day-content"><b>${title}</b><p class="day-context">${paceIntro} DNA trọng tâm hôm nay: ${vibeNames[lead]||lead}${chosen.length>1?`; kết hợp ${vibeNames[secondary]||secondary}`:''}.</p><div class="personal-day-schedule">${detail}</div><div class="activity">✳ ${items.length} gợi ý hoạt động · ${pace==='fast'?'nhịp dày':pace==='slow'?'nhịp thư thả':'nhịp cân bằng'}</div></div></div>`;
  }).join('');
  root.innerHTML=timeline;
  const paceLabel={balanced:'Cân bằng',fast:'Nhộn nhịp & nhanh',slow:'Yên tĩnh, chậm rãi'}[pace];
  $('planTitle').textContent=`${dest} · hành trình ${paceLabel.toLowerCase()} của bạn`;
  $('planSub').textContent=`${days} ngày · ${Math.max(1,days-1)} đêm · ${chosen.map(v=>vibeNames[v]||v).join(' + ')} · ${({solo:'Solo trip',couple:'Couple',family:'Gia đình',friends:'Nhóm bạn'}[traveler]||'Du khách')} · ${paceLabel}`;
 }
 const css=document.createElement('style'); css.textContent=`.personal-day-schedule{display:grid;gap:8px;margin:12px 0}.personal-slot{display:grid;grid-template-columns:105px 1fr;gap:10px;padding:10px 12px;background:#f4f5ef;border-left:2px solid #b99a4b;border-radius:0 7px 7px 0}.slot-time{font-size:11px;letter-spacing:.02em;color:#47614e;font-weight:700;padding-top:2px}.slot-copy b{display:block;font-size:13px;line-height:1.5;font-weight:600}.slot-copy small{display:inline-block;margin-top:4px;color:#7c704e;font-size:10px;text-transform:uppercase;letter-spacing:.08em}.day-context{margin-top:7px!important}.personal-slot:nth-child(odd){background:#f7f7f2}@media(max-width:600px){.personal-slot{grid-template-columns:1fr;gap:4px}.slot-time{font-size:10px}}`;
 document.head.appendChild(css);
 // Old renderer runs first; this listener replaces its generic text with the DNA-specific timeline.
 $('dnaForm')?.addEventListener('input',makePersonalTimeline);
 $('dnaForm')?.addEventListener('change',makePersonalTimeline);
 $('dnaForm')?.addEventListener('submit',()=>setTimeout(makePersonalTimeline,0));
 window.addEventListener('DOMContentLoaded',makePersonalTimeline);
 makePersonalTimeline();
})();


/* Live daily weather for DNOVA destinations. Forecasts are shown only when dates fall within the provider's forecast window. */
(function(){
 const coords={
  'Đà Lạt':[11.9404,108.4583],'Hà Nội':[21.0278,105.8342],'Nha Trang':[12.2388,109.1967],'Sài Gòn':[10.8231,106.6297],'Huế':[16.4637,107.5909],'Đà Nẵng':[16.0544,108.2022],'Hội An':[15.8801,108.338],'Hà Giang':[22.8233,104.9836],'Ninh Bình':[20.2506,105.9745],'Phú Quốc':[10.2899,103.984],'Cần Thơ':[10.0452,105.7469],'Quảng Bình':[17.6103,106.3487],'Sa Pa':[22.3364,103.8438],'Quy Nhơn':[13.782,109.219],'Côn Đảo':[8.6869,106.6089],'Mộc Châu':[20.8333,104.7833],'Cao Bằng':[22.6667,106.25],'Lý Sơn':[15.3833,109.1167]
 };
 const $w=id=>document.getElementById(id);let lastWeather=null;let req=0;
 const iconFor=code=>code===0?'☀️':[1,2,3].includes(code)?'🌤️':[45,48].includes(code)?'🌫️':[51,53,55,56,57].includes(code)?'🌦️':[61,63,65,66,67,80,81,82].includes(code)?'🌧️':[71,73,75,77,85,86].includes(code)?'❄️':[95,96,99].includes(code)?'⛈️':'🌥️';
 const labelFor=code=>code===0?'Trời quang':[1,2,3].includes(code)?'Ít mây / nhiều mây':[45,48].includes(code)?'Sương mù':[51,53,55,56,57].includes(code)?'Mưa phùn':[61,63,65,66,67,80,81,82].includes(code)?'Có mưa':[71,73,75,77,85,86].includes(code)?'Tuyết / băng':[95,96,99].includes(code)?'Dông':'Trạng thái thay đổi';
 const fmtDate=(date)=>new Date(date+'T12:00:00').toLocaleDateString('vi-VN',{weekday:'short',day:'2-digit',month:'2-digit'});
 async function loadWeather(){
  const box=$w('weatherBox'),grid=$w('weatherGrid'),status=$w('weatherStatus'),foot=$w('weatherFoot');if(!box||!grid||!status||!foot)return;
  const dest=$w('destination')?.value||'Đà Lạt',start=$w('startDate')?.value,days=Math.max(1,Math.min(5,Number($w('days')?.value)||3)),loc=coords[dest]||coords['Đà Lạt'],token=++req;
  grid.innerHTML='';box.classList.add('weather-loading');
  if(!start){status.textContent='Chọn ngày khởi hành để xem dự báo đúng từng ngày của hành trình.';foot.textContent='Dự báo thời tiết thực tế chỉ có độ tin cậy hữu hạn; hệ thống dùng dữ liệu dự báo theo tọa độ điểm đến.';box.classList.remove('weather-loading');lastWeather=null;return;}
  const today=new Date();today.setHours(0,0,0,0);const trip=new Date(start+'T12:00:00');const diff=Math.floor((trip-new Date(today.getFullYear(),today.getMonth(),today.getDate()))/86400000);
  if(diff<0){status.textContent='Ngày khởi hành đã qua. Hãy chọn ngày trong tương lai để xem dự báo.';foot.textContent='';box.classList.remove('weather-loading');lastWeather=null;return;}
  if(diff>15){status.textContent=`${dest}: ngày đi còn ${diff} ngày nên chưa có dự báo theo ngày đáng tin cậy.`;foot.textContent='Dự báo thời tiết hiện có tối đa khoảng 16 ngày. Đây không phải dữ liệu khí hậu trung bình; hãy quay lại trong khoảng 1–2 tuần trước chuyến đi để cập nhật. Gợi ý mùa và hành lý vẫn hiển thị riêng.';box.classList.remove('weather-loading');lastWeather=null;return;}
  status.textContent=`Đang lấy dự báo thời tiết cho ${dest} từ ${fmtDate(start)}…`;
  const end=new Date(trip);end.setDate(end.getDate()+days-1);const forecastLimit=new Date(today);forecastLimit.setDate(forecastLimit.getDate()+15);const requestedEnd=new Date(end);const cappedEnd=requestedEnd>forecastLimit?forecastLimit:requestedEnd;const endStr=`${cappedEnd.getFullYear()}-${String(cappedEnd.getMonth()+1).padStart(2,'0')}-${String(cappedEnd.getDate()).padStart(2,'0')}`;
  const url=`https://api.open-meteo.com/v1/forecast?latitude=${loc[0]}&longitude=${loc[1]}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum&timezone=Asia%2FBangkok&start_date=${start}&end_date=${endStr}`;
  try{const res=await fetch(url);if(!res.ok)throw new Error('weather request failed');const data=await res.json();if(token!==req)return;if(!data.daily||!data.daily.time?.length)throw new Error('forecast unavailable');lastWeather={destination:dest,data:data.daily,updatedAt:new Date().toLocaleString('vi-VN')};grid.innerHTML=data.daily.time.map((date,i)=>`<article class="weather-day"><b>${fmtDate(date)}</b><span class="weather-icon">${iconFor(data.daily.weather_code[i])}</span><span>${labelFor(data.daily.weather_code[i])}</span><span class="weather-temp">${Math.round(data.daily.temperature_2m_min[i])}°–${Math.round(data.daily.temperature_2m_max[i])}°C</span><span class="weather-rain">Khả năng mưa: ${data.daily.precipitation_probability_max?.[i]??'—'}%</span><small>Lượng mưa dự kiến: ${data.daily.precipitation_sum?.[i]??'—'} mm</small></article>`).join('');status.textContent=`Dự báo ${dest} theo từng ngày: ${data.daily.time.length}/${days} ngày trong lịch trình hiện có dữ liệu.`;foot.textContent=`Nguồn dữ liệu: Open-Meteo (CC BY 4.0) · cập nhật lúc ${lastWeather.updatedAt}. Dự báo có thể thay đổi; kiểm tra lại sát ngày đi. Nếu lịch trình vượt quá thời hạn dự báo, các ngày còn lại chưa có dự báo. Hoạt động biển, đảo, trekking và thuyền cần xác nhận điều kiện an toàn với đơn vị vận hành.`;
  }catch(e){if(token!==req)return;lastWeather=null;status.textContent='Chưa lấy được dữ liệu thời tiết trực tuyến.';foot.textContent='Kiểm tra kết nối internet rồi thử đổi ngày hoặc điểm đến. Website không tự thay dự báo bằng số liệu giả định.';grid.innerHTML='';}
  finally{if(token===req)box.classList.remove('weather-loading');}
 }
 ['destination','startDate','days'].forEach(id=>document.getElementById(id)?.addEventListener('change',loadWeather));
 document.getElementById('downloadPdf')?.addEventListener('click',()=>{if(!lastWeather)return;});
 loadWeather();
})();


// Fetch live weather only after a visitor opens a destination/tour detail.
const DNOVA_WEATHER_COORDS={
 'Đà Lạt':[11.9404,108.4583],'Đà Nẵng':[16.0544,108.2022],'Nha Trang':[12.2388,109.1967],
 'Hà Nội':[21.0278,105.8342],'Sài Gòn':[10.8231,106.6297],'Hồ Chí Minh':[10.8231,106.6297],
 'Huế':[16.4637,107.5909],'Hội An':[15.8801,108.3380],'Hà Giang':[22.8233,104.9836],
 'Ninh Bình':[20.2506,105.9745],'Phú Quốc':[10.2899,103.9840],'Cần Thơ':[10.0452,105.7469],
 'Quảng Bình':[17.4689,106.6223],'Sa Pa':[22.3364,103.8438],'Quy Nhơn':[13.7820,109.2196],
 'Côn Đảo':[8.6864,106.6083],'Mộc Châu':[20.8412,104.6258],'Cao Bằng':[22.6667,106.2500],
 'Lý Sơn':[15.3833,109.1167]
};
const DNOVA_WEATHER_CACHE=new Map();
function dnovaWeatherLabel(code){if(code===0)return ['☀️','Trời quang'];if([1,2].includes(code))return ['🌤️','Ít mây'];if(code===3)return ['☁️','Nhiều mây'];if([45,48].includes(code))return ['🌫️','Sương mù'];if([51,53,55,56,57].includes(code))return ['🌦️','Mưa phùn'];if([61,63,65,66,67,80,81,82].includes(code))return ['🌧️','Có mưa'];if([71,73,75,77,85,86].includes(code))return ['🌨️','Mưa tuyết'];if([95,96,99].includes(code))return ['⛈️','Dông'];return ['🌤️','Thời tiết thay đổi'];}
function dnovaDateLabel(iso,index){if(index===0)return 'Hôm nay';const date=new Date(iso+'T12:00:00');return new Intl.DateTimeFormat('vi-VN',{weekday:'short',day:'2-digit',month:'2-digit'}).format(date);}
async function loadDNOVAWeather(place){
 const section=$('modalWeather');if(!section)return;section.hidden=false;$('weatherPlace').textContent='Thời tiết tại '+place;$('weatherUpdated').textContent='Đang lấy dữ liệu mới nhất…';$('weatherTemp').textContent='--°C';$('weatherDescription').textContent='Đang cập nhật';$('weatherIcon').textContent='🌤️';$('weatherForecast').innerHTML='<div class="weather-day" style="grid-column:1/-1">Đang tải dự báo 7 ngày…</div>';
 const coords=DNOVA_WEATHER_COORDS[place]||DNOVA_WEATHER_COORDS[place.replace(/^TP\.\s*/,'')];if(!coords){$('weatherUpdated').textContent='Chưa có tọa độ thời tiết cho điểm đến này.';$('weatherForecast').innerHTML='';return;}
 const key=place;let data=DNOVA_WEATHER_CACHE.get(key);if(data&&Date.now()-data.savedAt<10*60*1000){renderDNOVAWeather(place,data.json);return;}
 try{const url=`https://api.open-meteo.com/v1/forecast?latitude=${coords[0]}&longitude=${coords[1]}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&forecast_days=7&timezone=auto`;const response=await fetch(url,{headers:{Accept:'application/json'}});if(!response.ok)throw new Error('Weather API response '+response.status);const json=await response.json();DNOVA_WEATHER_CACHE.set(key,{savedAt:Date.now(),json});renderDNOVAWeather(place,json);}catch(error){$('weatherUpdated').textContent='Không tải được thời tiết lúc này. Vui lòng thử lại khi có kết nối Internet.';$('weatherForecast').innerHTML='<a class="under-link" href="https://open-meteo.com/" target="_blank" rel="noopener">Mở nguồn dự báo thời tiết ↗</a>';}
}
function renderDNOVAWeather(place,data){const c=data.current||{},d=data.daily||{};const [icon,label]=dnovaWeatherLabel(c.weather_code);$('weatherPlace').textContent='Thời tiết tại '+place;$('weatherIcon').textContent=icon;$('weatherTemp').textContent=Number.isFinite(c.temperature_2m)?Math.round(c.temperature_2m)+'°C':'--°C';$('weatherDescription').textContent=label;$('weatherUpdated').textContent='Hiện tại · Cảm giác như '+(Number.isFinite(c.apparent_temperature)?Math.round(c.apparent_temperature)+'°C':'--')+' · Độ ẩm '+(Number.isFinite(c.relative_humidity_2m)?c.relative_humidity_2m+'%':'--')+' · Gió '+(Number.isFinite(c.wind_speed_10m)?Math.round(c.wind_speed_10m)+' km/h':'--');$('weatherForecast').innerHTML=(d.time||[]).map((date,i)=>{const [ico,desc]=dnovaWeatherLabel(d.weather_code?.[i]);const max=d.temperature_2m_max?.[i],min=d.temperature_2m_min?.[i],rain=d.precipitation_probability_max?.[i];return `<div class="weather-day" title="${desc}"><b>${dnovaDateLabel(date,i)}</b><span>${ico}</span><strong>${Number.isFinite(max)?Math.round(max)+'°':'--'} / ${Number.isFinite(min)?Math.round(min)+'°':'--'}</strong><small>${Number.isFinite(rain)?'Mưa '+rain+'%':'Chưa có % mưa'}</small></div>`;}).join('');}
// Reuse the existing modal and all existing tour content; weather is requested only on click.
const dnovaOriginalOpenDestination=openDestination;
openDestination=function(name){dnovaOriginalOpenDestination(name);loadDNOVAWeather(name);};
const dnovaOriginalOpenJourney=openJourney;
openJourney=function(type){dnovaOriginalOpenJourney(type);const place=type==='solo'?'Hà Giang':type==='couple'?'Hội An':'Ninh Bình';loadDNOVAWeather(place);};


/* DNOVA destination photo galleries: supplied by the site owner. */
const DNOVA_DESTINATION_GALLERIES={
 'Đà Lạt':[
  ['assets/dalat-culture-gong.jpg','Văn hóa cồng chiêng Tây Nguyên'],
  ['assets/dalat-eco-garden.jpg','Không gian xanh và vườn cảnh'],
  ['assets/dalat-alpine-coaster.jpg','Máng trượt khám phá rừng thông'],
  ['assets/dalat-langbiang.jpg','Cao nguyên Langbiang'],
  ['assets/dalat-banh-mi-xiu-mai.jpg','Bánh mì xíu mại Đà Lạt'],
  ['assets/dalat-banh-trang-nuong.jpg','Bánh tráng nướng'],
  ['assets/dalat-adventure-zipline.jpg','Trải nghiệm mạo hiểm giữa thiên nhiên'],
  ['assets/dalat-lang-cu-lan.jpg','Không gian làng Cù Lần']
 ],
 'Đà Nẵng':[
  ['assets/danang-coastal-rocks.jpg','Bờ biển và ghềnh đá'],
  ['assets/danang-parasailing.jpg','Dù bay trên biển'],
  ['assets/danang-dragon-bridge.jpg','Cầu Rồng về đêm'],
  ['assets/danang-hoi-an-night.jpg','Phố đèn lồng Hội An'],
  ['assets/danang-lakeside-camping.jpg','Cắm trại bên hồ và núi'],
  ['assets/danang-nam-o-fish-sauce.jpg','Làng nghề nước mắm Nam Ô'],
  ['assets/danang-mi-quang.jpg','Mì Quảng và ẩm thực miền Trung'],
  ['assets/danang-goi-ca.jpg','Gỏi cá đặc sản địa phương']
 ]
};
for(const [place,photos] of Object.entries(DNOVA_DESTINATION_GALLERIES)){
 const item=destinations.find(d=>d.name===place);
 if(item){item.gallery=photos;}
}
function dnovaEnsureGalleryStyles(){
 if(document.getElementById('dnova-gallery-styles'))return;
 const style=document.createElement('style');style.id='dnova-gallery-styles';style.textContent=`
 .dnova-photo-gallery{margin:22px 0 26px;background:#102a29;color:#fff;padding:22px;border-radius:18px;overflow:hidden}
 .dnova-gallery-head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:16px}
 .dnova-gallery-head h3{margin:0!important;font:800 clamp(18px,2.5vw,27px)/1.15 var(--sans,Arial);letter-spacing:-.035em;color:#fff}
 .dnova-gallery-all{flex-shrink:0;border:1px solid #526361;border-radius:30px;background:transparent;color:#fff;padding:10px 15px;font-size:10px;font-weight:800;letter-spacing:.08em}
 .dnova-gallery-collage{display:grid;grid-template-columns:1.35fr 1fr;grid-template-rows:repeat(2,minmax(110px,1fr));gap:12px;height:clamp(250px,39vw,420px)}
 .dnova-gallery-tile{position:relative;display:block;border:0;padding:0;min-width:0;min-height:0;overflow:hidden;border-radius:18px;background:#203735;color:white}
 .dnova-gallery-tile:first-child{grid-row:1 / span 2}
 .dnova-gallery-tile img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .35s}
 .dnova-gallery-tile:hover img{transform:scale(1.035)}
 .dnova-gallery-tile.more:after{content:'';position:absolute;inset:0;background:rgba(0,0,0,.55)}
 .dnova-gallery-moretext{position:absolute;z-index:1;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;text-align:center}
 .dnova-gallery-moretext b{font-size:clamp(23px,3vw,34px);line-height:1.1}.dnova-gallery-moretext span{font-size:10px;font-weight:800;letter-spacing:.1em}
 .dnova-gallery-lightbox{position:fixed;inset:0;z-index:100;display:none;background:rgba(5,17,15,.96);padding:28px;overflow:auto;color:white}
 .dnova-gallery-lightbox.open{display:block}.dnova-lightbox-head{display:flex;justify-content:space-between;align-items:center;gap:12px;max-width:1200px;margin:0 auto 22px}.dnova-lightbox-head h2{margin:0;font-size:clamp(22px,3vw,34px)}.dnova-lightbox-close{border:1px solid #63716d;background:transparent;color:#fff;border-radius:50%;width:42px;height:42px;font-size:25px}
 .dnova-lightbox-grid{max-width:1200px;margin:auto;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.dnova-lightbox-grid figure{margin:0;overflow:hidden;border-radius:12px;background:#18302d}.dnova-lightbox-grid img{width:100%;height:clamp(130px,20vw,240px);display:block;object-fit:contain;background:#102a29}.dnova-lightbox-grid figcaption{padding:10px 12px;font-size:12px;color:#e1e9e5}
 @media(max-width:640px){.dnova-photo-gallery{padding:15px;border-radius:14px}.dnova-gallery-head{align-items:flex-start}.dnova-gallery-all{padding:9px 10px;font-size:9px}.dnova-gallery-collage{height:270px;gap:8px;grid-template-rows:repeat(2,minmax(0,1fr))}.dnova-gallery-tile{border-radius:12px}.dnova-lightbox-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.dnova-gallery-lightbox{padding:16px}}
 `;document.head.appendChild(style);
}
function dnovaRenderDestinationGallery(name){
 const sourcePhotos=DNOVA_DESTINATION_GALLERIES[name];
 const seenPhotoSources=new Set();
 const photos=(sourcePhotos||[]).filter(([src])=>{if(!src||seenPhotoSources.has(src))return false;seenPhotoSources.add(src);return true;});
 document.getElementById('dnovaDestinationGallery')?.remove();
 if(!photos||!photos.length)return;
 dnovaEnsureGalleryStyles();
 let lightbox=document.getElementById('dnovaGalleryLightbox');
 if(!lightbox){lightbox=document.createElement('section');lightbox.id='dnovaGalleryLightbox';lightbox.className='dnova-gallery-lightbox';lightbox.innerHTML='<div class="dnova-lightbox-head"><h2></h2><button class="dnova-lightbox-close" aria-label="Đóng thư viện ảnh">×</button></div><div class="dnova-lightbox-grid"></div>';document.body.appendChild(lightbox);lightbox.querySelector('.dnova-lightbox-close').addEventListener('click',()=>lightbox.classList.remove('open'));lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.classList.remove('open')});document.addEventListener('keydown',e=>{if(e.key==='Escape')lightbox.classList.remove('open')});}
 lightbox.querySelector('h2').textContent='THƯ VIỆN ẢNH — '+name.toLocaleUpperCase('vi-VN');
 lightbox.querySelector('.dnova-lightbox-grid').innerHTML=photos.map(([src,label])=>`<figure><img src="${src}" alt="${name}" loading="lazy"></figure>`).join('');
 const gallery=document.createElement('section');gallery.id='dnovaDestinationGallery';gallery.className='dnova-photo-gallery';
 const remain=Math.max(0,photos.length-3);
 const tiles=photos.slice(0,3).map(([src,label],i)=>`<button class="dnova-gallery-tile ${i===2&&remain>0?'more':''}" data-gallery-open aria-label="Xem toàn bộ ảnh ${name}"><img src="${src}" alt="${label}" loading="lazy">${i===2&&remain>0?`<span class="dnova-gallery-moretext"><b>+${remain}</b><span>ẢNH NỮA</span></span>`:''}</button>`).join('');
 gallery.innerHTML=`<div class="dnova-gallery-head"><h3>THƯ VIỆN ẢNH</h3><button class="dnova-gallery-all" data-gallery-open>XEM TẤT CẢ (${photos.length})</button></div><div class="dnova-gallery-collage">${tiles}</div>`;
 gallery.querySelectorAll('[data-gallery-open]').forEach(btn=>btn.addEventListener('click',()=>lightbox.classList.add('open')));
 const story=document.getElementById('modalStory');if(story)story.insertAdjacentElement('afterend',gallery);
}
const dnovaOpenDestinationWithGallery=openDestination;
openDestination=function(name){dnovaOpenDestinationWithGallery(name);dnovaRenderDestinationGallery(name);};
// Re-render cards so their cover images use the supplied destination photos.
renderDestinations();


/* DNOVA: galleries built from the owner's uploaded destination folders.
   Original booking, Google Sheets and email configuration above is preserved. */
Object.assign(DNOVA_DESTINATION_GALLERIES, {
  "Đà Lạt": [
    ["assets/tour-a-lat-ban-sao-cua-nguoi-da-lat-1.jpg", "Nguoi da lat 1"],
    ["assets/tour-a-lat-ban-sao-cua-banh-mi-xiu-mai-da-lat.jpg", "Banh mi xiu mai da lat"],
    ["assets/tour-a-lat-ban-sao-cua-46371cc1-773e-4481-93ae-e0b7d2ab90af-202505.webp", "46371cc1 773e 4481 93ae e0b7d2ab90af 20250506085505 1 dsc00983 2"],
    ["assets/tour-a-lat-banh-mi-xiu-mai-da-lat.jpg", "Banh mi xiu mai da lat"],
    ["assets/tour-a-lat-46371cc1-773e-4481-93ae-e0b7d2ab90af-20250506085505-1-d.webp", "46371cc1 773e 4481 93ae e0b7d2ab90af 20250506085505 1 dsc00983 2"],
    ["assets/tour-a-lat-nguoi-da-lat-1.jpg", "Nguoi da lat 1"],
    ["assets/tour-a-lat-ban-sao-cua-cac-tro-choi-o-thac-datanla-3-1140.jpg", "Cac tro choi o thac datanla 3 1140"],
    ["assets/tour-a-lat-cac-tro-choi-o-thac-datanla-3-1140.jpg", "Cac tro choi o thac datanla 3 1140"],
    ["assets/tour-a-lat-ban-sao-cua-lang-cu-lan.jpg", "Lang cu lan"],
    ["assets/tour-a-lat-lang-cu-lan.jpg", "Lang cu lan"],
    ["assets/tour-a-lat-ban-sao-cua-banh-trang-nuong-da-lat-ivivu.jpg", "Banh trang nuong da lat ivivu"],
    ["assets/tour-a-lat-banh-trang-nuong-da-lat-ivivu.jpg", "Banh trang nuong da lat ivivu"],
    ["assets/tour-a-lat-ban-sao-cua-299232550-186640243822503-63415334970873230.jpg", "299232550 186640243822503 6341533497087323017 n"],
    ["assets/tour-a-lat-299232550-186640243822503-6341533497087323017-n.jpg", "299232550 186640243822503 6341533497087323017 n"],
    ["assets/tour-a-lat-ban-sao-cua-img-0752.jpg", "Img 0752"],
    ["assets/tour-a-lat-img-0752.jpg", "Img 0752"]
  ],
  "Đà Nẵng": [
    ["assets/tour-a-nang-img-2369.jpg", "Img 2369"],
    ["assets/tour-a-nang-img-2371.jpg", "Img 2371"],
    ["assets/tour-a-nang-img-2378.jpg", "Img 2378"],
    ["assets/tour-a-nang-img-2370.jpg", "Img 2370"],
    ["assets/tour-a-nang-img-2368.jpg", "Img 2368"],
    ["assets/tour-a-nang-img-2373.jpg", "Img 2373"],
    ["assets/tour-a-nang-img-2372.jpg", "Img 2372"],
    ["assets/tour-a-nang-img-2374.jpg", "Img 2374"]
  ],
  "Hội An": [
    ["assets/tour-hoi-an-img-2381.jpg", "Img 2381"],
    ["assets/tour-hoi-an-img-2382.jpg", "Img 2382"],
    ["assets/tour-hoi-an-hoi-an-quang-nam-vntrip-1.jpg", "Hoi an quang nam vntrip 1"],
    ["assets/tour-hoi-an-img-2380.jpg", "Img 2380"],
    ["assets/tour-hoi-an-img-2379.jpg", "Img 2379"],
    ["assets/tour-hoi-an-dac-san-hoi-an-5.jpeg", "Dac san hoi an 5"],
    ["assets/tour-hoi-an-camnhi-201824041833-cao-lau-hoi-an.jpg", "Camnhi 201824041833 cao lau hoi an"]
  ],
  "Sài Gòn": [
    ["assets/tour-sai-gon-img-2359.jpg", "Img 2359"],
    ["assets/tour-sai-gon-img-2355.jpg", "Img 2355"],
    ["assets/tour-sai-gon-img-2360.jpg", "Img 2360"],
    ["assets/tour-sai-gon-img-2358.jpg", "Img 2358"],
    ["assets/tour-sai-gon-img-2356.jpg", "Img 2356"],
    ["assets/tour-sai-gon-am-thuc-sai-gon-01-1692104915.jpg", "Am thuc sai gon 01 1692104915"],
    ["assets/tour-sai-gon-1k66tt767-8ufi1o.jpg", "1k66tt767 8ufi1o"],
    ["assets/tour-sai-gon-1742898108-481231772-122140861622606002-647800769203195.jpg", "1742898108 481231772 122140861622606002 6478007692031959728 n"]
  ],
  "Huế": [
    ["assets/tour-hue-img-2364.jpg", "Img 2364"],
    ["assets/tour-hue-img-2361.jpg", "Img 2361"],
    ["assets/tour-hue-img-2363.jpg", "Img 2363"],
    ["assets/tour-hue-img-2351.jpg", "Img 2351"],
    ["assets/tour-hue-img-2366.jpg", "Img 2366"],
    ["assets/tour-hue-img-2362.jpg", "Img 2362"],
    ["assets/tour-hue-img-2365.jpg", "Img 2365"],
    ["assets/tour-hue-img-2367.jpg", "Img 2367"]
  ],
  "Nha Trang": [
    ["assets/tour-nha-trang-img-2353.jpg", "Img 2353"],
    ["assets/tour-nha-trang-ba-ho-nha-trang-4-1628260880.jpg", "Ba ho nha trang 4 1628260880"],
    ["assets/tour-nha-trang-1k66tn4ca-8ufi1o.jpg", "1k66tn4ca 8ufi1o"],
    ["assets/tour-nha-trang-van-hoa-nha-trang-5-1.webp", "Van hoa nha trang 5 1"],
    ["assets/tour-nha-trang-images5535018-xtdlcd1.jpg", "Images5535018 xtdlcd1"],
    ["assets/tour-nha-trang-kdldanhbatca.jpg", "Kdldanhbatca"],
    ["assets/tour-nha-trang-bai-tranh-nha-trang-newlifetravel.jpg", "Bai tranh nha trang newlifetravel"],
    ["assets/tour-nha-trang-banh-canh-nha-trang-7.jpg", "Banh canh nha trang 7"],
    ["assets/tour-nha-trang-du-lich-nha-trang-10-dac-san-noi-tieng-nhat-1.jpg", "Du lich nha trang 10 dac san noi tieng nhat 1"]
  ],
  "Hà Giang": [
    ["assets/tour-ha-giang-du-lich-mao-hiem-1-1633923727290-1633923728403108831279.jpg", "Du lich mao hiem 1 1633923727290 16339237284031088312799"],
    ["assets/tour-ha-giang-06420e30cdb2adcb2678617c14f07d08.jpg", "06420e30cdb2adcb2678617c14f07d08"],
    ["assets/tour-ha-giang-thit-trau-gac-bep-ivivu.jpg", "Thịt trâu gác bếp ivivu"],
    ["assets/tour-ha-giang-dac-san-ha-giang-xoi-1704132183.jpeg", "Dac san ha giang xoi 1704132183"],
    ["assets/tour-ha-giang-cot-co-lung-cu-1.jpg", "Cot co lung cu 1"],
    ["assets/tour-ha-giang-1k66vf58l-8ufi1o.jpg", "1k66vf58l 8ufi1o"],
    ["assets/tour-ha-giang-image-2.png", "Image 2"],
    ["assets/tour-ha-giang-song-nho-que-4.jpg", "Song nho que 4"],
    ["assets/tour-ha-giang-du-lich-the-thao.jpg", "Du lich the thao"],
    ["assets/tour-ha-giang-ac652fd7bd3a125d4b7b5ef9b87d7925.jpg", "Ac652fd7bd3a125d4b7b5ef9b87d7925"]
  ],
  "Hà Nội": [
    ["assets/tour-ha-noi-khu-du-lich-sinh-thai-ha-noi-10.jpg", "Khu du lich sinh thai ha noi 10"],
    ["assets/tour-ha-noi-pho-ha-noi-09-1677399161.jpg", "Pho ha noi 09 1677399161"],
    ["assets/tour-ha-noi-le-hoi-ha-noi-11696843940-17217280880431598578484.jpg", "Le hoi ha noi 11696843940 17217280880431598578484"],
    ["assets/tour-ha-noi-quality-restoration-20261031011323861.jpeg", "Quality restoration 20261031011323861"],
    ["assets/tour-ha-noi-quality-restoration-20261031011310549.jpeg", "Quality restoration 20261031011310549"],
    ["assets/tour-ha-noi-nguoi-ha-noi-1.jpg", "Nguoi ha noi 1"],
    ["assets/tour-ha-noi-quality-restoration-20261031011510636.jpeg", "Quality restoration 20261031011510636"],
    ["assets/tour-ha-noi-khu-du-lich-sinh-thai-ha-noi-13.jpg", "Khu du lich sinh thai ha noi 13"]
  ],
  "Ninh Bình": [
    ["assets/tour-ninh-binh-ninh-binh-1.jpg", "Ninh bình 1"],
    ["assets/tour-ninh-binh-ninh-binh2.jfif", "Ninh bình2"],
    ["assets/tour-ninh-binh-co-o-hoa-lu-ninh-binh.webp", "Cố đô hoa lư ninh bình"]
  ],
  "Quảng Bình": [
    ["assets/tour-quang-binh-du-lich-bien-quang-binh.webp", "Du lịch biển quảng bình"],
    ["assets/tour-quang-binh-du-lich-mao-hiem-quang-binh.jpg", "Du lịch mào hiểm quảng bình"],
    ["assets/tour-quang-binh-du-lich-sinh-thai-quang-binh.jfif", "Du lịch sinh thái quảng bình"]
  ],
  "Mộc Châu": [
    ["assets/tour-moc-chau-moc-chau-3.jpg", "Mộc châu 3"],
    ["assets/tour-moc-chau-moc-chau-2.jpg", "Mộc châu 2"],
    ["assets/tour-moc-chau-moc-chau-4.jpg", "Mộc châu 4"],
    ["assets/tour-moc-chau-moc-chau-1.jpg", "Mộc châu 1"]
  ],
  "Phú Quốc": [
    ["assets/tour-phu-quoc-du-lich-bien-phu-quoc.webp", "Du lịch biển phú quốc"],
    ["assets/tour-phu-quoc-du-lich-nghi-duong-phu-quoc.jpg", "Du lịch nghỉ dưỡng phú quốc"]
  ],
  "Quy Nhơn": [
    ["assets/tour-quy-nhon-quy-nhon2.jpg", "Quy nhơn2"],
    ["assets/tour-quy-nhon-quy-nhon-3.jpg", "Quy nhơn 3"],
    ["assets/tour-quy-nhon-quy-nhon1.jpg", "Quy nhơn1"]
  ],
  "Sa Pa": [
    ["assets/tour-sa-pa-sapa3.jpg", "Sapa3"],
    ["assets/tour-sa-pa-sapa2.jpg", "Sapa2"],
    ["assets/tour-sa-pa-sapa.jpg", "Sapa"]
  ],
  "Cao Bằng": [
    ["assets/tour-cao-bang-cao-bang-3.jpg", "Cao bằng 3"],
    ["assets/tour-cao-bang-thac-ban-gioc-cao-bang-1.jpg", "Thác bản giốc cao bằng 1"],
    ["assets/tour-cao-bang-cao-bang-4.jpg", "Cao bằng 4"],
    ["assets/tour-cao-bang-pac-bo-cao-bang-2.jpg", "Pác bó cao bằng 2"]
  ],
  "Côn Đảo": [
    ["assets/tour-con-ao-con-ao-2.jpg", "Côn đảo 2"],
    ["assets/tour-con-ao-con-ao-3.jpg", "Côn đảo 3"],
    ["assets/tour-con-ao-con-ao-1.jpg", "Côn đảo 1"]
  ],
  "Cần Thơ": [
    ["assets/tour-can-tho-du-lich-cho-noi-can-tho.webp", "Du lịch chợ nổi cần thơ"],
    ["assets/tour-can-tho-du-lich-miet-vuon-can-tho.jpg", "Du lịch miệt vườn cần thơ"]
  ],
  "Lý Sơn": [
    ["assets/tour-ly-son-du-lich-nong-gnhieepj-ly-son-2.jpg", "Du lịch nông gnhieepj lý sơn 2"],
    ["assets/tour-ly-son-du-lich-van-hoa-ly-son-3.webp", "Du lịch văn hóa lý sơn 3"],
    ["assets/tour-ly-son-du-lich-bien-ly-son1.jpg", "Du lịch biển lý sơn1"]
  ]
});
// Deduplicate gallery images: remove copied duplicate files and repeated sources within each destination.
for (const [place, photos] of Object.entries(DNOVA_DESTINATION_GALLERIES)) {
  const seen = new Set();
  DNOVA_DESTINATION_GALLERIES[place] = photos.filter(([src]) => {
    if (!src || /ban-sao-cua/i.test(src)) return false;
    const key = src.toLowerCase().replace(/\\/g, '/');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
for (const [place, photos] of Object.entries(DNOVA_DESTINATION_GALLERIES)) {
  const aliases = place === 'Sa Pa' ? ['Sa Pa', 'Sapa'] : [place];
  const item = destinations.find(d => aliases.includes(d.name));
  if (item && photos && photos.length) {
    item.gallery = photos;
  }
}
renderDestinations();
