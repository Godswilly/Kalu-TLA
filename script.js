const mainContainer = document.querySelector('.main-container');
const listMenu = document.querySelector('.menu-list');
const hamburger = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.menu-closebtn .times');
const itemsMenu = Array.from(document.querySelectorAll('.menu-item'));

hamburger.addEventListener('click', () => {
	listMenu.classList.add('active');
	closeIcon.classList.add('icon');
});

itemsMenu.forEach((menuItem) => {
	menuItem.addEventListener('click', () => {
		itemsMenu.forEach((Item) => {
			Item.classList.remove('active');
		});
		listMenu.classList.remove('active');
		menuItem.classList.add('active');

		if (
			menuItem.textContent === 'pro' &&
			!mainContainer.classList.contains('homepage')
		) {
			localStorage.setItem(menuItem.textContent, 'active');
		}
	});
});

window.addEventListener('resize', () => {
	if (
		mainContainer.clientWidth >= 768 &&
		listMenu.classList.contains('active')
	) {
		window.location.reload();
	}
});

window.onload = () => {
	if (localStorage.getItem('pro') !== null) {
		itemsMenu[3].classList.add(localStorage.getItem('pro'));
		localStorage.removeItem('pro');
	}
};

const speakerdata = [
	{
		name: 'Ben Rouse',
		image: 'img/Ben.jpg',
		title: 'Google Project Lead,GoogleAppEvents',
		desc: 'Ben is a Design Sprint Facilitator and advocate for design thinking in education.He has a masters degree in leading innovation and change in Education',
	},
	{
		name: 'Zaittoon Bukhari',
		image: 'img/zaittoon.jpg',
		title: 'Uk & i Training Lead,GoogleAppEvents',
		desc: 'Zaitoon has spent 12 years teach,ing currently work the ATC Trust as their EDTech Lead.She is also a specialist Leader in Education for EdTech,a Google Certified,Innovator and Coach.',
	},
	{
		name: 'Guen Sayson',
		image: 'img/Guen-Bio.jpg',
		title: 'Finance and Administrator, Google',
		desc: 'Guen is a Computer engineer, graduate.She looks after logistics and administration for AppsEvents including registration.',
	},
	{
		name: 'Andrea Funda',
		image: 'img/jj-vestil.jpg',
		title: 'Website and Promotion, Google',
		desc: 'Jane is a Google for Education,Certified Trianer.She has a degree in Information Technology and Diploma in Professional Education.',
	},
	{
		name: 'Kimberly House',
		image: 'img/kimberly.jpg',
		title: 'Mainland Europe,Acer',
		desc: 'Kim has been a primary school"educator for 20 years, serving the 12 years as a Technology Integration Specialist at the Bavarian International School in Munich, Germany. She is a Google Certified and an Apple Distinguished Educator..',
	},
	{
		name: 'Racheal coathup',
		image: 'img/Rachel-1.jpg',
		title: 'USA, Google',
		desc: 'Lead Teacher Technology for"@LEOAcademies Google Certificate and innovator #SWE19 #BadgEdTech.',
	},
	{
		name: 'Tara Linney',
		image: 'img/tara.jpg',
		title: 'USA, Google',
		desc: 'GCI,GET,#ASCDEL17,ISTE CS,PLN Leader,Raspberry Pi Certified,#EdTech Coordinator,Author @codeequitybook keynote,Blueberry Lover,Nerd.#GTAMTV14 #ISTEcert.',
	},
	{
		name: 'Heather Spanbroek',
		image: 'img/heather.jpg',
		title: 'USA, Acer',
		desc: 'Heather is a Google Certified Innovator and ISTE Certified.',
	},
	{
		name: 'Rowland Baker',
		image: 'img/Rowland.png',
		title: 'USA, Acer',
		desc: 'Rowland has been,an educator for over thirty years in both public and private schools. He is currently Executive Director of the (TICAL).',
	},
	{
		name: 'John Mikton',
		image: 'img/john.jpg',
		title: 'Mainland Europe,Trainer Google',
		desc: 'John is the Head of, Education and Media Technology at the International School of Luxembourg. He is an Apple Distinguished Educator and a Google Certified Trainer. John co-hosts the International Schools Podcast together with Dan..',
	},
];

const speakers = document.querySelector('.featuredspeakers');

// speaker container
const listOfSpeakers = document.createElement('ul');
listOfSpeakers.className = 'speaker-list';
speakers.appendChild(listOfSpeakers);

speakerdata.forEach((speaker) => {
	// speaker card
	const li = document.createElement('li');
	li.className = 'speaker';
	listOfSpeakers.appendChild(li);

	const speakerImage = document.createElement('div');
	speakerImage.className = 'speakerimg';
	speakerImage.innerHTML = `<img title='speaker' src=${speaker.image} alt="Featured speaker">`;
	li.appendChild(speakerImage);

	const speakerInfo = document.createElement('div');
	speakerInfo.className = 'speakerinfo';
	li.appendChild(speakerInfo);

	const speakerName = document.createElement('h3');
	speakerName.className = 'speakername';
	speakerName.innerHTML = speaker.name;
	speakerInfo.appendChild(speakerName);

	const speakerTitle = document.createElement('p');
	speakerTitle.className = 'speakertitle';
	speakerTitle.innerHTML = speaker.title;
	speakerInfo.appendChild(speakerTitle);

	const speakerDesc = document.createElement('p');
	speakerDesc.className = 'speakerdesc';
	speakerDesc.innerHTML = speaker.desc;
	speakerInfo.appendChild(speakerDesc);
});

const addSpeakers = document.createElement('button');
addSpeakers.className = 'morebtn';
addSpeakers.type = 'button';
addSpeakers.innerHTML = 'MORE <i class="chevron down icon"></i>';
speakers.appendChild(addSpeakers);

const speakerCards = Array.from(document.querySelectorAll('.speaker'));

speakerCards.forEach((card, index) => {
	if (index > 1) {
		card.classList.add('hide');
	}
});

const moreBtn = document.querySelector('.morebtn');

const moreBtnText = (card) => {
	if (card.classList.contains('hide')) {
		moreBtn.innerHTML = 'MORE <i class="chevron down icon"></i>';
	} else {
		moreBtn.innerHTML = 'LESS <i class="chevron up icon"></i>';
	}
};

moreBtn.addEventListener('click', () => {
	speakerCards.forEach((card, index) => {
		if (index > 1) {
			card.classList.toggle('hide');
			moreBtnText(card);
		}
	});
});
