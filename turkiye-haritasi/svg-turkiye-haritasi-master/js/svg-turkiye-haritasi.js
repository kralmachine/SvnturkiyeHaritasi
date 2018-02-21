
function svgturkiyeharitasi() {
	
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');
 
  
  var iller=['Adana','Adıyaman','Afyonkarahisar','Ağrı','Amasya','Ankara','Antalya','Artvin','Aydın',
			'Balıkesir','Bilecik','Bingöl','Bitlis','Bolu','Burdur','Bursa','Çanakkale','Çankırı','Çorum',
			'Denizli','Diyarbakır','Edirne','Elazığ','Erzincan','Erzurum','Eskişehir','Gaziantep','Giresun','Gümüşhane',
			'Hakkari','Hatay','Isparta','Mersin','İstanbul','İzmir','Kars','Kastamonu','Kayseri','Kırklareli','Kırşehir','Kocaeli','Konya','Kütahya',
			'Malatya','Manisa','Kahramanmaraş','Mardin','Muğla','Muş','Nevşehir','Niğde','Ordu','Rize','Sakarya','Samsun',
			'Siirt','Sinop','Sivas','Tekirdağ','Tokat','Trabzon','Tunceli','Şanlıurfa','Uşak','Van','Yozgat','Zonguldak','Aksaray','Bayburt','Karaman',
			'Kırıkkale','Batman','Şırnak','Bartın','Ardahan','Iğdır','Yalova','Karabük','Kilis','Osmaniye','Düzce','Kıbrıs'];	

var illerTop=[480,620,200,900,500,335,235,815,80,80,210,760,850,300,195,150,20,380,440,150,730,20,695,680,790,250,570,640,670,940,530,240,395,150,50,885,385,500,70,410,200,325,170,615,90,540,770,100,820,435,450,590,765,240,510,850,465,580,75,555,700,690,670,160,930,470,275,390,745,365,385,800,865,330,860,930,145,345,580,530,280,370];
var illerLeft=[350,315,250,180,120,170,360,80,300,175,150,220,265,120,325,150,145,120,135,310,290,70,260,185,150,185,360,120,140,315,415,305,385,80,260,125,60,255,30,210,95,300,200,265,230,300,340,340,230,245,305,110,100,110,90,300,60,200,75,140,105,215,355,255,250,190,70,280,130,350,175,285,325,50,75,155,115,85,385,345,95,490];			
			
			
	element.addEventListener(
    'load',
    function (event) {
	
			for(i=0;i<82;i++){
				
				//var x=document.getElementById(iller[i]).getElementsByTagName('path')[0].getAttribute('d');
				
				
					//var newText=document.createElement('text');
					//var svg = document.getElementsByTagName('svg');
					//document.getElementById("g").appendChild(newText);
					//document.documentElement.appendChild(newText);
						/*info.innerHTML = [
					 '<div>',iller[i],'</div>'
					].join('');*/
							
					//info.style.top=illerTop[i]+'px';
					//info.style.left =illeLeft[i]+'px';
					
					//document.getElegetElementsByTagName('svg').appendChild(x);
					
					var newText=document.createElementNS('http://www.w3.org/2000/svg','text');
					newText.setAttribute('x',illerTop[i]+'px');
					newText.setAttribute('y',illerLeft[i]+'px');
					newText.setAttribute('fill',"#0000ff");
					newText.innerHTML=iller[i];	
					document.getElementsByTagName('svg')[0].appendChild(newText);
					
				

					
			}			
	}
  );
  
 
  /*element.addEventListener(
    'mouseover',
    function (event) {
      if (event.target.tagName == 'path' && event.target.parentNode.id != 'guney-kibris') {
        info.innerHTML = [
          '<div>',
          event.target.parentNode.dataset['iladi'],
          '</div>'
        ].join('');
      }
    }
  );
  
 
  element.addEventListener(
    'mousemove',
    function (event) {
     info.style.top = event.pageY+5+ 'px';
     info.style.left = event.pageX + 'px';
    }
  );

  element.addEventListener(
    'mouseout',
    function (event) {
      info.innerHTML = '';
    }
  );*/
  
}
