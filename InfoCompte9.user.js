// ==UserScript==
// @name           InfoCompte9
// @namespace   2c7e63c68903f0a8b63d7bfdd749d871
// @description    InfoCompte
// @vOGgame        9.0.2
// @version        9.0.0
// @author         Vulca & now benneb
// @grant		   GM_getValue
// @grant		   GM_setValue
// @grant		   GM_deleteValue
// @grant		   GM_getResourceURL
// @grant		   GM_xmlhttpRequest
// @copyright 2019, benneb (https://openuserjs.org/users/benneb)
// @license MIT

// @updateURL https://openuserjs.org/meta/takuotakuo/InfoCompte9.meta.js
// @downloadURL https://openuserjs.org/install/takuotakuo/InfoCompte9.user.js

// @include     	*.ogame*gameforge.com/game/index.php?page=*

// @exclude        *.ogame*gameforge.com/game/index.php?page=displayMessageNewPage*
// ==/UserScript==
//testtestestestsetst

var Version = '9.0.0';
//var numberUserscript = '133137';

var start_time = (new Date()).getTime();
//var freqMaj = 23*3600;
var url=location.href;
var FireFox = navigator.userAgent.indexOf("Firefox") > -1 || navigator.userAgent.indexOf("Iceweasel") > -1;
var nomScript = FireFox? '' : 'InfoCompte3';
var Opera = navigator.userAgent.indexOf('Opera')>-1;
var Chrome = navigator.userAgent.indexOf('Chrome')>-1;
var Safari = navigator.userAgent.indexOf("Safari") > -1;
var Tamper = false;
var DATA = new Array();
var adresse_forum = "http://board.origin.ogame.de/board6-origin/board38-tools-scripts-skins/board39-tolerated-tools-addons-scripts/2056-infocompte-script/"

	if (Chrome)
	{

		if(typeof GM_getResourceURL === 'function')
		{
			Tamper =  true; // TamperMonkey

		}
		function GM_getValue(key,defaultVal)
		{
			var retValue = localStorage.getItem(key);
			if ( !retValue )
			{
				return defaultVal;
			}
			return retValue;
		}

		function GM_setValue(key,value)
		{
			localStorage.setItem(key, value);
		}

		function GM_deleteValue(value)
		{
			localStorage.removeItem(value);
		}
        function GM_addStyle(css) {
            const style = document.getElementById("GM_addStyleBy8626") || (function() {
            const style = document.createElement('style');
            style.type = 'text/css';
            style.id = "GM_addStyleBy8626";
            document.head.appendChild(style);
            return style;
        })();
        const sheet = style.sheet;
        sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
      }
	}

	function trim(string)
			{return string.replace(/(^\s*)|(\s*$)/g,'');}

	function getAccData()
	{
		var dataNeeded = new Array('ogame-universe','ogame-universe-speed','ogame-language','ogame-player-id','ogame-player-name','ogame-alliance-id','ogame-alliance-name','ogame-alliance-tag');

		var dataInput='';
		for(var i=0 ; i<dataNeeded.length ; i++)
		{
			dataInput+='<input style="display:none;" id="'+dataNeeded[i]+'" name="'+dataNeeded[i]+'" value="'+document.getElementsByName(dataNeeded[i])[0].content+'" /> ' ;
		}

		return dataInput;
	}

	function checkVersionAndDisplayMenu()
	{
		if (document.getElementById('playerName'))
		{
			var icone = 'data:image/gif;base64,R0lGODlhJgAdAMZlAAAAAAkKCgoKCg0ODg4ODhgaGx0eHx0fIB4fIR4gISEjJSUnKSgrLSosLi0wMi8xMzI1Nzo9QD1AQT1BQ0hISEZLTUhNUEpOUUtPUk5SVVJXWlNYXFRYW1VZXVhcX1hdYFpeYVxhZF1iZmJnamRpbGRqbmpvcmtxdW1zd291enF4fHN6f3d6e3V8gXh/hHmAhX2AgnqBhn6Fin+FioOJj4eKjImMj4qNj4uPkY2RlIyUmpGWmJOboZigp5ugo5ihp5miqJ+kp6ClqJ6nraOorKSpraSttKavtqevtaewt6qzubK3u7K5vbW7v7e9wbvBxr/Fyr/Gyr/Gy8LJzsTM0MXM0cnR1s7W29HY3dLa39Pb4dff5drj6Nzl6t3m697n7eDo7uDp7+Hp7+Hq7+Lq8P///////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEAAH8ALAAAAAAmAB0AAAf+gH+CFISFhoeIhIKLjI2Jj5AUjZN/kZaIlIyXm4qZg5yXnp+HPlVbX2JkqmJfW1U+iaKVhT5TWqq4ubljWDaGsoVTUsNXY7rHuFeFwBTDzlJWYMi5YVlRQp2eFEzPzlVex1tUS0E5N+cskqIUUN3OU1xdVk5FO+f39zXq2u3uw0848AnMty8ThSb+nBEZOBBGQUoCZhhRQrFiRSQmRmjcOIKERxASCMgCECPGjyQoU6bUEaKlS5cXIEAAMLJkDBlAjqhEeQTFyxAfMESQOXPkBpslafAYYkRnkh4eOGSoMIGozAM0RQEAUAKp15IqrIpdsHXkVg1fkYYVK9PA1qxGnt4CSNChRdq1RB8gCCDXrFwADSyIOLHCxYsUDhgoKDDgb1mtjiNL/ut3smXKkC9rfhx382ZZfzxfBi1ItGTSqFOrXk06EAA7';
			var icone2 = 'data:image/gif;base64,R0lGODlhJgAdAMZnAAAAAAoKCg4ODikbCzglDlc8H2U+FUhISHNGFnRHFnZIFm9NJoNPFo5UFZlZFaZfEalgEbJkEKNrL7ZsHa9xLq9yLrFyLrp1LLR3NMF3KMd4I8t4IM14Hc94GtF4GNV5Fdd5E9h5E7t+PNl+HNiUS+KbTeWcTdGibu6hTtisfPmnTvOoVvypTv6pTv+qTv+tVMm2ov+uV/WwZe+xbue1fuq3f+q8iuu9i/C/i/HAi9nErfXCiv7Bf/zCg9zHsP/Cf/jEjPzEiP3Eh/7Eh//Fh/vGjPzHjv/Hi+7MpvjOoe3Rs/LRq+3StfTRq/DSsPfRqPTSrffSq/nTqvnTq/HVt/7UqPXWtf/VqPXXt/TYuPjYt/PZvfrZt/XavPnauPnaufrat/Xbvfvat/bbvPfbu/fbvPjbu////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEAAH8ALAAAAAAmAB0AAAf+gH+CB4SFhoeIhIKLjI2Jj5AHjZN/kZaIlIyXm4qZg5yXnp+HPltkXmBiqmBeZFs+iaKVhTpQTKq4ublgZTCGsoVQV8NKXLrHuGOFwAdSw89OWsi7ZV1LnZ4HTc/cUFjHZl1WSUI/5jSSogdV3NxTVF9hWU9G5vb2POnZ7O3PUT33AuLTl0lbP25IBAqsQZBSgBFAjkicOLGIjBcYM76IwXHFBAGyAIQIgYOIyZMnbbhYyZJliQgRAIQcGeJEjiEoTQ6Z0dJFCxMYYMYMWYHmyBQ3dgTBSSQHCxUoSIgQCjOBTFEAAGQwynUkB6pgG2QNmZVCV6NfwcJEkPWqp7ZEAApY8HA2rVAICgbAJQsXwAIJFzR0+ABiwwMHDAwQ6DsWK+PHkPvyjUxZsuPKmBu/zZxZ1h/OlT0LAg1ZtOnTqFOLDgQAOw==';
			var AJours = (GM_getValue(nomScript+"aJours",'true')+'' == 'true' ? true : false);
				//alert(Boolean(GM_getValue(nomScript+"aJours",'true')) + '  '+ GM_getValue(nomScript+"aJours",'true'))

			var aff_option ='<span class="menu_icon"><a id="iconeUpdate" href='+(AJours ? adresse_forum : "https://openuserjs.org/scripts/benneb/InfoCompte3" )+' target="blank_" ><img class="mouseSwitch" src="'+(AJours?icone:"http://vulca.projet-alternative.fr/images/caution.gif")+'" rel="'+(AJours?icone2:"http://vulca.projet-alternative.fr/images/caution.gif")+'" height="29" width="38"></span><a class="menubutton "';
				aff_option += 'href="'+url+'&infocompte=scriptOptions" accesskey="" target="_self">';
				aff_option += '<span class="textlabel">InfoCompte</span></a>';

			var tableau = document.createElement("li");
			tableau.innerHTML = aff_option;
			tableau.id='optionIFC';
			document.getElementById('menuTableTools').appendChild(tableau);
		}
	}
	if(document.getElementsByName('ogame-version')[0])
	checkVersionAndDisplayMenu();

	// ******************************************************************************************************
	// ****************************************** InfoCompte Script *****************************************
	// ******************************************************************************************************
	function InfoCompteScript()
	{

		var cautionIMG = "data:image/gif;base64,R0lGODlhIAAgANU/AOVCAcVZAP///1gqAMhkABMKAE0mAOdpAG1CAHg3APHKrOa3luprMGQtAIQ8AKRKALxVAO2EA7RRAJNDAKJRAIxBAGoxAC8XAPXayapNAOV7AJ5KAO6PTu2rc5pGAM1wJGExAL5nANeNWN1kANJqAGs9AEYgALKLaumUa9ZhAPfs5V4uAPCBMOp3GaV0Ss9eANRwAN1tBLBPANZfHv706z4eAO1rF81PCfno26lZAPf08fr39cuQYOJWJHdDFgAAACH5BAEAAD8ALAAAAAAgACAAAAb/wF/hAiquQMcjMolsGpuDQkFYI5AI2Kx2y82SctICwTMhbx6ehzqTebDXmTNaTU5RCitSReaRSR4SgRAQEhABg4iDGRIyDzIZFTA1FgQVHhmNMoSGhh0CAh+Hh4MSmI0eMQYWJA6YgIQBsS8pnwI4KSkvsQGFmRsaBiV6mbAvswcLtQIcI7i6h6YTGgPCFY6BAcYjBzHKnwcHzcaFf7/UMA6BGbvbIwoCHSwtGPDgIyOxEDJ8EecVf4MCpAjH4pMNAAAYfAOHixehCRFWlIBRAdOgF/cO0BPAAqFCAQvChcsXJ+LEdNiOFfzEwGMtcAdyBfDjIQKIiRMeGQoAbiNH/5efFIQb8YJUTRAIQlQsBCHFCA7KOAD91GLkIRkbbCZtgAjjCBpRpwoQGrNogAQakIYwkcCBmwwivElN6O1D0TQOTGhdO2CFBQsJvAlAIVYAhgqALQwwsNdEg78JTggWgbCHYBcOEvxlvCKpCQsrEgQWrGBGj2TeMDhIrFetCb8WFuwQbBiDCtouRK8wkDbpJAsgaIPsAQAF7R2aLTB2Dfod7RuVhZ/4a6I3Xx/CBcworMzHbus1GujIvoAHD5+CVSi37ji7e28Wqnfm+7iB6AQV8peZsL/ChAoOZPYXaLxJFEJ4FtgnmgMAWuIffxAymJloj/E2gGd/SfhgGhPQcWWGBx5s4IF/AGZW3QAgHGgfgGVYskGHaFwC4gMvgujABA40YIAkBYSwQg0GDDBAA0MqlmAD9SEJ2mND7mbCiFPUkEMOFFRp5ZVYXrkBBVtukEMFU/wghAFklmnmmWeaQKaaF4QZBAA7";

		var reg = new RegExp(/(galaxy|preferences|fleet2|fleet3|network|=trader|premium|alliance)/);

		if((! reg.test(url)) || (new RegExp(/infocompte=scriptOptions/)).test(url))
		{
			// **********************************************************************************************************************************************************************
			// *********************************************************** Fonctions **************************************************************************************************
			// **********************************************************************************************************************************************************************

			{ // function

				function getAmountOfShip(entite, typpe)
				{
					//console.log(entite+"--"+typpe);
					var clasEntite = document.getElementsByClassName(entite)[0];
					var classType = clasEntite.getElementsByClassName(typpe)[0];
					return classType.dataset.value;
				}
				function cut(n)
				{
					if( n>=10000) return (addPoints(Math.ceil(n/1000))+'M');
					else if( n>=10) return (addPoints((Math.ceil(n)))+'k');
					else return addPoints(Math.ceil(n*1000)).replace('.',' ');
				}

				function cutHeure(temps)
				{
					if(temps<48) return Math.floor(temps) + text.date.time.h;
					else if (temps < 24*15) return Math.floor(temps/24) +text.date.time.j;
					else if (temps < 24*7*8) return Math.floor(temps/24/7)+text.date.time.s;
					else return Math.floor(temps/24/30.5) +text.date.time.m;
				}

				function afficheCout(f, lvlElement, position, bati)
				{
					if(options.generale.affCout)
					{
						if (bati)
						{
							var temps = ((coutBati[f][0]+coutBati[f][1])*Math.pow(exposant[f],lvlElement)/ 5) *
								( 2 / (1 + parseInt(BatSta[numeroplanete].split('|')[0]))) *
								Math.pow(0.5,parseInt(BatSta[numeroplanete].split('|')[5]))/speedUni;

						}
						else
						{
							var temps = ((coutBati[f][0]+coutBati[f][1])*Math.pow(exposant[f],lvlElement)) /
								(1 + laboTot)/speedUni*coefIng;
						}
						//console.log(laboTot);
						affcout = '<div style="width:66px;background-color : rgba(0, 0, 0, 0.6);">'+text.tag.m.slice(0,1)+':'+cut(coutBati[f][0]*Math.pow(exposant[f],lvlElement))+'</div>'+
							'<div style="width:66px;background-color : rgba(0, 0, 0, 0.6);">'+text.tag.c.slice(0,1)+':'+cut(coutBati[f][1]*Math.pow(exposant[f],lvlElement))+'</div>'+
							'<div style="width:55px;background-color : rgba(0, 0, 0, 0.6);">'+text.tag.d.slice(0,1)+':'+cut(coutBati[f][2]*Math.pow(exposant[f],lvlElement))+'</div>'+
							'<div style="width:50px;background-color : rgba(0, 0, 0, 0.6);">'+cutHeure(temps)+'</div>';

						var sp1 = document.createElement("div");
						sp1.setAttribute("id", "prix"+position);

						sp1.setAttribute("style", "color:white; text-align:left; position:relative; font-size:11px; padding-top: 12px;");

						var sp2 = document.getElementsByClassName('level')[position];

						parentDiv = sp2.parentNode;
						parentDiv.insertBefore(sp1, sp2.nextSibling);
						var tableau = document.createElement("div");
						tableau.innerHTML = affcout+'<br/>';

						document.getElementById("prix"+position).appendChild(tableau);
					}
				}

				function coefDestruction(bat)
				{
					var targetlevel = parseInt(bat.getElementsByClassName('targetlevel')[0].dataset.value);
					var precedentlevel = parseInt(bat.getElementsByClassName('level')[0].dataset.value);
					if(targetlevel - precedentlevel < 0)//destruction
					{
						return 2.25;
					}
					return 1;
				}

				function fusion()
				{
					var objet_retour = {};

					for(var i=0,l=arguments.length;i<l;i++)
					{
						for(attribut in arguments[i])
						{
							objet_retour[attribut] = (typeof arguments[i][attribut] == "object" && objet_retour[attribut]) ? fusion(objet_retour[attribut],arguments[i][attribut]) : arguments[i][attribut];
						}
					}
					return objet_retour;
				}

				function draw_pie(data)
				{
					var data_url = data.join(",");
					var taille = "280x100";
					if ((url.indexOf('page=ingame&component=overview',0))>=0)
					{
						if(options.generale.mine)
						{
							var labels_url = text.Mines+"|"+text.Other_structure+"|"+text.Technology+"|"+text.Fleet+"|"+text.Defense;
						}
						if(options.generale.BatTotal)
						{
							var labels_url = text.Structure+"|"+text.Technology+"|"+text.Fleet+"|"+text.Defense;
						}
					}
					else if((url.indexOf('page=ingame&component=research',0))>=0)
					{
						var labels_url = text.inutile+" "+pourcent(pointsInutile,pointRecherche)+"|"+text.utile+" "+pourcent(pointRecherche-pointsInutile,pointRecherche);
					}

					else if((url.indexOf('page=ingame&component=movement',0))>=0)
					{
						var labels_url = text.aQuai+"|"+text.en_vol;
					}
					else if (/page=ingame&component=supplies/.test(url))
					{
						var labels_url = text.tag.m+"|"+text.tag.c+"|"+text.tag.d.replace('érium','');taille="180x100"
					}
					else err('error','Page incorrect pour le graphique ('+url+')');

					var google_url = "https://chart.googleapis.com/chart?cht=p3&chf=bg,s,efefef00&chs="+taille+"&chld=M&&chtt=&chl=" + labels_url + "&chco="+CouleurGraph+"&chd=t:" + data_url;

					var img = document.createElement("img");
					img.setAttribute("src",google_url);
					img.setAttribute("align","top");
					img.setAttribute("style", "margin-top:-30px");
					return img;
				}

				function calculDefLune(f)
				{
					var nb_zero = 11;
					niveau = '';
					listeNiveau ='';
					totNiv =0;
					for (i=0 ; i<DATA.planet.length ; i++)
					{
						if(DATA.planet[i].moon=='true')
						{
							nb_zero = 8 - parseInt((addTrait(DATA.planet[i].defense[nom_def[f]])+'').length);
							if (nb_zero <0) nb_zero=0;

							for (var k=0; k< nb_zero; k++)
							{niveau +='_';}

							niveau += '[color=#'+options.couleur.CoulBBcode+']'+addTrait(DATA.planet[i].defense[nom_def[f]])+'[/color]';

							if(nb_zero > 0 ) listeNiveau += '|'+niveau+'_';
							else listeNiveau += '|'+niveau;

							niveau='';
							totNiv += DATA.planet[i].defense[nom_def[f]]==""? 0 : parseInt(DATA.planet[i].defense[nom_def[f]]);
						}
					}
				}

				function addTrait(nombre)
				{
					if (nombre<0) {return '_____0';}
					nombre=parseInt(nombre);
					var str = nombre.toString(), n = str.length;
					if (n <4) {return nombre;}
					else
					{
						return  (((n % 3) ? str.substr(0, n % 3) + '_' : '') + str.substr(n % 3).match(new RegExp('[0-9]{3}', 'g')).join('_'));
					}
				}

				function calculNiv(f)
				{
					listeNiveau ='';
					totNiv =0;

					for (i=0 ; i<DATA.planet.length ; i++)
					{
						if(DATA.planet[i].moon=='false')
						{
							if(DATA.planet[i].building[nom_bat[f]] < 0)
								niveau='00';
							else if(DATA.planet[i].building[nom_bat[f]] < 10 )
								niveau='_'+DATA.planet[i].building[nom_bat[f]]+'';
							else
								niveau=''+DATA.planet[i].building[nom_bat[f]]+'';

							if(BatRes_const[i].split('|')[0] == nom_bat[f])
							{
								if(parseInt(BatRes_const[i].split('|')[1]) > start_time)
									niveau = '[color=#'+options.couleur.CoulBBcode2+']'+niveau+'[/color]';
							}
							if(BatSta_const[i].split('|')[0] == nom_bat[f])
							{
								if(parseInt(BatSta_const[i].split('|')[1]) > start_time)
									niveau = '[color=#'+options.couleur.CoulBBcode2+']'+niveau+'[/color]';
							}

							listeNiveau += '|_'+niveau+'_';
							totNiv +=DATA.planet[i].building[nom_bat[f]]=='' ? 0 : parseInt(DATA.planet[i].building[nom_bat[f]]);
						}
						//console.log("f "+f+" "+nom_bat[f]+" "+niveau);
					}
					totNiv= '[color=#'+options.couleur.CoulBBcode+']'+totNiv+'[/color]';
				}

				function calculFlotte(f)
				{
					var nbVaisseau =0;
					/*
						nbVaisseau+=DATA.fleet[nom_flotte[f]] == '' ? 0 : parseInt(DATA.fleet[nom_flotte[f]]);
						console.log(nom_flotte[f]);
					*/
					for (var i=0 ; i<DATA.planet.length ; i++)
					{
						nbVaisseau += DATA.planet[i].fleet[nom_flotte[f]]==""? 0 : parseInt(DATA.planet[i].fleet[nom_flotte[f]]);
					}
					return nbVaisseau;
				}

				function calculNivLune(f)
				{
					listeNiveau ='';
					totNiv =0;
					for (i=0 ; i<DATA.planet.length ; i++)
					{
						if(DATA.planet[i].moon=='true')
						{
							if(DATA.planet[i].building[nom_bat[f]]<0)
								niveau='00';
							else if(DATA.planet[i].building[nom_bat[f]]<10)
								niveau='_'+DATA.planet[i].building[nom_bat[f]];
							else
								niveau=DATA.planet[i].building[nom_bat[f]];

							if(BatRes_const[i].split('|')[0] == nom_bat[f])
							{
								if(parseInt(BatRes_const[i].split('|')[1]) > start_time)
									niveau = '[color=#'+options.couleur.CoulBBcode2+']'+niveau+'[/color]';
							}
							if(BatSta_const[i].split('|')[0] == nom_bat[f])
							{
								if(parseInt(BatSta_const[i].split('|')[1]) > start_time)
									niveau = '[color=#'+options.couleur.CoulBBcode2+']'+niveau+'[/color]';
							}

							listeNiveau += '|_'+niveau+'_';
							totNiv += DATA.planet[i].building[nom_bat[f]]=="" ? 0 : parseInt(DATA.planet[i].building[nom_bat[f]]);
						}
					}
					totNiv= '[color=#'+options.couleur.CoulBBcode+']'+totNiv+'[/color]';
				}

				function calculPlanete()
				{
					var nb_zero = 11;
					niveau = '';
					listeNiveau ='';
					totNivCase =0;
					totNivCaseMax = 0;
					listeNiveauUse='';
					listeNiveauMax='';
					listenom='';

					for (i=0 ; i<DATA.planet.length ; i++)
					{
						if(DATA.planet[i].moon=='false')
						{
							nb_zero = 4 - (DATA.planet[i].resource.tailleConst+'').length;
							if (nb_zero <0) nb_zero=0;

							for (var k=0; k< nb_zero; k++)
							{niveau +='_';}

							niveau += DATA.planet[i].resource.tailleConst;

							if(DATA.planet[i+1])
							{if(DATA.planet[i+1].moon=='true') niveau = '[color=#'+options.couleur.CoulBBcode+']'+niveau+'[/color]';}

							listeNiveauUse +=  '|'+niveau+'_' ;
							niveau='';
							totNivCase += parseInt(DATA.planet[i].resource.tailleConst);

							nb_zero = 4 - (DATA.planet[i].resource.taille+'').length;
							if (nb_zero <0) nb_zero=0;

							for (var k=0; k< nb_zero; k++)
							{niveau +='_';}

							niveau += DATA.planet[i].resource.taille;

							if(DATA.planet[i+1])
							{if(DATA.planet[i+1].moon=='true') niveau = '[color=#'+options.couleur.CoulBBcode+']'+niveau+'[/color]';}

							listeNiveauMax += '|'+niveau+'_';
							niveau='';
							totNivCaseMax += parseInt(DATA.planet[i].resource.taille);
						}
					}
				}

				function calculDef(f)
				{
					var nb_zero = 11;

					niveau = '';
					listeNiveau ='';
					totNiv =0;
					for (i=0 ; i<DATA.planet.length ; i++)
					{
						if(DATA.planet[i].moon=='false')
						{
							nb_zero = 8 - parseInt((addTrait(DATA.planet[i].defense[nom_def[f]])+'').length);
							if (nb_zero <0) nb_zero=0;

							for (var k=0; k< nb_zero; k++)
							{niveau +='_';}

							niveau += '[color=#'+options.couleur.CoulBBcode+']'+addTrait(DATA.planet[i].defense[nom_def[f]])+'[/color]';

							if(nb_zero > 0 ) listeNiveau += '|'+niveau+'_';
							else listeNiveau += '|'+niveau;
							niveau='';
							totNiv += DATA.planet[i].defense[nom_def[f]]==""? 0 : parseInt(DATA.planet[i].defense[nom_def[f]]);
						}
					}
				}

				function addPoints(nombre)
				{
					var signe = '';
					if (nombre<0)
					{
						nombre = Math.abs(nombre);
						signe = '-';
					}
					nombre=parseInt(nombre);
					var str = nombre.toString(), n = str.length;
					if (n <4) {return signe + nombre;}
					else
					{
						return  signe + (((n % 3) ? str.substr(0, n % 3) + '.' : '') + str.substr(n % 3).match(new RegExp('[0-9]{3}', 'g')).join('.'));
					}
				}

				function pourcent(nombre,ref)
				{
					if (ref == 0)
					{return 0;}
					else
					{
						var pourcent = parseInt(nombre/ref*100*Math.pow(10, digits))/Math.pow(10, digits);
						return pourcent;
					}
				}

				function arrondi(nombre)
				{
					if (Math.round(nombre) == 0) return 1 ;
					else return Math.round(nombre);
				}

				function oui_non_en_checked(oui_non)
				{
					if (oui_non == "true" || oui_non == true ) {return "checked";} else {return "unchecked";}
				}

				function decheck(check)
				{
					if (check+''== 'checked') return "unchecked";
					else return "checked";
				}

				function checkLang(lang)
				{
					if (lang+'' == options.generale.langue+'' ) {return 'checked="checked"'; } else {return "";}
				}

				function err(type, message)
				{
					setTimeout(function()
							   {
						throw new Error( message);
					}, 0);
				}

				function plus(nb)
				{
					if(nb<0) return addPoints(nb);
					else return '+'+addPoints(nb);
				}

				function prodMetalbase(mm , pos){

					var bpos = 1;
                    if(pos == 6 || pos == 10) bpos = 1.17;
                    if(pos == 7 || pos == 9)  bpos = 1.23;
                    if(pos == 8) bpos = 1.33;

                    return 30*(mm)*Math.pow(1.1, (mm))*speedUni*bpos;
				}

				function prodCristalbase(mc , pos)
				{
					//var bpos = ( pos > 3 ? 1 : (1.15 + 0.075*(3-pos)));
                    var bpos = ( pos > 3 ? 1 : (1.2 + 0.1*(3-pos)));
					return 20*(mc)*Math.pow(1.1, (mc))*speedUni*bpos;
				}

				function prodDeutbase(md, temperature)
				{
					return 10 * (md) * (Math.pow(1.1,(md)) * (1.44 - (temperature * 0.004) ))*speedUni;
				}

				function prodMetal(mm, lvlplasma, positionpm, booster, maxPercentageCrawler, geo)
				{
					var base = prodMetalbase(mm, positionpm);
                    //console.log(booster+"--"+(30+Math.round(base*geo)  +  Math.round(base*lvlplasma/100) + Math.round(base*booster/100) + Math.round(base*maxPercentageCrawler/100) + Math.round(base*classBonusProd)));

                    return Math.round(base*geo)  +  Math.round(base*lvlplasma/100) + Math.round(base*booster/100) + Math.round(base*maxPercentageCrawler/100) + Math.round(base*classBonusProd);
				}

				function prodCristal(mc, lvlplasma, positionpc, booster, maxPercentageCrawler, geo)
				{
                    var base = prodCristalbase(mc , positionpc);
                    //console.log("positionpc "+positionpc);
                    return Math.round(base*geo)  + Math.round(base*lvlplasma*0.66/100) + Math.round(base*booster/100) + Math.round(base*maxPercentageCrawler/100) + Math.round(base*classBonusProd);
				}

				function prodDeut(md, lvlplasma, temperature, booster, maxPercentageCrawler, geo)
				{
					var base = prodDeutbase(md, temperature);
					//console.log(Math.round(base*geo) +  Math.round(base*lvlplasma*0.33/100) + Math.round(base*booster/100) + Math.round(base*maxPercentageCrawler/100) + Math.round(base*classBonusProd));
                    return Math.round(base*geo) +  Math.round(base*lvlplasma*0.33/100) + Math.round(base*booster/100) + Math.round(base*maxPercentageCrawler/100) + Math.round(base*classBonusProd);
				}

				function bonusMaxPlanete(mm, mc, md)
				{
					var BonusMax = (parseInt(mm) + parseInt(mc) + parseInt(md)) * y_value * 0.02 * x_value;
                    console.log("bonusMaxPlanete "+Geolog);
                    if(Geolog > 1)
                    {
                        console.log("bonusMaxPlanete > 1");
                        BonusMax = BonusMax * 1.1;
                    }
					return Math.min(BonusMax, 50);
				}

				function percentageCrawler(mm, mc, md, crawler)
				{
					var percentageMax = bonusMaxPlanete(mm, mc, md);
					var percentageProdSupp = crawler * crawler_value;
					var resultat = percentageProdSupp >= percentageMax ? percentageMax : percentageProdSupp
					return resultat;
				}

				function afficheMaxCrawler(bonusMax, position)
				{
					var crawlerMax = bonusMax/crawler_value;
					var sp1 = document.createElement("div");
					sp1.setAttribute("id", "crawler");

					sp1.setAttribute("style", "color:white; text-align:left; position:relative; font-size:12px; padding-top: 40px;padding-left:5px");

					var sp2 = document.getElementsByClassName('amount')[position];

					parentDiv = sp2.parentNode;
					parentDiv.insertBefore(sp1, sp2.nextSibling);
					var tableau = document.createElement("div");
					tableau.innerHTML = "<div style='width:80px;background-color : rgba(0, 0, 0, 0.6);'>Max : "+Math.floor(crawlerMax)+"</div>";

					document.getElementById("crawler").appendChild(tableau);
				}
			}
			var version_ogame_ok = false;
			var version_table  = document.getElementsByName('ogame-version');

			if(version_table.length > 0)
			{
				var version = version_table[0].content;
				version_ogame_ok = version.startsWith('7') || version.startsWith('8') || version.startsWith('9');
			}

		if(true && (version_ogame_ok /*|| url.indexOf ('ajax&component=technologytree&ajax=1&technologyId=1&tab=3')*/))
		{
			if (((url.indexOf('vulca',0))>=0 && url.indexOf('news.php')== -1)) // Site de signature
			{
				if(/signature/.test(url))
				{
					GM_setValue(nomScript+ 'couleurSign' +trim(document.getElementById("univers").innerHTML) , document.getElementById("couleurFond").innerHTML+'-'+ document.getElementById("couleurText").innerHTML);
				}

			}
			/*
			else if (url.indexOf ('ajax&component=technologytree&ajax=1&technologyId=1&tab=3') > -1)
			{
				//var nom = document.getElementsByTagName ('a');
				console.log("debut techtree");
				var nom = document.getElementsByClassName ('technology');
				var nom_vaisseau = '';
				var nom_def = '';

				for (var i = 0; i < 14; i++)
				{
					nom_vaisseau += trim (nom [nom.length - 48 + i * 2].text) + ';';
				}

				for (var i = 0; i <  10; i++)
				{
					nom_def      += trim (nom [nom.length - 20 + i * 2].text) + ';';
				}

				var serveur_split = url.split('/')[2].split('.');
				var domain_   = '.'+ serveur_split[1]+"."+serveur_split[2];

				if( serveur_split.length == 4 )
				{
					domain_ += "."+serveur_split[3];
				}
				GM_setValue (nomScript +domain_, nom_vaisseau+'|'+nom_def+'|');
			}
			*/
			else if (document.getElementById('playerName') || url.indexOf('page=combatreport')>=0 || (url.indexOf('page=showmessage'))>=0) // Ogame Nouvelle version
			{

			// *********************************************************************************************************************************************************************
			// ************************************************************** Recherche de l'ID PM   **********************************************************************************
			// *********************************************************************************************************************************************************************

			if (document.getElementById('playerName'))
			{
				//Détermine si on est sur une lune
				var IsMoon   = document.getElementsByName('ogame-planet-type')[0].content == 'moon' ;
				var pseudo   = document.getElementsByName('ogame-player-name')[0].content;
				var IdJoueur = document.getElementsByName('ogame-player-id')[0].content;
				var serveur  = document.getElementsByName('ogame-universe')[0].content;
				var speedUni = document.getElementsByName('ogame-universe-speed')[0].content;
                var coordinates = document.getElementsByName('ogame-planet-coordinates')[0].content;
				var numUni   = serveur.split('-')[0];

				var characterClassName = document.getElementsByClassName('characterclass')[0].className.split(' ')[3];

				var classBonusProd = characterClassName == "miner" ? 25/100 : 0;
				var crawler_value = characterClassName == "miner" ? 0.03 : 0.02;
				var x_value = characterClassName == "miner" ? 1.5 : 1;
				var y_value = 8;

				var serveur_split = serveur.split('.');
				var domain   = '.'+ serveur_split[1]+"."+serveur_split[2];

                var positionplanete = coordinates.split('2');

				if( serveur_split.length == 4 )//à supprimer plus tard
				{
					domain += "."+serveur_split[3];
				}

				var Geolog = "1";
				if( document.getElementById ("officers").className.indexOf("all") >= 0 ) // si full officiers
				{
					Geolog = "1.12";
				}
				else
				{
                    if ( document.getElementById ("officers").innerHTML.indexOf("on  geologist") >= 0 ) // Si géologue
					{
						Geolog = "1.1";
					}
				}
				var commandant = document.getElementById ("officers").getElementsByTagName ("a") [0].className.indexOf (" on") >= 0;

				GM_setValue(nomScript+"Geolog"+coordPM+serveur,Geolog);
				GM_setValue(nomScript+"classBonusProd"+coordPM+serveur,classBonusProd);

				var numeroplanete = 0;
				var nbLune = 0;
				var th_style="height:20px; font-size: 12px; font-weight:normal; color: white; border:1px solid black;";

				var coordPM = document.getElementsByClassName('planet-koords')[0].innerHTML ;
				var idPlanete = GM_getValue(nomScript+'idPlanet'+IdJoueur+serveur , GM_getValue(nomScript+'idPlanet'+pseudo+serveur , '10;')).split(';');

				var listeId = '';
				var nbPlanet=1;

				var planets = document.getElementById("rechts").getElementsByClassName("smallplanet");
				var Lune = new Array();

				//if ( planets.length > 1 )
				{
					numeroplanete=-1;
					nbPlanet = 0;
					var testlabelPlanet = 'planetlink active';
					var testlabelLune = 'moonlink active';

					for ( var i=0; i<planets.length ; i++)
					{
						idPlanete[nbPlanet] = planets[i].id.replace("planet-","");
						if( planets[i].innerHTML.split('class="planetPic')[0].indexOf(testlabelPlanet) > -1 || planets.length==1 ) // Si planete active
						{
							//console.log("planet "+idPlanete[nbPlanet]);
							numeroplanete = nbPlanet;
							if (IsMoon)
							{
								numeroplanete ++;
							}
						}
						listeId+= idPlanete[nbPlanet]+';';
						if (planets[i].innerHTML.indexOf('class="icon-moon"') > 0)
						{
							nbPlanet++;
							Lune[nbPlanet] = true;
							nbLune++;

							idPlanete[nbPlanet] = planets[i].innerHTML.split('moonlink')[1].split('&amp;cp=')[1].split('&quot;>')[0].replace( /[^0-9-]/g, "");
							if(numeroplanete == -1 && planets[i].innerHTML.indexOf(testlabelLune) > -1)
							{
								numeroplanete = nbPlanet;
							}
							listeId+= idPlanete[nbPlanet]+';';
						}
						else
						{
							Lune[nbPlanet] = false;
						}

						nbPlanet++;
					}

					var idPlaneteTrie = listeId.slice(0, listeId.length -1).split(';').sort();
						idPlanete = listeId.slice(0, listeId.length -1).split(';');

					var f=0;
					for ( var i=0; i< idPlaneteTrie.length ; i++)
					{
						if (!Lune[i])
						{
							if (idPlaneteTrie[0] == idPlanete[i])
								{ coordPM = document.getElementsByClassName('planet-koords')[f].innerHTML;}
							f++;
						}
					}
				}

				var CoordPM = coordPM;
				coordPM = coordPM.replace(':','0').replace(':','0').replace('[','').replace(']','');

				GM_setValue(nomScript+'Pseudo'+serveur , pseudo+'#'+coordPM+'#'+CoordPM);

				var DefPla = GM_getValue(nomScript+"DefPlanete"+coordPM+serveur,'||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;').split(';');
				var BatRes = GM_getValue(nomScript+"BatRes"+coordPM+serveur,'||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;').split(';');
				var BatSta = GM_getValue(nomScript+"BatSta"+coordPM+serveur,'|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;').split(';');
				var Techno = GM_getValue(nomScript+"nivTechno"+coordPM+serveur, '-1;-1;-1;-1;-1;-1;-1;-1;-1;-1;-1;-1;-1;-1;-1;-1;-1;-1' ).split(';');
				var flotte = GM_getValue(nomScript+"flotte"+coordPM+serveur,'0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;').split(';');
				var boost  = GM_getValue(nomScript+"boost"+coordPM+serveur,'0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;').split(';');

				var BatSta_const = GM_getValue(nomScript+"BatSta_const"+coordPM+serveur,'|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|').split(';');
				var BatRes_const = GM_getValue(nomScript+"BatRes_const"+coordPM+serveur,'|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|').split(';');
				var Res_const = GM_getValue(nomScript+"Res_const"+coordPM+serveur,'|');
				var Def_const = GM_getValue(nomScript+"Def_const"+coordPM+serveur,'|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|').split(';');

				var minPla= Math.min(DefPla.length,BatRes.length,BatSta.length,flotte.length,boost.length,BatSta_const.length,BatRes_const.length,Def_const.length);

				while (nbPlanet>= minPla-1)
				{

					GM_setValue(nomScript+"DefPlanete"+coordPM+serveur,DefPla.join(';')+'||||||||||||||;||||||||||||||;||||||||||||||;');
					GM_setValue(nomScript+"BatRes"+coordPM+serveur,BatRes.join(';')+'||||||||||||||;||||||||||||||;||||||||||||||;');
					GM_setValue(nomScript+"BatSta"+coordPM+serveur,BatSta.join(';')+'||||||||||||||;||||||||||||||;||||||||||||||;');
					GM_setValue(nomScript+"flotte"+coordPM+serveur,flotte.join(';')+'0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;');
					GM_setValue(nomScript+"boost"+coordPM+serveur,boost.join(';')+'0|0|0;0|0|0;0|0|0;');

					GM_setValue(nomScript+"BatSta_const"+coordPM+serveur,BatSta_const.join(';')+';|;|;|');
					GM_setValue(nomScript+"BatRes_const"+coordPM+serveur,BatRes_const.join(';')+';|;|;|');
					GM_setValue(nomScript+"Def_const"+coordPM+serveur,Def_const.join(';')+';|;|;|');

					DefPla = GM_getValue(nomScript+"DefPlanete"+coordPM+serveur,'||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;').split(';');
					BatRes = GM_getValue(nomScript+"BatRes"+coordPM+serveur,'||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;').split(';');
					BatSta = GM_getValue(nomScript+"BatSta"+coordPM+serveur,'|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;').split(';');
					flotte = GM_getValue(nomScript+"flotte"+coordPM+serveur,'0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;').split(';');
					boost  = GM_getValue(nomScript+"boost"+coordPM+serveur,'0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;').split(';');

					BatSta_const = GM_getValue(nomScript+"BatSta_const"+coordPM+serveur,'|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|').split(';');
					BatRes_const = GM_getValue(nomScript+"BatRes_const"+coordPM+serveur,'|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|').split(';');
					Def_const = GM_getValue(nomScript+"Def_const"+coordPM+serveur,'|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|').split(';');

					minPla= Math.min(DefPla.length,BatRes.length,BatSta.length,flotte.length,boost.length,BatSta_const.length,BatRes_const.length,Def_const.length);
				}


				var ancienID = GM_getValue(nomScript+'idPlanet'+IdJoueur+serveur , GM_getValue(nomScript+'idPlanet'+pseudo+serveur , '10;')).split(';');
				if(! /[^0-9;]/.test(listeId) && ! /[^0-9;]/.test(idPlanete.join(';')) &&
				   ! /[^0-9;]/.test(ancienID.join(';'))                               &&
				   nbPlanet > 1                                                       &&
				   (
					url.indexOf('page=ingame&component=defenses') != -1 ||
					url.indexOf('page=ingame&component=fleetdispatch') != -1 ||
					url.indexOf('page=ingame&component=shipyard') != -1 ||
					url.indexOf('page=ingame&component=facilities') != -1 ||
					url.indexOf('page=ingame&component=supplies') != -1 ||
					url.indexOf('page=ingame&component=overview') != -1)
				  ) // Evite bug disparition des planetes au fleet2
				{

					if(idPlanete.join(';')+';' != ancienID.join(';') && idPlanete.join(';').length > 10 && ancienID.join(';').length > 10)
					{
						var copieDefPla = new Array();
						var copieBatRes = new Array();
						var copieBatSta = new Array();
						var copieConsDefPla = new Array();
						var copieConsBatRes = new Array();
						var copieConsBatSta = new Array();
						var copieBoost = new Array();

						for (var i = 0; i<DefPla.length ; i++)
						{
							copieDefPla[i] = DefPla[i];
							copieBatRes[i] = BatRes[i];
							copieBatSta[i] = BatSta[i];
							copieConsBatRes[i] = BatRes_const[i];
							copieConsBatSta[i] = BatSta_const[i];
							copieBoost[i] =  boost[i];
						}

						for (var i = 0; i<idPlanete.length ; i++)
						{

							if (idPlanete[i] != ancienID[i])
							{
								var findId = false;
								for(var j = 0 ; j < ancienID.length ; j++)
								{
									if (idPlanete[i] == ancienID[j])
									{
										DefPla[i] = copieDefPla[j];
										BatRes[i] = copieBatRes[j];
										BatSta[i] = copieBatSta[j];

										BatRes_const[i] = copieConsBatRes[j];
										BatSta_const[i] = copieConsBatSta[j];

										boost[i]  = copieBoost[i];
										findId =true;
										break;
									}
								}

								if(! findId) // Nouvelle id n'etait pas la avant
								{
								//if(confirm('Planet id '+idPlanete[i]+' (planet n '+i+(' not found ...) :\n')+idPlanete.join(';')+'(id planet)\n'+ancienID.join(';')+'(id stored)\n\n Delete data about this planet ?'))
									{
									//alert('delete id '+idPlanete[i]);
									DefPla[i] = '|||||||||||||';
									BatRes[i] = '|||||||||||||';
									BatSta[i] = '|||||||||||||';

									BatRes_const[i] = '|';
									BatSta_const[i] = '|';
									boost[i] = '0|0|0';

									//Def_const[i]= '|';

									//GM_setValue(nomScript+"Def_const"+coordPM+serveur,Def_const.join(';'));
									}
								}

							}
						}
						GM_setValue(nomScript+"DefPlanete"+coordPM+serveur,DefPla.join(';'));
						GM_setValue(nomScript+"BatRes"+coordPM+serveur,BatRes.join(';'));
						GM_setValue(nomScript+"BatSta"+coordPM+serveur,BatSta.join(';'));
						GM_setValue(nomScript+"boost"+coordPM+serveur,boost.join(';'));
						GM_setValue(nomScript+"BatSta_const"+coordPM+serveur,BatRes_const.join(';'));
						GM_setValue(nomScript+"BatRes_const"+coordPM+serveur,BatSta_const.join(';'));

					}

					if(! /[^0-9;]/.test(listeId))// Les id trouvé ressemble a des id
					GM_setValue(nomScript+'idPlanet'+IdJoueur+serveur , listeId);
				}
			}
			else
			{
				var pseudo = GM_getValue(nomScript+'Pseudo'+serveur , "pseudo#coordPM#CoordPM").split('#')[0];
				var coordPM = GM_getValue(nomScript+'Pseudo'+serveur , "pseudo#coordPM#CoordPM").split('#')[1];
			}
			 // *********************************************************************************************************************************************************************
			 // ************************************************************ Options  ************************************************************************************************
			// *********************************************************************************************************************************************************************

			{
			var OptionSauvegarde = GM_getValue(nomScript+"options"+coordPM+serveur,'00F00F,0000CC,FF0000,FFFF00,6F006F'+';'+false+';'+true+';'+true+';'+true+';'+true+';'+true+';'+false+';'+false+';'+true+';'+true+';'+true+';'+true+';'+true+';'+true+';'+false+';'+true+';'+true+';'+true+';'+false+';'+true+';'+true+';'+true+';'+false+';'+false+';'+false+';'+true+';'+true+';'+false+';'+true+';'+true+';'+true+';'+true+';'+true+';'+true+';'+false+';;;;;');
			var option = OptionSauvegarde.split(/;/);

			// TEMPORAIRE §§§
			if(option[35] == '')
				{option[35]=false; GM_setValue(nomScript+"options"+coordPM+serveur, option.join(';'));}

			for (i=1; i<option.length ; i++)
			{
				if (option[i]== 'true' || option[i]== true) option[i] = true;
				else option[i] = false;
			}

			var CouleurGraph = option[0];

			var listeCouleur = option[0].split(/,/);

			var couleurFTurl = (GM_getValue(nomScript+'couleurSign'+serveur+coordPM , '0;0;0;-255;255;255|url|')+'|url|').split('|url|');

			var couleurFT = couleurFTurl[0].split('-')

			var couleurT =  couleurFT[1].split(';');
			var couleurF =  couleurFT[0].split(';');

			var optionCouleur = GM_getValue(nomScript+'OptionCouleur'+coordPM+serveur,'FF0000;00FF00;5050FF;ff9933;;;;;').split(';');

			function getLang()
			{
				// Language detection from Ogame Fleet Tools
				  var url = document.location.href;

				  var server = url.match(/(-)([^\\\/]+[\\\/])/g);
				  var lang = 'en';
				  if (server) server = server[0].toUpperCase();

				  if      ( server.indexOf('AR.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('AR.OGAME.ORG/') > -1 || server.indexOf('OGAME.COM.AR/') > -1)  lang = 'AR'; // Argentina
				  else if ( server.indexOf('BA.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('BA.OGAME.ORG/') > -1)  lang = 'BA'; // Balkan countries
				  else if ( server.indexOf('BG.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('BG.OGAME.ORG/') > -1)  lang = 'BG'; // Bulgaria
				  else if ( server.indexOf('BR.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.COM.BR/') > -1)  lang = 'PT'; // Brasil
				  else if ( server.indexOf('CN.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('CN.OGAME.ORG/') > -1)  lang = 'CN'; // China
				  else if ( server.indexOf('CZ.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.CZ/') > -1)  	lang = 'CZ'; // Czech Republic
				  else if ( server.indexOf('DE.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.DE/') > -1)  	lang = 'DE'; // Germany
				  else if ( server.indexOf('DK.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.DK/') > -1)  	lang = 'DK'; // Denmark
				  else if ( server.indexOf('ES.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.COM.ES/') > -1)  lang = 'ES'; // Spain
				  else if ( server.indexOf('FI.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('FI.OGAME.ORG/') > -1 || server.indexOf('OGAME.COM.FI/') > -1)  lang = 'FI'; // Finnland
				  else if ( server.indexOf('FR.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.FR/') > -1)  	lang = 'FR'; // France
				  else if ( server.indexOf('GR.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.GR/') > -1)  	lang = 'GR'; // Greece
				  else if ( server.indexOf('HR.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.COM.HR/') > -1 || server.indexOf('HR.OGAME./') > -1 )  lang = 'HR'; // Croatia
				  else if ( server.indexOf('HU.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.HU/') > -1)  	lang = 'HU'; // Hungary
				  else if ( server.indexOf('IT.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.IT/') > -1)  	lang = 'IT'; // Italy
				  else if ( server.indexOf('JP.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.JP/') > -1)  	lang = 'JP'; // Japan
				  else if ( server.indexOf('KR.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME2.CO.KR/') > -1)  lang = 'KR'; // Korea
				  else if ( server.indexOf('LT.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.LT/') > -1)  	lang = 'LT'; // Lithuania
				  else if ( server.indexOf('LV.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.LV/') > -1)  	lang = 'LV'; // Latvia
				  else if ( server.indexOf('MX.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('MX.OGAME.ORG/') > -1)  lang = 'MX'; // Mexico
				  else if ( server.indexOf('NL.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.NL/') > -1)  	lang = 'NL'; // Netherlands
				  else if ( server.indexOf('NO.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.NO/') > -1)  	lang = 'NO'; // Norway
				  else if ( server.indexOf('PL.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.PL/') > -1)  	lang = 'PL'; // Poland
				  else if ( server.indexOf('PT.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.COM.PT/') > -1)  lang = 'PT'; // Portugal
				  else if ( server.indexOf('RO.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.RO/') > -1)  	lang = 'RO'; // Romania
				  else if ( server.indexOf('RU.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.RU/') > -1)  	lang = 'RU'; // Russia
				  else if ( server.indexOf('SE.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.SE/') > -1)  	lang = 'SE'; // Sweden
				  else if ( server.indexOf('SI.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.SI/') > -1)  	lang = 'SI'; // Slovenia
				  else if ( server.indexOf('SK.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.SK/') > -1) 		lang = 'SK'; // Slovakia
				  else if ( server.indexOf('TR.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.COM.TR/') > -1 || server.indexOf('TR.OGAME.ORG/') > -1)  lang = 'TR'; // Turkey
				  else if ( server.indexOf('TW.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.TW/') > -1)  	lang = 'TW'; // Taiwan
				  else if ( server.indexOf('US.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.US/') > -1 ) 	lang = 'US'; // USA
				  else if ( server.indexOf('ORG.OGAME.GAMEFORGE.COM')> -1 || server.indexOf('OGAME.ORG/') > -1) 	lang = 'ORG'; // UK
				  else if ( server.indexOf('RS.OGAME.GAMEFORGE.COM') > -1 || server.indexOf('OGAME.RS/') > -1) 		lang = 'RS'; // Serbia

				  if (lang == 'US' || lang == 'ORG') lang = 'EN';
				  else if (lang == 'AR' || lang == 'MX') lang = 'ES';

				return lang.toLowerCase();
			}

			var options =
			{
				generale:
				{
					BatTotal : option[1],
					indestructible : option[2],
					techno : option[3],
					flottes : option[4],
					Def : option[5],
					VaisseauxVol  : option[6],
					pointLune : option[7],
					sauterLignePourPourcentageFlotteVol : option[8],
					progression : option[9],
					couleurPoint :option[10],
					ProgJours : option[11],
					ProdJours :option[12],
					Techno_utile :option[13],
					progOW:option[24],

					Point_planete : option[14],
					Masquer : option[15],
					Signa : option[16],
					SignaRc : option[26],
					langue : GM_getValue(nomScript+'Langue_text'+coordPM+serveur,getLang()),
					bbcode_center : option[17],
					bbcode_pixel : option[18],
					bbcode_SMF : option[19],
					saveFleet :  option[20],
					rank: option[21],
					Alternative: option[22],
					transparant: option[23],
					baliseCenterHTML : option[25],
					constructing : option[27],
					AffDetailPla: option[28],
					graphProd : option[29] ,
					affCout : option[30],
					affExpe : option[31],
					affConvert : option[32],
					upSite : option[33],
					posTable : option[34],
					useBoost : option[35]
				},
				couleur:
				{
					graphA: listeCouleur[0], graphB: listeCouleur[1], graphC: listeCouleur[2], graphD: listeCouleur[3], graphE: listeCouleur[4],
					progPos: optionCouleur[1], progNeg:optionCouleur[0],

					SigntxtR : couleurT[0].replace(' ', '') ,
					SigntxtV : couleurT[1].replace(' ', '') ,
					SigntxtB : couleurT[2].replace(' ', '') ,
					SignfondR :couleurF[0].replace(' ',''),
					SignfondV :couleurF[1].replace(' ',''),
					SignfondB :couleurF[2].replace(' ',''),
					url : couleurFTurl[1].replace(' ',''),
					CoulBBcode : optionCouleur[2],
					CoulBBcode2 : optionCouleur[3]
				}
			};

			if(options.generale.upSite) GM_deleteValue('upSite'+serveur+coordPM);
			else GM_setValue('upSite'+serveur+coordPM, 'false');

			var accStartDate = GM_getValue(nomScript+'speed'+serveur+coordPM , '1;0;0;0;1;').split(';');
			var accStartTime = (new Date( parseInt(accStartDate[3]), parseInt(accStartDate[2])-1, parseInt(accStartDate[1]),0, 0,0, 0)).getTime();

			var taux = GM_getValue(nomScript+'taux'+serveur+coordPM , '2;1;1;;').split(';');
			var empireoptions = GM_getValue(nomScript+'empire'+serveur+coordPM , 'true;true;;;').split(';');
			var digits = parseInt(accStartDate[4]);

			if(isNaN(accStartTime)) accStartTime = 0;

			if ( isNaN(digits)) digits = 1;
			/*
			if(document.getElementsByName('ogame-universe-speed')[0])
				var speedUni = parseInt(document.getElementsByName('ogame-universe-speed')[0].content);
			else
				var speedUni =parseInt(accStartDate[0])
			*/
			GM_setValue(nomScript+'speed'+serveur+coordPM , accStartDate.join(';'))
			}

			// *****************************************************************************************************************************************************************
			// *********************************************************** Traduction ******************************************************************************************
			// *****************************************************************************************************************************************************************

			var text = new Array();

			text =
			{
				ICoption : 'InfoCompte Options',
				Save:'Save' ,
				Total:'Total',
				Lune:'Moon',
				Mines:'Mines',
				Other_structure:'Other Structures',
				Structure:'Structures',
				Ressource:'Resources',
				Facilities:'Facilities',
				Technology:'Research',
				Technologies : 'Technologies',
				Fleet:'Armada',
				Defense:'Defences',
				Progression:'Progress',
				Moyenne:'Average',
				Production:'Production',
				ProductionConstruction:'  Production with finished building, plasma technology',
				ProductionBrute:'  Production without geologue and booster',
				Indestructible:'Indestructible',
				Depuis:'since',
				Points:'Points',
				soit:'representing',
				BBcode_debut:"Empire Composition:",
				BBcode_debut2:"Total Points:",
				BBcode_mine:"Points in Mines:",
				BBcode_bat:"Points in Other Structures:",
				BBcode_batT:"Points in Total Structures:",
				BBcode_fin1:"Points in Technologies:",
				Bcode_fin2:"Points in Fleet:",
				BBcode_fin3:"Points in Defences:",
				BBcode_fin4: "Your account has ",
				BBcode_fin5 : "Indestructible Points",
				BBcode_fin6 : "Average Progress: ",
				Point_day : "Daily Points Gained",
				Units : "Units",
				sur_lune:'on moon',
				en_vol:'Ships Flying',
				aQuai: 'Ships Docked',
				vaisseaux : 'ships',
				Avertissement :'Are you sure you want to restart your progress count?',
				restart : 'Click to restart your progress count',
				AffBBcodeDetail : 'Click to display the detailed BBcode',
				AffBBcodeSimple : 'Click to display the not detailed BBcode',
				AffBBcodeSansBBcode : 'Without BBcode',
				valeurdefaut : 'Default Values',
				Manque:'You need to go through these pages:',
				empireMaj: 'Use empire view to update quickly',
				pas_a_jours :'There is an update available: ',
				install : 'Click here to install it',
				utile : 'useful',
				inutile :'useless',
				BBcode_fin42 :"Your useless technology representing ",
				creeSign:'Create a signature with InfoCompte',
				signature : 'signature',
				manqueVG : 'Overview of another planet',
				info_new_version: 'complete changelog link',
				addTrad :'add/complete/modify a translation',
				rank: 'rank',
				rank_indest: 'that is your rank if you lose all fleet and defences and moons',
				degats_infliges : 'total damage inflicted by',
				luneCree: 'moons given',
				constructing:'points which are building',
				affDetailPla : 'click to display the planet points in detail',
				affRentaPla : 'click to display the following possibilities for upgrading your mines',
				descriptAlti : 'this is a website to participate in OGame records, to see your personal statistics, the evolution of your account and your alliance ...',
				sendAlti : 'Send your account data to Alternative',
				probFlotteAlti : 'There is a problem with your ships, \n\n Go though each shipyard page and a fleet page (fleet movement if you can) and/or defence pages to solve the problem \n(if it does nothing, try going though building/technology pages)',
				adresse : 'Which email do you want to use for Alternative website?',
				rcSave :'Save it to convert it with another CR \n(CR/Harvest reports saved are erased if you get out of the message page)',
				raid : 'raids',
				rc : 'harvest reports',
				renta : 'Payback ',
				textrenta : 'Tip: The payback time will describe the time after the further production has recouped the costs of the mine. It`\'s recommended to develop mines with the minimum amortization period first. ',
				ordre_mine : 'Sequence of mines/techno to build',
				years : "years",
				months : "months",
				days : "days",
				exportm:
					{
					planete : 'Planet',
					niveau : 'Level of Mines player',
					le : 'at',
					temperature : 'temperature of',
					pointsminesm : 'Points in the metal mines',
					pointsminesc : 'Points in the crystal mines',
					pointsminesd : 'Points in the deuterium mines',
					pointsmines : 'Points in the mines',
					parheure : 'Per hour',
					parjour : 'Per day',
					parsem : 'Per week',
					exportmine : 'Export your mines'
					},
				options:
					{
						creeSign :'Display link to use SR and CR',
						creeSignRc : 'CR',
						Graphiccolours :'Graphic colours',
						BatTotal :'Show total structure points',
						indestructible :'Show indestructible points',
						techno :'Show technology points',
						flottes :'Show fleet points',
						Def :'Show defence points',
						VaisseauxVol :'Show percentage of fleet in movement',
						pointLune :'Show moon points',
						sauterLignePourPourcentageFlotteVol :'Show all in the same line (for moving fleet and moon points)',
						progression :'Show progress',
						PlusieurSurMemeUni :'Fill in if there is more than one player on the same computer and universe',
						couleurPoint :'Show in colours in function of the progress',
						ProgJours :'Show progress per day',
						ProdJours :'Show points earned from mines',
						Techno_utile :"Show technologies in detail",
						Point_planete :"Show invested points on the planet",
						Masquer :"Hide the table of InfoCompte by default",
						progNeg: "Negative progression\'s colour",
						progPos : "Positive progression\'s colour",
						Signtxt:'Signature colour (text)',
						Signfond:'Signature colour (Background)',
						langue : 'Which language do you want to use?',
						CoulBBcode: 'Colour of BBcode title',
						BBcode_center : 'How to centre the text with BBcode?',
						BBcode_size : 'Maximal size for BBcode (px / %)',
						enregFlotte: 'Save fleet',
						rank: 'Display ranks',
						alternative: 'Display the link to send information to <a href="http://www.projet-alternative.fr">Alternative website</a>',
						sansDesing :'Disable the script design',
						design:'Design',
						Display: 'Display',
						speed: 'Speed of the universe',
						constructing:'Display points which are building',
						detailPointsPla : 'Display planet points in detail automatically',
						graphProd : 'Display the production graphic',
						timeStart : 'Date of your account creation, only fill if you want your progression since this date (day/month/year)',
						nbDigits : 'Number of digits after the comma for percentages',
						affCout : 'Display the building\'s and research\'s costs and construction time',
						affExpe : 'Display the link to send your expeditions on Alternative',
						affConvert : 'Display the link to convert CR and espi report',
						tauxCommerce : 'Ratio  >= 1  <= 5',
						texthangar : 'Time remaining before full storage for all planets',
						textrentaempire : 'Display next mines to develop on empire view',
						upSite : 'Auto update your mine on Oprojekt',
						posTable : 'Put infocompte table, at the bottom',
						useBoost : 'Consider boosters in profitability calculations',
						progression_data : 'Save those data to restore progression, later'
					},
					tag:
					{
						mmet: 'Metal Mine',mcri: 'Crystal Mine',mdet: 'Deuterium Synthesizer',ces: 'Solar Plant',cef: 'Fusion Reactor',rob: 'Robotics Factory',nan: 'Nanite Factory',
						cspa: 'Shipyard',hmet: 'Metal Storage',hcri: 'Crystal Storage',hdet: 'Deuterium Tank', lab: 'Research Lab',ter: 'Terraformer',depo: 'Alliance Depot',silo: 'Missile Silo',
						base: 'Lunar Base',phal: 'Sensor Phalanx',port: 'Jump Gate',dock: 'Space Dock',

						espi: 'Espionage Technology',ordi: 'Computer Technology',arme: 'Weapons Technology',bouc: 'Shielding Technology',prot: 'Armour Technology',ener: 'Energy Technology',hype: 'Hyperspace Technology',comb: 'Combustion Drive',impu: 'Impulse Drive',phyp: 'Hyperspace Drive',lase: 'Laser Technology',ions: 'Ion Technology',plas: 'Plasma Technology',rese: 'Intergalactic Research Network',expe: 'Astrophysics',grav: 'Graviton Technology',
						pt: 'Small Cargo',gt: 'Large Cargo',cle: 'Light Fighter',clo: 'Heavy Fighter',crois: 'Cruiser',vb: 'Battleship',vc: 'Colony Ship',rec: 'Recycler',
						esp: 'Espionage Probe',bomb: 'Bomber',ss: 'Solar Satellite',dest: 'Destroyer',edlm: 'Deathstar',traq: 'Battlecruiser', reaper:'Reaper', pathfinder:'Pathfinder', crawler:'Crawler',
						lm: 'Rocket Launcher',lle: 'Light Laser',llo: 'Heavy Laser',gauss: 'Gauss Cannon',ion: 'Ion Cannon',pla: 'Plasma Turret',pb: 'Small Shield Dome',gb: 'Large Shield Dome',mic: 'Anti-Ballistic Missiles',mip: 'Interplanetary Missiles',
						m: 'Metal',
						c: 'Crystal',
						d: 'Deuterium',
						rc: new Array('S.Cargo', 'L.Cargo', 'L.Fighter', 'H.Fighter', 'Cruiser', 'Battleship', 'Col.Ship','Recy','Esp.Probe','Bomb','Dest','Deathstar','Battlecr','Sol. Sat', 'R.Launcher', 'L.Laser', 'H.Laser', 'Gauss', 'Ion C.', 'Plasma', 'S.Dome', 'L.Dome', 'enormous amounts of free metal and crystal draw together' )

					},
					bbcode:
					{
						Scientifique:'Scientific',
						planet:'Planets',
						Lune:'Moons',
						Stockage:'Storage',
						Construction:'Construction',
						Militaire:'Military',
						Technologies_de_combat:'Warfare Technologies',
						Technologies_de_vaisseaux:"Spacecraft Technologies",
						Technologies_annexes:'Other Technologies',
						genere: 'generate the',
						rapport:'Account details of',
						dont : 'with',
						empirePoint :'.:: Empire\'s total points ',
						Production:'.:: Empire\'s daily production',
						Structure : '.:: Building ',
						Technology:'.:: Research',
						Defense:'.:: Defence',
						Taille : '.:: Planet Sizes',
						Energie : 'Energy',
						vaisseauCivil: 'Civil Ships',
						vaisseauCombat: 'Combat ships',
						UsedField : 'Used Fields',
						TotField : 'Total Fields'
					},
					date:
					{
						Jan:'January',
						Feb:'February',
						Mar:'March',
						Apr: 'April',
						May:'May',
						Jun:'June',
						Jul:'July',
						Aug:'August',
						Sep: 'September',
						Oct:'October',
						Nov:'November',
						Dec:'December',
						DMY:false,
						time:{h:'h', j:'d',s:'w',m:'m'}
					}
			};

				if (options.generale.langue == 'fr')
				{
						text =
						{
						Total:'Total',
						Lune:'Lune',
						Mines:'Mines ',
						Other_structure:'Autres bâtiments ',
						Structure:'Bâtiments ',
						Technology:'Recherche',
						Technologies:'Technologies',
						Ressource:'Ressources',
						Facilities:'Installations',
						Fleet:'Flotte ',
						Defense:'Défense ',
						Progression:'  Progression  ',
						Moyenne:'  Moyenne ',
						Production:'  Production ',
						ProductionConstruction:'  Production avec bâtiments en construction terminées, ou technologie plasma',
						ProductionBrute:'  Production sans geologue et sans booster',
						Indestructible:'  Indestructibles ',
						Depuis:' depuis ',
						Points:'  Points ',
						soit:'  soit ',
						BBcode_debut:'Détail de l\'investissement des points ',
						BBcode_debut2:'Points totaux : ',
						BBcode_mine:'Points mines : ',
						BBcode_bat:'Points autres bâtiments : ',
						BBcode_batT:'Points bâtiment : ',
						BBcode_fin1:' Points technologie : ',
						Bcode_fin2:' Points flotte : ',
						BBcode_fin3:' Points défense : ',
						BBcode_fin4:' Votre compte a ',
						BBcode_fin5:' points indestructibles',
						BBcode_fin6:' Progression moyenne : ',
						Point_day:' Points par jour',
						sur_lune:' sur lune ',
						en_vol:' en vol ',
						aQuai: 'à quai',
						vaisseaux : 'vaisseaux',
						Avertissement:' Etes vous sur de vouloir réinitialiser votre progression ? ',
						restart:'  Cliquez pour remettre votre progression à 0 ',
						AffBBcodeDetail : 'Cliquez pour afficher le BBcode détaillé',
						AffBBcodeSimple : 'Cliquez pour afficher le BBcode non détaillé',
						AffBBcodeSansBBcode : 'Version sans BBcode :',
						done:' Enregistré ! Actualisez la page ! ',
						ICoption:'  Options InfoCompte ',
						Save:' Sauvegarder ',
						valeurdefaut:'  Valeur par defaut ',
						Manque:' Il manque des infos, allez visiter les pages suivantes : ',
						empireMaj: 'Utilisez la vue empire, pour mettre à jour en un click',
						pas_a_jours:'Il y a une nouvelle version disponible :',
						install:' Cliquez pour l\'installer',
						utile:'  utile ',
						inutile:' inutile ',
						BBcode_fin42:'Vos investissements en technologies inutiles représentent ',
						creeSign:' Créer une signature InfoCompte ',
						signature : 'signature',
						manqueVG : "La vue générale d'une autre planète",
						info_new_version: 'voir la liste complete des nouvelles versions',
						addTrad :'ajouter/modifier/compléter une traduction',
						rank: 'Place',
						rank_indest: 'C\'est votre classement en cas de perte de votre flotte et de vos défenses',
						degats_infliges : 'Dégâts totaux infligés par',
						luneCree: 'Lunes créées',
						constructing:'Points en construction',
						affDetailPla : 'Cliquez pour afficher le détail des points des planètes',
						affRentaPla : 'Cliquez pour afficher les indications pour vos futures améliorations de mines',
						descriptAlti : 'C\'est un site permettant de participer aux records globaux ou d\'alliance, de voir ses statistiques personnelles, l\'évolution de son compte, de son alliance etc',
						sendAlti : 'Envoyer les infos vers Alternative',
						probFlotteAlti : 'Il y a un problème avec vos vaisseaux, \n\n Visitez toutes vos pages chantier spatial et une page flotte ( mouvement de flotte si vous avez des flottes en vol) et/ou defense pour résoudre le problème \n(Si cela ne change rien, allez voir les pages batiments/technologies) \n\n Si vous êtes sûr d\'être passé sur toutes les pages nécessaires, merci de reporter le problème ici : http://board.ogame.fr/index.php?page=Thread&threadID=850132',
						adresse : 'Quelle adresse email voulez vous utiliser pour le site Alternative ?',
						rcSave :'Enregistre le pour le convertir avec un autre CR \n(Les RC/rapport de recyclage enregistré s\'efface si vous sortez de la page message)',
						raid : 'pillages',
						rc : 'recyclages',
						renta : 'Renta ',
						textrenta : 'Info: Le temps de rentabilisation correspond au temps que met le surplus de production du niveau supplémentaire à rembourser son prix. Il est recommandé de développer les faibles temps de rentabilisation d\'abord. ',
						ordre_mine : 'Ordre des mines/techno à construire',
						years : "années",
						months : "mois",
						days : "jours",
						exportm:
							{
							planete : 'Planète',
							niveau : 'Niveau des mines du joueur',
							le : 'le',
							temperature : 'température de',
							pointsminesm : 'Points dans les mines de métal',
							pointsminesc : 'Points dans les mines de cristal',
							pointsminesd : 'Points dans les mines de deut',
							pointsmines : 'Points dans les mines',
							parheure : 'Par heure',
							parjour : 'Par jour',
							parsem : 'Par semaine',
							parmois : 'Par mois',
							exportmine : 'Export de vos mines'
							},
						options:
							{
								BatTotal:' Afficher les points bâtiments totaux ',
								indestructible:' Afficher les points Indestructibles ',
								techno:' Afficher les points Technologie ',
								flottes:' Afficher les points Flotte ',
								Def:' Afficher les points Défense ',
								VaisseauxVol:' Afficher le pourcentage des vaisseaux en vol ',
								pointLune:' Afficher les points lune ',
								sauterLignePourPourcentageFlotteVol:' Tout afficher sur la même ligne (pour flotte en vol et points lune) ',
								progression:' Afficher la progression',
								couleurPoint:' Afficher en couleur en fonction de la progression ',
								ProgJours:' Afficher la progression par jours ',
								ProdJours:' Afficher la production des mines par jours  ',
								Techno_utile:'Montrer le détail des technos',
								Point_planete:' Montrer les points investis sur la planète ',
								Masquer:'Masquer InfoCompte par défaut',
								Graphiccolours :' Couleurs du graphique  ',
								progNeg: 'Couleur pour les chutes de points',
								progPos : 'Couleur pour les gains de points' ,
								Signtxt:'Couleur des Signatures (texte) ',
								Signfond:'Couleur des Signatures (Fond)',
								creeSign :'Afficher les lien pour utiliser les RE et RC',
								creeSignRc : 'RC',
								langue : 'Quelle langue voulez vous ?',
								CoulBBcode: 'Couleur des titres du BBcode',
								BBcode_center : 'Comment centrer le texte ?',
								BBcode_size : 'Taille maximum du BBcode (px / %)',
								enregFlotte: 'Enregistrer la flotte',
								rank: 'Afficher les classements',
								alternative: 'Afficher le lien pour envoyer ses informations sur le <a href="http://www.projet-alternative.fr">site Alternative</a>',
								sansDesing :'Désactiver le Design du script',
								design:'Design',
								Display: 'Affichage',
								speed: 'Vitesse de l\'univers',
								constructing:'Afficher les points en cours de construction',
								detailPointsPla : 'Afficher le détail des points des planètes par défaut',
								graphProd : 'Afficher le graphique des productions',
								timeStart : 'Entrez la date de création du compte pour que votre progression moyenne soit calculée depuis cette date',
								nbDigits : 'Nombre de décimales pour les pourcentages',
								affCout : 'Afficher le coût des bâtiments et des recherches',
								affExpe : 'Afficher le lien pour envoyer les expeditions sur Alternative',
								affConvert : 'Afficher le lien pour convertir les RC et les RE',
								tauxCommerce : 'Taux  >=1  <= 5',
								texthangar : 'Afficher le temps restant avant que les hangars ne soient pleins',
								textrentaempire : 'Afficher les futures mines à construire sur la vue empire',
								upSite : 'Mettre à jours votre compte sur les sites tels que MinePact, Oprojekt ou OgameTools quand vous aller voir vos profils',
								posTable : 'Mettre le tableau infocompte en bas',
								useBoost : 'Compter les booster dans les calculs de rentabilité',
								progression_data : 'Sauvegarder ses infos pour restaurer votre progression si problème'
							},
						tag:
							{
								mmet: 'Mine de métal',mcri: 'Mine de cristal',mdet: 'Synthétiseur de deutérium',ces: 'Centrale électrique solaire',cef: 'Centrale électrique de fusion',
								rob: 'Usine de robots',nan: 'Usine de nanites',cspa: 'Chantier spatial',hmet: 'Hangar de métal',hcri: 'Hangar de cristal',hdet: 'Réservoir de deutérium',
								lab: 'Laboratoire de recherche',ter: 'Terraformeur',depo: 'Dépôt de ravitaillement',silo: 'Silo de missiles',dock: 'Dock spatial',
								base: 'Base lunaire',phal: 'Phalange de capteur',port: 'Porte de saut spatial',
								espi: 'Technologie Espionnage',ordi: 'Technologie Ordinateur',arme: 'Technologie Armes',bouc: 'Technologie Bouclier',
								prot: 'Technologie Protection des vaisseaux spatiaux',ener: 'Technologie Energie',hype: 'Technologie Hyperespace',comb: 'Réacteur à combustion',
								impu: 'Réacteur à impulsion',phyp: 'Propulsion hyperespace',lase: 'Technologie Laser',ions: 'Technologie Ions',plas: 'Technologie Plasma',
								rese: 'Réseau de recherche intergalactique',expe: 'Astrophysique',grav: 'Technologie Graviton',
								pt: 'Petit transporteur',gt: 'Grand transporteur',cle: 'Chasseur léger',clo: 'Chasseur lourd',crois: 'Croiseur',vb: 'Vaisseau de bataille',
								vc: 'Vaisseau de colonisation',rec: 'Recycleur',esp: 'Sonde d`espionnage',bomb: 'Bombardier',ss: 'Satellite solaire',dest: 'Destructeur',
								edlm: 'Étoile de la mort',traq: 'Traqueur', reaper:'Faucheur', pathfinder:'Éclaireur', crawler:'Foreuse',
								lm: 'Lanceur de missiles',lle: 'Artillerie laser légère',llo: 'Artillerie laser lourde',gauss: 'Canon de Gauss',ion: 'Artillerie à ions',
								pla: 'Lanceur de plasma',pb: 'Petit bouclier',gb: 'Grand bouclier',mic: 'Missile d`interception',mip: 'Missile Interplanétaire',
								m: 'Métal',
								c: 'Cristal',
								d: 'Deutérium',
								rc: new Array('P.transp.','G.transp.', 'Ch.léger', 'Ch.lourd','Croiseur', 'V.bataille','V.colo','Recycleur','Sonde','Bomb.','Destr.','Rip','Traqueur','Sat.sol.', 'Missile', 'L.léger.', 'L.lourd','Can.Gauss', 'Art.ions', 'Lanc.plasma', 'P.bouclier', 'G.bouclier', 'Les quantités énormes de métal et de cristal s' )
							},
							bbcode:
							{
								genere: 'Généré le',
								rapport:'Rapport du compte de',
								dont : 'dont',
								empirePoint :'[img]https://infocompte.topraider.eu/image/points.png[/img] ',
								Production:'[img]https://infocompte.topraider.eu/image/production.png[/img]',
								Structure : '[img]https://infocompte.topraider.eu/image/batiment.png[/img]',
								Technology:'[img]https://infocompte.topraider.eu/image/labo.png[/img]',
								Defense:'[img]https://infocompte.topraider.eu/image/defense.jpg[/img]',
								Taille : '[img]https://infocompte.topraider.eu/image/planet.png[/img]',
								Energie : 'Energie',
								Scientifique:'Scientifique',
								planet:'Planétaire',
								Lune:'Lunaire',
								Stockage:'Stockage',
								Construction:'Construction',
								Militaire:'Militaire',
								Technologies_de_combat:'Technologies de combat',
								Technologies_de_vaisseaux:"Technologies de vaisseaux",
								Technologies_annexes:'Technologies annexes',
								vaisseauCivil: 'Vaisseaux civils',
								vaisseauCombat: 'Vaisseaux de combat',
								UsedField : 'Case utilisées',
								TotField : 'Case totales'
							},
							date:
							{
								Jan:'Janvier',
								Feb:'Fevrier',
								Mar:'Mars',
								Apr:'Avril',
								May:'Mai',
								Jun:'Juin',
								Jul:'Juillet',
								Aug:'Août',
								Sep:'Septembre',
								Oct:'Octobre',
								Nov:'Novembre',
								Dec:'Décembre',
								DMY:true,
								time:{h:'h', j:'j',s:'s',m:'m'}
							}
						};
				}
				else if(FireFox || Tamper)
				{
					if (unsafeWindow.infocompte_text)
					{
						if (options.generale.langue == 'de' && unsafeWindow.infocompte_text.de)
						{
							text = fusion(text,unsafeWindow.infocompte_text.de);
							if(unsafeWindow.infocompte_text.de.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.de.tag.rc ;
						}

						else if (options.generale.langue == 'com_pt' && unsafeWindow.infocompte_text.pt)
							{text = fusion(text,unsafeWindow.infocompte_text.pt);if(unsafeWindow.infocompte_text.pt.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.pt.tag.rc ; }
						else if (options.generale.langue == 'com_es' && unsafeWindow.infocompte_text.es)
							{text = fusion(text,unsafeWindow.infocompte_text.es);if(unsafeWindow.infocompte_text.es.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.es.tag.rc ; }
						else if (options.generale.langue == 'se' && unsafeWindow.infocompte_text.se)
							{text = fusion(text,unsafeWindow.infocompte_text.se);if(unsafeWindow.infocompte_text.se.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.se.tag.rc ; }
						else if (options.generale.langue == 'bg' && unsafeWindow.infocompte_text.bg)
							{text = fusion(text,unsafeWindow.infocompte_text.bg);if(unsafeWindow.infocompte_text.bg.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.bg.tag.rc ; }
						else if (options.generale.langue == 'nl' && unsafeWindow.infocompte_text.nl)
							{text = fusion(text,unsafeWindow.infocompte_text.nl);if(unsafeWindow.infocompte_text.nl.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.nl.tag.rc ; }
						else if (options.generale.langue == 'fi' && unsafeWindow.infocompte_text.fi)
							{text = fusion(text,unsafeWindow.infocompte_text.fi);if(unsafeWindow.infocompte_text.fi.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.fi.tag.rc ; }
						else if (options.generale.langue == 'dk' && unsafeWindow.infocompte_text.dk)
							{text = fusion(text,unsafeWindow.infocompte_text.dk);if(unsafeWindow.infocompte_text.dk.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.dk.tag.rc ; }
						else if (options.generale.langue == 'no' && unsafeWindow.infocompte_text.no)
							{text = fusion(text,unsafeWindow.infocompte_text.no);if(unsafeWindow.infocompte_text.no.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.no.tag.rc ; }
						else if (options.generale.langue == 'pl' && unsafeWindow.infocompte_text.onet_pl)
							{text = fusion(text,unsafeWindow.infocompte_text.onet_pl);if(unsafeWindow.infocompte_text.onet_pl.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.onet_pl.tag.rc ; }
						else if (options.generale.langue == 'gr' && unsafeWindow.infocompte_text.gr)
							{text = fusion(text,unsafeWindow.infocompte_text.gr);if(unsafeWindow.infocompte_text.gr.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.gr.tag.rc ; }
						else if (options.generale.langue == 'ba' && unsafeWindow.infocompte_text.ba)
							{text = fusion(text,unsafeWindow.infocompte_text.ba);if(unsafeWindow.infocompte_text.ba.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.ba.tag.rc ; }
						else if (options.generale.langue == 'com_br' && unsafeWindow.infocompte_text.pt)
							{text = fusion(text,unsafeWindow.infocompte_text.pt);if(unsafeWindow.infocompte_text.pt.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.pt.tag.rc ; }
						else if (options.generale.langue == 'ru' && unsafeWindow.infocompte_text.ru)
							{text = fusion(text,unsafeWindow.infocompte_text.ru);if(unsafeWindow.infocompte_text.ru.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.ru.tag.rc ; }
						else if (options.generale.langue == 'ro' && unsafeWindow.infocompte_text.ro)
							{text = fusion(text,unsafeWindow.infocompte_text.ro);if(unsafeWindow.infocompte_text.ro.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.ro.tag.rc ; }
						else if (options.generale.langue == 'com_hr' && unsafeWindow.infocompte_text.hr)
							{text = fusion(text,unsafeWindow.infocompte_text.hr);if(unsafeWindow.infocompte_text.hr.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.hr.tag.rc ; }
						else if (options.generale.langue == 'ae' && unsafeWindow.infocompte_text.ae)
							{text = fusion(text,unsafeWindow.infocompte_text.ae);if(unsafeWindow.infocompte_text.ae.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.ae.tag.rc ; }


						else if (options.generale.langue == 'hu' && unsafeWindow.infocompte_text.hu)
							{text = fusion(text,unsafeWindow.infocompte_text.hu);if(unsafeWindow.infocompte_text.hu.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.hu.tag.rc ; }
							else if (options.generale.langue == 'it' && unsafeWindow.infocompte_text.it)
							{text = fusion(text,unsafeWindow.infocompte_text.it);if(unsafeWindow.infocompte_text.it.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.it.tag.rc ; }
						else if (options.generale.langue == 'lt' && unsafeWindow.infocompte_text.lt)
							{text = fusion(text,unsafeWindow.infocompte_text.lt);if(unsafeWindow.infocompte_text.lt.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.lt.tag.rc ; }
						else if (options.generale.langue == 'cn' && unsafeWindow.infocompte_text.cn)
							{text = fusion(text,unsafeWindow.infocompte_text.cn);if(unsafeWindow.infocompte_text.cn.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.cn.tag.rc ; }
						else if (options.generale.langue == 'jp' && unsafeWindow.infocompte_text.jp)
							{text = fusion(text,unsafeWindow.infocompte_text.jp);if(unsafeWindow.infocompte_text.jp.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.jp.tag.rc ; }
						else if (options.generale.langue == 'cz' && unsafeWindow.infocompte_text.cz)
							{text = fusion(text,unsafeWindow.infocompte_text.cz);if(unsafeWindow.infocompte_text.cz.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.cz.tag.rc ; }
						else if (options.generale.langue == 'kr' && unsafeWindow.infocompte_text.kr)
							{text = fusion(text,unsafeWindow.infocompte_text.kr);if(unsafeWindow.infocompte_text.kr.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.kr.tag.rc ; }
						else if (options.generale.langue == 'lv' && unsafeWindow.infocompte_text.lv)
							{text = fusion(text,unsafeWindow.infocompte_text.lv);if(unsafeWindow.infocompte_text.lv.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.lv.tag.rc ; }
						else if (options.generale.langue == 'tr' && unsafeWindow.infocompte_text.tr)
							{text = fusion(text,unsafeWindow.infocompte_text.tr);if(unsafeWindow.infocompte_text.tr.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.tr.tag.rc ; }
						else if (options.generale.langue == 'sk' && unsafeWindow.infocompte_text.sk)
							{text = fusion(text,unsafeWindow.infocompte_text.sk);if(unsafeWindow.infocompte_text.sk.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.sk.tag.rc ; }
						else if (options.generale.langue == 'sr' && unsafeWindow.infocompte_text.sr)
							{text = fusion(text,unsafeWindow.infocompte_text.sr);if(unsafeWindow.infocompte_text.sr.tag.rc) text.tag.rc = unsafeWindow.infocompte_text.sr.tag.rc ; }


					}
				}
				else // Changement de langue chrome/Opéra
				{

					function getLangChrome()
						{
							for(attribut in arguments[0])
							{
								if(typeof arguments[0][attribut] != "object" )
								{
									arguments[0][attribut] = GM_getValue(attribut +'.'+ arguments[1] ,arguments[0][attribut])

								}
								else
								{
									getLangChrome(arguments[0][attribut] , attribut);
								}
							}

						}

						getLangChrome(text , '') ;

				}

				// *************************** Design du Script ****************************
				if (document.getElementById('playerName'))
				{
					if(options.generale.transparant)
					{
						var background = '';
						var background2 = '';
						var background3='';
					}
					else
					{
						var background  = 'data:image/gif;base64,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';
						var background2 = 'data:image/gif;base64,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';
						var background3 = 'data:image/gif;base64,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';
					}

					// ***********************************************************************************************
					// *********************************************************** Page Options   ********************
					// ***********************************************************************************************

					// Page Options
					if ((url.indexOf('infocompte=scriptOptions',0))>=0)
					{
							var couleur = new Array('','','','','');
							for (var i=0 ; i< listeCouleur.length ; i++)
								{couleur[i] = listeCouleur[i];}
							for(var i=0 ; i< option.length ; i++)
								{option[i] = oui_non_en_checked(option[i]);}

							var majLang = '';

						var updateLang = false;

						if(FireFox  || Tamper)
						{
							if(unsafeWindow.infocompte_text) // Si y'a le script lang
							{
								if(unsafeWindow.infocompte_text.maj) // si y'a une version
								{
									if(unsafeWindow.infocompte_text.maj == 'false') updateLang = true;
								}
								else updateLang = true;
							}
						}

							if(updateLang) majLang = '<a id="Maj lang" title="'+text.pas_a_jours+' '+text.install+'" href="https://openuserjs.org/scripts/benneb/InfoCompte3"><span style="font-color:#FF5555;">/!\\</span></a> ';

							var aff = '<table id="IFC_table" style="width:675px; clear:right;"><tr style="width:675px;"><th><table id="IFC_top" style="width:675px; margin:auto;margin-bottom: -2px; text-align:center;"><tr ><th style="width:675px; font-size: 12px; font-weight: bold; color: #539fc8; line-height: 30px; height: 30px;" background="'+background+'" colspan="1" >'+text.ICoption+'</th><th class="IFC_th" ></th><th class="IFC_th2"></th></tr></table><center><table width="657px" background-color="#0d1014" id="IFC_mid" background="'+background2+'"><tr ><th width="4px">';


							aff+= '<div class="group bborder"><span '+ (FireFox  || Tamper ? '' : ' style="display:none;" ') +' ><div class="fieldwrapper"><label  class="styled textBeefy">'+ text.options.langue + majLang+'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('org')+' value="org" id="org" /> <label for="org"> en </label> <input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('fr')+' value="fr" id="fr" /> <label for="fr"> fr </label>';

							if (FireFox  || Tamper)
							{
							if ( unsafeWindow.infocompte_text)
							{
								if ( unsafeWindow.infocompte_text.de) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('de')+' value="de" id="de" /> <label for="de"> de </label>';
								if ( unsafeWindow.infocompte_text.se) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('se')+' value="se" id="se" /> <label for="se"> se </label><br/>' ;
								if ( unsafeWindow.infocompte_text.pt) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('com_pt')+' value="com_pt" id="com_pt" /> <label for="com_pt"> pt </label>';
								if ( unsafeWindow.infocompte_text.es) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('com_es')+' value="com_es" id="com_es" /> <label for="com_es"> es </label>';
								if ( unsafeWindow.infocompte_text.bg) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('bg')+' value="bg" id="bg" /> <label for="bg"> bg </label>';
								if ( unsafeWindow.infocompte_text.nl) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('nl')+' value="nl" id="nl" /> <label for="nl"> nl </label><br/>';
								if ( unsafeWindow.infocompte_text.fi) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('fi')+' value="fi" id="fi" /> <label for="fi"> fi </label>';
								if ( unsafeWindow.infocompte_text.dk) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('dk')+' value="dk" id="dk" /> <label for="dk"> dk </label>';
								if ( unsafeWindow.infocompte_text.no) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('no')+' value="no" id="no" /> <label for="no"> no </label>';
								if ( unsafeWindow.infocompte_text.onet_pl) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('pl')+' value="pl" id="pl" /> <label for="pl"> pl </label><br/>';
								if ( unsafeWindow.infocompte_text.gr) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('gr')+' value="gr" id="gr" /> <label for="gr"> gr </label>';
								if ( unsafeWindow.infocompte_text.ba) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('ba')+' value="ba" id="ba" /> <label for="ba"> ba </label>';
								if ( unsafeWindow.infocompte_text.ru) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('ru')+' value="ru" id="ru" /> <label for="ru"> ru </label>';
								if ( unsafeWindow.infocompte_text.ro) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('ro')+' value="ro" id="ro" /> <label for="ro"> ro </label><br/>';
								if ( unsafeWindow.infocompte_text.it) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('it')+' value="it" id="it" /> <label for="it"> it </label>';
								if ( unsafeWindow.infocompte_text.cn) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('cn')+' value="cn" id="cn" /> <label for="cn"> cn </label>';
								if ( unsafeWindow.infocompte_text.cz) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('cz')+' value="cz" id="cz" /> <label for="cz"> cz </label>';
								if ( unsafeWindow.infocompte_text.kr) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('kr')+' value="kr" id="kr" /> <label for="kr"> kr </label><br/>';
								if ( unsafeWindow.infocompte_text.hu) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('hu')+' value="hu" id="hu" /> <label for="hu"> hu </label>';
								if ( unsafeWindow.infocompte_text.hr) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('com_hr')+' value="com_hr" id="com_hr" /> <label for="com_hr"> hr </label>';
								if ( unsafeWindow.infocompte_text.tr) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('tr')+' value="tr" id="tr" /> <label for="tr"> tr </label>';

								if ( unsafeWindow.infocompte_text.ae) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('ae')+' value="ae" id="ae" /> <label for="ae"> ae </label><br/>';

								if ( unsafeWindow.infocompte_text.lt) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('lt')+' value="lt" id="lt" /> <label for="ro"> lt </label>';
								if ( unsafeWindow.infocompte_text.jp) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('jp')+' value="jp" id="jp" /> <label for="jp"> jp </label>';
								if ( unsafeWindow.infocompte_text.lv) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('lv')+' value="lv" id="lv" /> <label for="lv"> lv </label>';
								if ( unsafeWindow.infocompte_text.sk) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('sk')+' value="sk" id="sk" /> <label for="sk"> sk </label>';
								if ( unsafeWindow.infocompte_text.sr) aff += '<input style="cursor:pointer;" type="radio" class="langue" name="langue" '+checkLang('sr')+' value="sr" id="sr" /> <label for="sr"> sr </label>';

								aff += '</div></div><a href="http://vulca.1s.fr/forum/viewtopic.php?f=23&t=7" style="float:center; font-size: 9px;" target="_blank"><br/>'+text.addTrad+' </a><br/>';
							}
							else aff += ' </div></div><br/><sub><a href="https://openuserjs.org/scripts/benneb/InfoCompte_lang" > click here to install other languages and place it before InfoCompte script</a> </sub>';
							}

							aff+= '</div></div></span></th></tr><tr><th style="width:675px; font-size: 12px; font-weight: bold; color: #539fc8; line-height: 30px; height: 30px;" background="'+background+'" ><div style="size:30px; border-color:black; border-style:solid; border-width:1px; text-align:center;">'+text.options.Display+'</div></th></tr><tr><th><div class="group bborder">'

							aff+= '<div style=display:none; class="fieldwrapper"><label class="styled textBeefy">'+ text.options.speed +'</label>';
							aff+=		'<div class="thefield"><input class="speed" value="'+speedUni+'" size="1" alt="24" maxlength="1" type="text"></div></div>';

							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.Masquer +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[15]+' alt="15" type="checkbox"> </div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.posTable +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[34]+' alt="34" type="checkbox"> </div></div>';

							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.BatTotal +'</label>';
							aff+=		'<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[1]+' alt="1" type="checkbox"></div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.indestructible +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[2]+' alt="2" type="checkbox"> </div></div>';

							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.techno +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[3]+' alt="3" type="checkbox"></div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.flottes+'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[4]+' alt="4" type="checkbox"> </div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+text.options.Def +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[5]+' alt="5" type="checkbox"></div></div>';
							aff+= '<div class="fieldwrapper" ><label class="styled textBeefy">'+ text.options.VaisseauxVol +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[6]+' alt="6" type="checkbox"> </div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.pointLune +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[7]+' alt="7" type="checkbox"> </div></div>';

							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.progression +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[9]+' alt="9" type="checkbox"> </div></div>';

							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.ProgJours +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[11]+' alt="11" type="checkbox"> </div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.ProdJours +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[12]+' alt="12" type="checkbox"> </div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.Techno_utile +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[13]+' alt="13" type="checkbox"> </div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.Point_planete  +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[14]+' alt="14" type="checkbox"> </div></div>';

							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.constructing  +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[27]+' alt="27" type="checkbox"> </div></div>';

							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.enregFlotte +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[20]+' alt="20" type="checkbox"> </div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.rank +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[21]+' alt="21" type="checkbox"> </div></div>';


							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.creeSign +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[16]+' alt="16" type="checkbox"> </div></div>';
							/*
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.creeSign +'('+text.options.creeSignRc+')</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[26]+' alt="26" type="checkbox"> </div></div>';
							*/


							/*
							aff+= '<div  class="fieldwrapper"><label class="styled textBeefy">'+ text.options.alternative +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[22]+' alt="22" type="checkbox"> </div></div>';
							aff+= '<div  class="fieldwrapper"><label class="styled textBeefy">'+ text.adresse +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" id="adrAlt" class="InfoOptions" value="'+GM_getValue(nomScript+"email"+coordPM+serveur,'')+'" type="text"> </div></div>';
							*/
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.detailPointsPla +'</label>';
							aff+=       '<div  class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[28]+' alt="28" type="checkbox"> </div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.graphProd +'</label>';
							aff+=       '<div  class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[29]+' alt="29" type="checkbox"> </div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.timeStart +'</label>';
							aff+=		'<div class="thefield"><input class="speed" value="'+accStartDate[1]+'" size="1" alt="24" maxlength="2" type="text"> <input class="speed" value="'+accStartDate[2]+'" size="1" alt="24" maxlength="2" type="text"> <input class="speed" value="'+accStartDate[3]+'" size="4" alt="24" maxlength="4" type="text"> </div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.nbDigits +'</label>';
							aff+=		'<div class="thefield"><input class="speed" value="'+digits+'" size="1" alt="24" maxlength="1" type="text"></div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.affCout +'</label>';
							aff+=       '<div  class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[30]+' alt="30" type="checkbox"> </div></div>';
							/*
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.affExpe +'</label>';
							aff+=       '<div  class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[31]+' alt="31" type="checkbox"> </div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.affConvert +'</label>';
							aff+=       '<div  class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[32]+' alt="32" type="checkbox"> </div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.upSite +'</label>';
							aff+=       '<div  class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[33]+' alt="33" type="checkbox"> </div></div>';
							*/
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.useBoost +'</label>';
							aff+=       '<div  class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[35]+' alt="35" type="checkbox"> </div></div>';


							aff+= '</div></th></tr><tr><th style="width:675px; font-size: 12px; font-weight: bold; color: #539fc8; line-height: 30px; height: 30px;" background="'+background+'" ><div style="size:30px; border-color:black; border-style:solid; border-width:1px; text-align:center;">'+text.options.design+'</div></th></tr><tr><th><div class="group bborder">'



							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+text.options.Graphiccolours +'<br/></label>';
							if(option[1] == 'unchecked')
							aff+=  		'<div class="thefield" ><input TITLE="'+text.Mines+' / '+text.en_vol+' / '+text.inutile+' / '+text.tag.m+'" class="couleur" name="couleur" maxlength="6" value="'+couleur[0]+'" type="text" size="6" style="text-align:center; border:1px solid black;">  <input TITLE="'+text.Other_structure+'" class="couleur" name="couleur" maxlength="6" value="'+couleur[1]+'" type="text" size="6" style="text-align:center; border:1px solid black;">  <input TITLE="'+text.Technology+' / '+text.tag.c+'" class="couleur" name="couleur" maxlength="6" value="'+couleur[2]+'" type="text" size="6" style="text-align:center; border:1px solid black;"><br/><input TITLE="'+text.Fleet+'"  class="couleur" name="couleur" maxlength="6" value="'+couleur[3]+'" type="text" size="6" style="text-align:center; border:1px solid black;"> <input TITLE="'+text.Defense+' / '+text.aQuai+' / '+text.utile+' / '+text.tag.d+'" class="couleur" name="couleur" maxlength="6" value="'+couleur[4]+'" type="text" size="6" style="text-align:center; border:1px solid black;"></div></div>';
							else
							aff+=  		'<div class="thefield" ><input TITLE="'+text.Structure+' / '+text.en_vol+' / '+text.inutile+' / '+text.tag.m+'" class="couleur" name="couleur" maxlength="6" value="'+couleur[0]+'" type="text" size="6" style="text-align:center; border:1px solid black;">  <input TITLE="'+text.Technology+'" class="couleur" name="couleur" maxlength="6" value="'+couleur[1]+'" type="text" size="6" style="text-align:center; border:1px solid black;">  <input TITLE="'+text.tag.c+'" class="couleur" name="couleur" maxlength="6" value="'+couleur[2]+'" type="text" size="6" style="text-align:center; border:1px solid black;"><br/><input TITLE="'+text.Fleet+'" class="couleur" name="couleur" maxlength="6" value="'+couleur[3]+'" type="text" size="6" style="text-align:center; border:1px solid black;"> <input TITLE="'+text.Defense+' / '+text.aQuai+' / '+text.utile+' / '+text.tag.d+'" class="couleur" name="couleur" maxlength="6" value="'+couleur[4]+'" type="text" size="6" style="text-align:center; border:1px solid black;"></div></div>';

							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.Signtxt +'</label>';
							aff+=       '<div class="thefield"><input class="sign" name="couleur" maxlength="3" value="'+options.couleur.SigntxtR+'" type="text" size="4" style="text-align:center; border:1px solid black;"> <input class="sign" name="couleur" maxlength="3" value="'+options.couleur.SigntxtV+'" type="text" size="4" style="text-align:center; border:1px solid black;"> <input class="sign" name="couleur" maxlength="3" value="'+options.couleur.SigntxtB+'" type="text" size="4" style="text-align:center; border:1px solid black;"> <input  size="1" maxlength="0" class="testCouleur"/> </div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.Signfond +'</label>';
							aff+=       '<div class="thefield"><input class="sign" name="couleur" maxlength="3" value="'+options.couleur.SignfondR+'" type="text" size="4" style="text-align:center; border:1px solid black;"> <input class="sign" name="couleur" maxlength="3" value="'+options.couleur.SignfondV+'" type="text" size="4" style="text-align:center; border:1px solid black;"> <input class="sign" name="couleur" maxlength="3" value="'+options.couleur.SignfondB+'" type="text" size="4" style="text-align:center; border:1px solid black;"> <input size="1" maxlength="0" class="testCouleur"/></div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.progNeg +'</label>';
							aff+=       '<div class="thefield"><input class="coul" name="couleur" maxlength="6" value="'+options.couleur.progNeg+'" type="text" size="6" style="text-align:center; border:1px solid black;"></div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.progPos +'</label>';
							aff+=       '<div class="thefield"><input class="coul" name="couleur" maxlength="6" value="'+options.couleur.progPos+'" type="text" size="6" style="text-align:center; border:1px solid black;"></div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.CoulBBcode +'</label>';
							aff+=       '<div class="thefield"><input class="coul" name="couleur" maxlength="6" value="'+options.couleur.CoulBBcode+'" type="text" size="6" style="text-align:center; border:1px solid black;"><input class="coul" name="couleur" maxlength="6" value="'+options.couleur.CoulBBcode2+'" type="text" size="6" style="text-align:center; border:1px solid black;"></div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.BBcode_center +'</label>';
							aff+=       '<div class="thefield"><sub><input style="cursor:pointer;" type="radio" alt="17"  name="17"  id="center" '+option[17]+' class="InfoOptions" /> <label for="center">[center]</label> <input style="cursor:pointer;" type="radio" id="align" name="17" '+decheck(option[17])+' class="bbcode" /> <label for="align">[align=center]</label>';
							aff+=       ' <input style="cursor:pointer;" type="radio" id="center2" alt="25" name="17" '+option[25]+' class="InfoOptions" /> <label for="align">&lt;center&gt;</label></sub></div></div>';

							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.BBcode_size +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" type="radio" alt="18"  name="18" '+option[18]+' id="30" class="InfoOptions" /> <label for="30">30</label> <input style="cursor:pointer;" type="radio" name="18" id="200" '+decheck(option[18])+' class="bbcode" /> <label for="200">200</label>';
							aff+= '			<input style="cursor:pointer;" type="radio" name="18" id="SMF" alt="19" '+option[19]+' class="InfoOptions" /> <label for="SMF">SMF</label></div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.sauterLignePourPourcentageFlotteVol+'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[8]+' alt="8" type="checkbox"> </div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.couleurPoint +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[10]+' alt="10" type="checkbox"> </div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.sansDesing +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="InfoOptions" '+option[23]+' alt="23" type="checkbox"> </div></div>';


							aff+= '</div></th></tr><tr><th style="width:675px; font-size: 12px; font-weight: bold; color: #539fc8; line-height: 30px; height: 30px;" background="'+background+'" ><div style="size:30px; border-color:black; border-style:solid; border-width:1px; text-align:center;">Commerce</div></th></tr><tr><th><div class="group bborder">'
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.tauxCommerce +'</label>';
							aff+=		'<div class="thefield"><input class="taux" value="'+taux[0]+'" size="4" alt="40" maxlength="4" type="text"> <input class="taux" value="'+taux[1]+'" size="4" alt="40" maxlength="4" type="text"> <input class="taux" value="'+taux[2]+'" size="4" alt="40" maxlength="4" type="text"> </div></div>';

							// **************************************************** empire ******************************************
							var hidden = document.getElementById ("officers").getElementsByTagName ("a") [0].className.indexOf (" on") >= 0 ? '' : 'style="visibility:hidden"' ;

							aff+= '</div></th></tr><tr  '+hidden+' ><th '+hidden+' style="width:675px; font-size: 12px; font-weight: bold; color: #539fc8; line-height: 30px; height: 30px;" background="'+background+'" ><div style="size:30px; border-color:black; border-style:solid; border-width:1px; text-align:center;">Empire view</div></th></tr><tr '+hidden+' ><th><div class="group bborder">'
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.texthangar +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="empireoptions" '+(empireoptions[0] == "true" ? 'checked="checked"' : '')+' alt="41" type="checkbox"> </div></div>';
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.textrentaempire +'</label>';
							aff+=       '<div class="thefield"><input style="cursor:pointer;" class="empireoptions" '+(empireoptions[1] == "true" ? 'checked="checked"' : '')+' alt="42" type="checkbox"> </div></div>';


							// **************************************************** sauvegarde ******************************************

							var	pointref_sav = GM_getValue(nomScript+"PointRef"+coordPM+serveur);

							aff+= '</div></th></tr><tr><th style="width:675px; font-size: 12px; font-weight: bold; color: #539fc8; line-height: 30px; height: 30px;" background="'+background+'" ><div style="size:30px; border-color:black; border-style:solid; border-width:1px; text-align:center;">Progression</div></th></tr><tr><th><div class="group bborder">'
							aff+= '<div class="fieldwrapper"><label class="styled textBeefy">'+ text.options.progression_data +'</label>';
							aff+=		'<div class="thefield"><input class="progression" value="'+pointref_sav+'" size="20" type="text"></div></div>';

							// **************************************************** bas du tableau ******************************************

							aff+=       '</div></TH></TR></table><table id="IFC_down" style="clear: right;" width="663px" background="'+background3+'" height="22px">';
							aff+=		'</table></table><br/><br/>';

						   var einhalt = null;
						   if(document.getElementById('middle'))//la page alliance contient contentWrapper contrairement aux autres
						   {
							   einhalt=document.getElementById('middle');
						   }
						   else
						   {
							   einhalt=document.getElementById('contentWrapper');
						   }

							var escriptopt=document.createElement('div');
							escriptopt.id='infoCompteScriptOpt';
							escriptopt.innerHTML=aff;
							escriptopt.style.cssFloat='left';
							escriptopt.style.position='relative';
							escriptopt.style.width='670px';
							einhalt.style.display='none';
							einhalt.parentNode.insertBefore(escriptopt,einhalt);


							function enregistreOption()
							{

								for(var i=0; i< document.getElementsByClassName('couleur').length ; i++)
									{document.getElementsByClassName('couleur')[i].style.background = '#'+document.getElementsByClassName('couleur')[i].value; }

								for(var i=0; i< document.getElementsByClassName('coul').length ; i++)
									{document.getElementsByClassName('coul')[i].style.background = '#'+document.getElementsByClassName('coul')[i].value}

								document.getElementsByClassName('testCouleur')[0].style.background = 'rgb('+document.getElementsByClassName('sign')[0].value+','+document.getElementsByClassName('sign')[1].value+','+document.getElementsByClassName('sign')[2].value+')';
								document.getElementsByClassName('testCouleur')[1].style.background = 'rgb('+document.getElementsByClassName('sign')[3].value+','+document.getElementsByClassName('sign')[4].value+','+document.getElementsByClassName('sign')[5].value+')';

								// ********************************************************** SAUVEGARDE ****************************************************************
								var Block1 = document.getElementsByClassName('couleur');
								if (Block1[0].value)
								{
									CouleurGraph='';
									for (var i =0 ; i< Block1.length; i++)
									{
										if (Block1[i].value.length == 6)
										{
											CouleurGraph += Block1[i].value + ',';
										}
									}
								}
								CouleurGraph = CouleurGraph.substring(0, CouleurGraph.length-1)

								var Block2 = document.getElementsByClassName('coul');
								var OptionCouleur = Block2[0].value+';'+Block2[1].value+';'+Block2[2].value+';'+Block2[3].value+';;;;;;;;;;;;;;'
								GM_setValue(nomScript+'OptionCouleur'+coordPM+serveur,OptionCouleur);

								var SOptions = new Array();
								SOptions[0] = CouleurGraph;
								var Block = document.getElementsByClassName('InfoOptions');
								for (var f=0 ; f < Block.length ; f++ )
								{
									SOptions[parseInt(Block[f].alt)]=Block[f].checked
								}

								GM_setValue(nomScript+"options"+coordPM+serveur, SOptions.join(';')+';;;;;;;;;');

								var couleursigna = document.getElementsByClassName('sign');
								var listeColSign = couleursigna[3].value+';'+couleursigna[4].value+';'+couleursigna[5].value+'-'+couleursigna[0].value+';'+couleursigna[1].value+';'+couleursigna[2].value+'|url|'+options.couleur.url;
								GM_setValue(nomScript+'couleurSign'+serveur+coordPM , listeColSign);

								//speed and start date
								GM_setValue(nomScript+'speed'+serveur+coordPM ,document.getElementsByClassName('speed')[0].value+';'+document.getElementsByClassName('speed')[1].value+';'+document.getElementsByClassName('speed')[2].value+';'+document.getElementsByClassName('speed')[3].value+';'+document.getElementsByClassName('speed')[4].value+';;;');
								//taux
								var m = document.getElementsByClassName('taux')[0];
								var c = document.getElementsByClassName('taux')[1];
								var d = document.getElementsByClassName('taux')[2];
								function isTaux(m)
								{
									return !isNaN(parseInt(m.value*100)) && m.value >= 1 && m.value <= 5;
								}
								function saveTaux(toto)
								{
									GM_setValue(nomScript+'taux'+serveur+coordPM , m.value +';'+	   c.value+';'+		d.value+';;;');
									toto.removeAttribute("style");
								}
								if( isTaux(m) )		saveTaux(m);
								else				m.setAttribute("style","background-color:red");

								if( isTaux(c) )		saveTaux(c)
								else				c.setAttribute("style","background-color:red");

								if( isTaux(d) )		saveTaux(d)
								else				d.setAttribute("style","background-color:red");

								//empire
								GM_setValue(nomScript+'empire'+serveur+coordPM ,    document.getElementsByClassName('empireoptions')[0].checked+';'+document.getElementsByClassName('empireoptions')[1].checked+';;');
								// Langue
								var list_lang = document.getElementsByClassName('langue');
								for (i=0 ; i<list_lang.length ; i++)
								{
									if (list_lang[i].checked == true ||list_lang[i].checked == 'true')
									{
										GM_setValue(nomScript+'Langue_text'+coordPM+serveur,list_lang[i].value);
										i=list_lang.length;
									}
								}
								//progression 21 valeurs
								var progression = document.getElementsByClassName('progression')[0];
								if( progression.value.split(/;/).length >= 19 )
								{
									progression.removeAttribute("style");
									GM_setValue(nomScript+"PointRef"+coordPM+serveur,progression.value);
								}
								else
								{
									progression.setAttribute("style","background-color:red");
								}
							}
							setInterval(enregistreOption, 500);
					}

					// ***********************************************************************************************
					// *********************************************************** Page Défense   ********************
					// ***********************************************************************************************

					else if ((url.indexOf('page=ingame&component=defenses',0))>=0)
					{
						var niv = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0);

						niv[0] = getAmountOfShip('rocketLauncher', 'amount');
						niv[1] = getAmountOfShip('laserCannonLight', 'amount');
						niv[2] = getAmountOfShip('laserCannonHeavy', 'amount');
						niv[3] = getAmountOfShip('ionCannon', 'amount');
						niv[4] = getAmountOfShip('gaussCannon', 'amount');
						niv[5] = getAmountOfShip('plasmaCannon', 'amount');
						niv[6] = getAmountOfShip('shieldDomeSmall', 'amount');
						niv[7] = getAmountOfShip('shieldDomeLarge', 'amount');
						niv[8] = getAmountOfShip('missileInterceptor', 'amount');
						niv[9] = getAmountOfShip('missileInterplanetary', 'amount');

						//console.log(niv);

						var listeDef = niv.join('|')+'|';

						DefPla[numeroplanete] = listeDef;
						GM_setValue(nomScript+"DefPlanete"+coordPM+serveur,DefPla.join(";"));

						//if (GM_getValue(nomScript+domain, 'PAS') != 'PAS')  // TechTree visité
						GM_setValue(nomScript+"Def_const"+coordPM+serveur,Def_const.join(';'));
					}

					// ***********************************************************************************************
					// *********************************************************** Page Recherche   ******************
					// ***********************************************************************************************

					else if ((url.indexOf('page=ingame&component=research',0))>=0)
					{
						var nom_techno = new Array( 'ener', 'lase','ions','hype', 'plas', 'comb', 'impu', 'phyp', 'espi', 'ordi', 'astro' ,'rese', 'grav', 'arme','bouc', 'prot');

						var coutBati = new Array(new Array(0,0.8,0.4),new Array(0.2,0.1,0),new Array(1,0.3,0.1),new Array(0,4,2),new Array(2,4,1),new Array(0.4,0,0.6),new Array(2,4,0.6),new Array(10,20,6),new Array(0.2,1,0.2),new Array(0,0.4,0.6),new Array(4,8,4),new Array(240,400,160),new Array(0,0,0),new Array(0.8,0.2,0),new Array(0.2,0.6,0),new Array(1,0,0));

						var coefIng = ( (document.getElementById("officers").getElementsByTagName("a")[4].className.indexOf(" on") >= 0) ? 0.75 : 1);
						var laboTot = parseInt(BatSta[numeroplanete].split('|')[2]);

						var prixInitial= new Array();

						for( i =0; i< coutBati.length ; i++)
						{
							prixInitial[i] = coutBati[i][0]+coutBati[i][1]+coutBati[i][2];
						}

						var LevelsTech = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
						var exposant = new Array(2,2,2,2,2,2,2,2,2,2,1.75,2,2,2,2,2);

						var niveau ='';
						var pointRecherche=0;
						var bati ='';
						var technology = document.getElementsByClassName('technology') ;
						var niveaux = document.getElementsByClassName('level') ;
						var listeNiv ='';
						var resEncontruction = -1;

						for (var f=0; f<technology.length ; f++)//utiliser la longueur de technology
						{
							var countdown_length = technology[f].getElementsByClassName('countdown').length;
							niveau = niveaux[f].dataset.value;
							//console.log(niveau);
							//function afficheCout(f, lvlElement, position, bati)
							afficheCout(f, niveau, f, false);

							if(countdown_length == 1) // recherche en construction
							{
								resEncontruction=f;
							}
							LevelsTech[f] = parseInt(niveau);
							pointRecherche += Math.floor(prixInitial[f]*(Math.pow(exposant[f],LevelsTech[f])-1)/(exposant[f]-1)*1000)/1000;
							listeNiv += parseInt(LevelsTech[f])+';';
						}

						// Calcul labo equivalent
						var listLab = new Array();

						var f=0;
						for(var i=0; i< BatSta.length-1 ; i++)
						{
							if(i != numeroplanete && BatSta[i].split('|')[2] != '')
							{
								listLab[f] = parseInt(BatSta[i].split('|')[2]);
								f++;
							}
						}
						function sortfunction(a, b)
						{
							return (a - b) //causes an array to be sorted numerically and ascending
						}

						listLab = listLab.sort(sortfunction);

						for(var i=0; i< LevelsTech[11]; i++)
						{
							if (  (parseFloat(listLab[listLab.length-i-1]) == parseInt(listLab[listLab.length-i-1])) && !isNaN(listLab[listLab.length-i-1])  )
							{
								laboTot+= listLab[listLab.length-i-1];
							}
						}


						/*
						for (var ff = 0; ff < technology.length ; ff++)
						{
							//function afficheCout(f, lvlElement, position, bati)
							afficheCout(ff,  false, false);
						}
						*/

						var pointsInutile =0;
						var pointstechInutile = 0;

						if (LevelsTech[1] > 12) // laser
						{
							pointsInutile+= Math.floor(prixInitial[1]*(Math.pow(2,LevelsTech[1])-1)*1000)/1000 - 1228.5;
							pointstechInutile+= LevelsTech[1] -12 ;
						}
						if (LevelsTech[2] > 25) // ions
						{
							pointsInutile+= Math.floor(prixInitial[2]*(Math.pow(2,LevelsTech[2])-1)*1000)/1000 - 43.4;
							pointstechInutile+= LevelsTech[2] -5 ;
						}

						if (LevelsTech[12] > 1) // Graviton
						{
							pointstechInutile+= LevelsTech[12] -1 ;
						}

						var PointsTech =0;
						for (var i=0 ; i<LevelsTech.length ; i++)
						{
							PointsTech+=parseInt(LevelsTech[i]);
						}

						if(options.generale.Techno_utile)
						{
							var affiche ='';
							affiche +='<div><br/><table style="margin:auto;">';

							affiche +='<div><table id="IFC_top" style="clear:right; margin:auto; text-align:center;"><tr ><th style="width:675px; font-size: 12px; font-weight: bold; color: #539fc8; line-height: 30px; height: 30px;" background="'+background+'" colspan="4" >'+text.Technology+'</th><th class="IFC_th" ></th><th class="IFC_th2"></th></tr></table><center><table id="IFC_mid" width="657px" background="'+background2+'" background-color="#0d1014">';
							affiche +='<tr ><th width="4px"></th><th style="width:70px; '+th_style+'" >'+text.utile+'</th><th style="'+th_style+'" >'+ addPoints(Math.round(pointRecherche-pointsInutile)) +' '+text.Points+' ('+Math.round(PointsTech-pointstechInutile)+' '+text.Technologies+')</th><th style="width:200px; border:1px solid black;" rowspan="2" id="piebox"></th></tr>';
							affiche +='<tr ><th width="4px"></th><th style="width:70px; '+th_style+'" >'+text.inutile+'</th><th style="'+th_style+'" >'+ addPoints(Math.round(pointsInutile)) +' '+text.Points+' ('+pointstechInutile+' '+text.Technologies+')</th><th width="4px"></th></tr>';
							affiche +='</table><table id="IFC_down" width="663px" background="'+background3+'" height="22px"></table></div><br/><br/><br/><br/>';

							affiche +='</table></div>';

							var sp1 = document.createElement("span");
							sp1.setAttribute("id", "newDivIFC");
							var sp1_content = document.createTextNode('');
							sp1.appendChild(sp1_content);
							var sp2 = document.getElementById("middle");
							var parentDiv = sp2.parentNode;
							//parentDiv.insertBefore(sp1, sp2.nextSibling);
							sp2.append(sp1);

							var tableau = document.createElement("span");
							tableau.innerHTML = '<br/><br/>'+affiche;
							document.getElementById('newDivIFC').insertBefore(tableau, document.getElementById('newDivIFC').firstChild);


							var pie = draw_pie([pourcent(pointsInutile,pointRecherche),pourcent(pointRecherche-pointsInutile,pointRecherche)]);
							var piebox = document.getElementById('piebox');
							piebox.appendChild(pie);
						}

						GM_setValue(nomScript+"pointTechnoUni"+coordPM+serveur,Math.round(pointRecherche)+';'+pointsInutile);
						GM_setValue(nomScript+"nivTechno"+coordPM+serveur, listeNiv );


						if(resEncontruction > -1  )
						{
							if(parseInt(Res_const.split('|')[1]) <  start_time || isNaN(Res_const.split('|')[1]) || Res_const.split('|')[0] != nom_techno[resEncontruction]) // si le joueur utilise plusieurs ordi
							{Res_const = '|';}

							if (Res_const == '|')
							{
								var prix = Math.floor((coutBati[resEncontruction][0]+coutBati[resEncontruction][1])*(Math.pow(exposant[resEncontruction],LevelsTech[resEncontruction]))*1000);
								var timeFin =  Math.round(start_time + (prix / (1000 * (1 + laboTot)))/speedUni*3600000 *coefIng) ;

								Res_const = nom_techno[resEncontruction] + '|'+timeFin ;
							}
						}
						else Res_const ='|';

						//if (GM_getValue(nomScript+domain, 'PAS') != 'PAS')  // TechTree visité
						GM_setValue(nomScript+"Res_const"+coordPM+serveur,Res_const);

						/*
						if (options.generale.langue == 'fr')
						{
							var det = document.getElementById('details123');
							if( det.getElementsByClassName('ago_items_text ago_items_textName ago_text_background')[0] )
							{
								det.getElementsByClassName('ago_items_text ago_items_textName ago_text_background')[0].innerHTML = "RRI";
							}
							det = document.getElementById('details111');
							if( det.getElementsByClassName('ago_items_text ago_items_textName ago_text_background')[0] )
							{
								det.getElementsByClassName('ago_items_text ago_items_textName ago_text_background')[0].innerHTML = "Protection";
							}
						}
						*/
					}

					// ***********************************************************************************************
					// *********************************************************** Page Bâtiments / ressources   *****
					// ***********************************************************************************************

					else if ((url.indexOf('page=ingame&component=supplies',0))>=0)
					{
						var plapla = document.getElementById("planet-"+document.getElementsByName('ogame-planet-id')[0].content);

						var tdnode = document.getElementsByClassName('level');
						var coutBati = new Array(new Array(0.06,0.015,0),new Array(0.048,0.024,0),new Array(0.225,0.075,0),new Array(0.075,0.030,0),new Array(0.9,0.360,0.18),new Array(0,2,0.5),new Array(1,0,0),new Array(1,0.5,0),new Array(1,1,0),new Array(2.645,0,0),new Array(2.645,1.322,0),new Array(2.645,2.645,0));

						var nom_bat = new Array('mmet', 'mcri' , 'mdet', 'ces', 'cef','sat', 'hmet', 'hcri', 'hdet');

						var exposant = new Array(1.5,1.6,1.5,1.5,1.8,1,2,2,2, 2.3, 2.3, 2.3);

						var niv = new Array(0,0,0,0,0,0,0,0,0,0,0,0);

						// level du batiment
						niv[0] = getAmountOfShip('metalMine', 'level');
						niv[1] = getAmountOfShip('crystalMine', 'level');
						niv[2] = getAmountOfShip('deuteriumSynthesizer', 'level');
						niv[3] = getAmountOfShip('solarPlant', 'level');
						niv[4] = getAmountOfShip('fusionPlant', 'level');
						niv[5] = getAmountOfShip('solarSatellite', 'amount');
						//niv[6] = getAmountOfShip('resbuggy', 'amount');
						niv[6] = getAmountOfShip('metalStorage', 'level');
						niv[7] = getAmountOfShip('crystalStorage', 'level');
						niv[8] = getAmountOfShip('deuteriumStorage', 'level');

						var crawler = IsMoon ? 0 : getAmountOfShip('resbuggy', 'amount');

						var nivPlanete = niv.join('|')+'|';
						BatRes[numeroplanete] = nivPlanete;

						GM_setValue(nomScript+"BatRes"+coordPM+serveur,BatRes.join(";"));

						//afficher les prix
						//function afficheCout(f, lvlElement, position, bati)
						afficheCout(0, niv[0], 0, true);
						afficheCout(1, niv[1], 1, true);
						afficheCout(2, niv[2], 2, true);
						afficheCout(3, niv[3], 3, true);
						afficheCout(4, niv[4], 4, true);
						afficheCout(6, niv[6], 5, true);
						afficheCout(7, niv[7], 6, true);
						afficheCout(8, niv[8], 7, true);

						var bonusMax = bonusMaxPlanete(niv[0], niv[1], niv[2]);

						if(!IsMoon) afficheMaxCrawler(bonusMax,1);
						//batiment en construction
						var batEncontruction = -1;
						var coeff = 1;

						var bat_li = document.getElementsByClassName('technology') ;
						for (var f = 0; f < 9 ; f++)
						{
							var countdown_length = bat_li[f].getElementsByClassName('countdown').length;
							if(countdown_length == 1) // Batiment en construction
							{
								if(f != 5 && f != 6)
								{
									if( f < 5 )
									{
									   batEncontruction = f;
									}
									else
									{
										batEncontruction = f - 2;
									}
									/*
									var targetlevel = parseInt(bat_li[f].getElementsByClassName('targetlevel')[0].dataset.value);
									var precedentlevel = parseInt(bat_li[f].getElementsByClassName('level')[0].dataset.value);
									if(targetlevel - precedentlevel < 0)//destruction
									{
										coeff = 2.25;
									}
									*/
									coeff = coefDestruction(bat_li[f]);
								}
								//console.log("precedentlevel "+precedentlevel+" targetlevel "+targetlevel+" coeff "+coeff);
							}
						}
						//console.log(batEncontruction);
						//batiment en construction
						if(batEncontruction > -1 )
						{
							if(parseInt(BatRes_const[numeroplanete].split('|')[1]) <  start_time || isNaN(BatRes_const[numeroplanete].split('|')[1]) || nom_bat[batEncontruction]!= BatRes_const[numeroplanete].split('|')[0])
								{BatRes_const[numeroplanete] = '|'; }

							if (BatRes_const[numeroplanete] == '|')
							{
								var prix = Math.floor((coutBati[batEncontruction][0]+coutBati[batEncontruction][1])*(Math.pow(exposant[batEncontruction],niv[batEncontruction]))*1000);

								var timeFin = Math.round(start_time + ((prix/5000)*(2/(1+parseInt(BatSta[numeroplanete].split('|')[0])))*(1/Math.pow(2,parseInt(BatSta[numeroplanete].split('|')[5])))/speedUni)*3600000/coeff) ;

								BatRes_const[numeroplanete] = nom_bat[batEncontruction] + '|'+timeFin ;

								if(BatSta_const[numeroplanete] !='|')
								{
									if(BatSta_const[numeroplanete].split('|')[1] >  start_time) // Construction encore en cour, => on efface
									{
										BatSta_const[numeroplanete] ='|';
										GM_setValue(nomScript+"BatSta_const"+coordPM+serveur,BatSta_const.join(';'));
									}
								}
							}
						}
						else BatRes_const[numeroplanete] ='|';

						//if (GM_getValue(nomScript+domain, 'PAS') != 'PAS')  // TechTree visité
						GM_setValue(nomScript+"BatRes_const"+coordPM+serveur,BatRes_const.join(';'));

						// ******************************Affichage des graphiques ********************************

						if(options.generale.graphProd )
						{
							var prod = new Array();

							// ******************************Production********************************
							var maxPercentageCrawler = percentageCrawler(niv[0], niv[1], niv[2], crawler);

							prod[0]= 30*speedUni+prodMetal  (niv[0], Techno[4], positionplanete , 0, maxPercentageCrawler, Geolog);
							prod[1]= 15*speedUni+prodCristal(niv[1], Techno[4], positionplanete , 0, maxPercentageCrawler, Geolog);
							prod[2]=             prodDeut   (niv[2], Techno[4], 20              , 0, maxPercentageCrawler, Geolog);

							var totProd = prod[0]+prod[1]+prod[2];

							//console.log("prod[0] "+maxPercentageCrawler);
							if(totProd != 0 && !IsMoon)
							{
								var tableGraph = '<div class="content-box-s"><div class="header"><h3>'+text.Production+'</h3></div><div class="content"> '
									+	'<table cellspacing="0" cellpadding="0" class="construction"> <tbody><tr>'
									+	'<td class="idle" id="IFCGraph" colspan="2"> </td></tr> </tbody></table></div><div class="footer"></div></div>'

								var newElement = document.createElement("div"); // On crée un nouvelle élément div
								newElement.innerHTML = tableGraph; // On écrit le code source qu'il contient

								document.getElementById('middle').appendChild(newElement);

								var pie = draw_pie([pourcent(prod[0],totProd),pourcent(prod[1],totProd),pourcent(prod[2],totProd)]);
								var piebox = document.getElementById('IFCGraph');
								piebox.appendChild(pie);
							}
						}
					}

					// ***********************************************************************************************
					// *********************************************************** Page Bâtiments / Station   ********
					// ***********************************************************************************************

					else if ((url.indexOf('page=ingame&component=facilities',0))>=0)
					{
						var exposant = new Array(2,2,2,2,2,2,2,5);
						var niv = new Array(0,0,0,0,0,0,0,0,0,0,0);
						var nivPlanete ='';

						if (IsMoon)
						{
							var coutBati = new Array(new Array(0.4,0.12,0.2),new Array(0.4,0.2,0.1),new Array(20,40,20),new Array(20,40,20),new Array(2000,4000,2000));
							var nom_bat = new Array('rob','cspa', 'base', 'phal', 'port');

							niv[0] = getAmountOfShip('roboticsFactory',     'level');
							niv[1] = getAmountOfShip('technology shipyard', 'level');//technology car il y a shipyard pour l'id de la page
							niv[2] = getAmountOfShip('moonbase',            'level');
							niv[3] = getAmountOfShip('sensorPhalanx',       'level');
							niv[4] = getAmountOfShip('jumpGate',            'level');

							afficheCout(0, niv[0], 0, true);
							afficheCout(1, niv[1], 1, true);
							afficheCout(2, niv[2], 2, true);
							afficheCout(3, niv[3], 3, true);
							afficheCout(4, niv[4], 4, true);

							nivPlanete = niv[0]+'|'+niv[1]+'|0|0|0|0|0|0|'+niv[2]+'|'+niv[3]+'|'+niv[4]+'|'+IsMoon+'|';
						}
						else
						{
							var coutBati = new Array(new Array(0.4,0.12,0.2),new Array(0.4,0.2,0.1),new Array(0.2,0.4,0.2),new Array(20,40,0),new Array(20,20,1),new Array(1000,500,100),new Array(0,50,100),new Array(0.2, 0, 0.050));
							var nom_bat = new Array('rob','cspa','lab', 'depo', 'silo', 'nan',  'ter', 'dock' );

							niv[0] = getAmountOfShip('roboticsFactory',    'level');
							niv[1] = getAmountOfShip('technology shipyard','level');
							niv[2] = getAmountOfShip('researchLaboratory', 'level');
							niv[3] = getAmountOfShip('allianceDepot',      'level');
							niv[4] = getAmountOfShip('missileSilo',        'level');
							niv[5] = getAmountOfShip('naniteFactory',      'level');
							niv[6] = getAmountOfShip('terraformer',        'level');
							niv[7] = getAmountOfShip('repairDock',         'level');

							afficheCout(0, niv[0], 0, true);
							afficheCout(1, niv[1], 1, true);
							afficheCout(2, niv[2], 2, true);
							afficheCout(3, niv[3], 3, true);
							afficheCout(4, niv[4], 4, true);
							afficheCout(5, niv[5], 5, true);
							afficheCout(6, niv[6], 6, true);
							afficheCout(7, niv[7], 7, true);

							for(var ii =0 ; ii< coutBati.length ; ii++)
							{
								nivPlanete += niv[ii] +'|';
							}
							nivPlanete += '0|0|0|'+IsMoon+'|';
						}

						BatSta[numeroplanete] = nivPlanete ;

						GM_setValue(nomScript+"BatSta"+coordPM+serveur,BatSta.join(";"));

						var batEncontruction = -1;
						var coeff = 1;

						var bat_li = document.getElementsByClassName('technology') ;
						for (var f = 0; f < 5 ; f++)
						{
							var countdown_length = bat_li[f].getElementsByClassName('countdown').length;
							if(countdown_length == 1) // Batiment en construction
							{
								batEncontruction = f;

								coeff = coefDestruction(bat_li[f]);
								//console.log(" coeff "+coeff);
							}
						}

						BatSta[numeroplanete] = nivPlanete ;

						GM_setValue(nomScript+"BatSta"+coordPM+serveur,BatSta.join(";"));

						if(batEncontruction > -1)
						{
							if(parseInt(BatSta_const[numeroplanete].split('|')[1]) <  start_time || isNaN(BatSta_const[numeroplanete].split('|')[1]) || nom_bat[batEncontruction] != BatSta_const[numeroplanete].split('|')[0]) {BatSta_const[numeroplanete] = '|';}

							if (BatSta_const[numeroplanete] == '|')
							{
								var prix = Math.floor((coutBati[batEncontruction][0]+coutBati[batEncontruction][1])*(Math.pow(2,niv[batEncontruction]))*1000);

								var timeFin =  Math.round( start_time + ((prix/5000)*(2/(1+parseInt(nivPlanete.split('|')[0])))*(1/Math.pow(2,parseInt(nivPlanete.split('|')[5])))/speedUni)*3600000) ;

								BatSta_const[numeroplanete] = nom_bat[batEncontruction] + '|'+timeFin;

								if(BatRes_const[numeroplanete] !='|')
								{
									if(BatRes_const[numeroplanete].split('|')[1] >  start_time) // Construction encore en cour, => on efface
									{
										BatRes_const[numeroplanete] ='|';
										GM_setValue(nomScript+"BatRes_const"+coordPM+serveur,BatRes_const.join(';'));
									}
								}
							}
						}
						else BatSta_const[numeroplanete] ='|';
						GM_setValue(nomScript+"BatSta_const"+coordPM+serveur,BatSta_const.join(';'));
					}

					// ***********************************************************************************************
					// *********************************************************** Page Flotte Movement  *************
					// ***********************************************************************************************

					else if ((url.indexOf('page=ingame&component=movement',0))>=0)
					{
						/*
						var niv = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0);//14 éléments, sonde compris
						var listeFlotte = document.getElementsByClassName('fleetinfo');
						var listeVaisseau ='';
						var nom_vaisseau = GM_getValue(nomScript+domain,'PAS').split('|')[0].split(';');
						var prixFlotteVol = 0;
						var pointFlotteVol = 0;
						var pointFlotteTotal = GM_getValue(nomScript+"pointFlotte"+coordPM+serveur,0);

						var prix_vaisseau = new Array(4,12,4,10,29,60,40,18,1,90,2.5,125,10000,85);

						for (var i=0 ; i<listeFlotte.length ; i++)
						{
							listeVaisseau = listeFlotte[i].getElementsByTagName('td');

							for(var f=0; f<listeVaisseau.length-6 ; f++)
							{

								for (var j=0; j< nom_vaisseau.length -1; j++)
								{
									//alert(trim(listeVaisseau[f].innerHTML).substring(0, trim(listeVaisseau[f].innerHTML).length-1));
									if( trim(listeVaisseau[f].innerHTML).substring(0, trim(listeVaisseau[f].innerHTML).length-1) == trim(nom_vaisseau[j]) )
									{
										prixFlotteVol += parseInt(listeVaisseau[f+1].innerHTML.replace( /[^0-9-]/g, "")*prix_vaisseau[j]);//+1 pour avoir le nombre
										pointFlotteVol += parseInt(listeVaisseau[f+1].innerHTML.replace( /[^0-9-]/g, ""));
										niv[j] += parseInt(listeVaisseau[f+1].innerHTML.replace( /[^0-9-]/g, ""));
										//alert(niv[j]+"---"+j+"--"+f+"---"+trim(nom_vaisseau[j]));

									}
								}
							}
						}

						if( options.generale.VaisseauxVol && prixFlotteVol > 0)
						{

							var affiche ='<br/><br/><div style="clear:both;margin-top: 0px; margin-right:0px;"><table id="IFC_top" style="clear:right; width:675px; margin:auto;margin-bottom: -2px; text-align:center;"><tr ><th style="width:675px; font-size: 12px; font-weight: bold; color: #539fc8; line-height: 30px; height: 30px;" background="'+background+'" colspan="4" >'+text.Fleet+'</th><th></th><th class="IFC_th2"></th></tr></table><center><table id="IFC_mid" width="657px" background="'+background2+'" background-color="#0d1014">';
							affiche +='<tr ><th width="4px"></th><th style="width:70px; '+th_style+'" >'+text.en_vol+'</th><th class="tooltipRight js_hideTipOnMobile"  TITLE="'+pointFlotteVol+' '+text.vaisseaux+'" >'+ addPoints(prixFlotteVol) +' '+text.Points+' ('+pourcent(prixFlotteVol,pointFlotteTotal)+' %) </th><th style="width:200px; border:1px solid black;" rowspan="2" id="piebox"></th></tr>';
							affiche +='<tr ><th width="4px"></th><th style="width:70px; '+th_style+'" >'+text.aQuai+'</th><th style="'+th_style+'" >'+ addPoints(pointFlotteTotal-prixFlotteVol) +' '+text.Points+' ('+pourcent(pointFlotteTotal-prixFlotteVol,pointFlotteTotal)+' %)</th><th width="4px"></th></tr>';
							affiche +='</table><table id="IFC_down" width="663px" background="'+background3+'" height="22px"></table><br/><br/><br/><br/>';


							var sp1 = document.createElement("div");
								sp1.setAttribute("id", "newDivIFC");
							var sp1_content = document.createTextNode('');
								sp1.appendChild(sp1_content);
							if (document.getElementsByClassName("fleetDetails detailsOpened")[0]) var sp2 = document.getElementsByClassName("fleetDetails detailsOpened")[document.getElementsByClassName("fleetDetails detailsOpened").length-1];
							else var sp2 = document.getElementsByClassName("fleetStatus")[0];
							var parentDiv = sp2.parentNode;
								parentDiv.insertBefore(sp1, sp2.nextSibling);

							var tableau = document.createElement("div");
								tableau.innerHTML = affiche;
								document.getElementById('inhalt').appendChild(tableau);

							var pie = draw_pie([pourcent(pointFlotteTotal-prixFlotteVol,pointFlotteTotal),pourcent(prixFlotteVol,pointFlotteTotal)]);
							var piebox = document.getElementById('piebox');
								piebox.appendChild(pie);
						}

						if( options.generale.saveFleet)
						{
							flotte[0] = niv.join("|");
							GM_setValue(nomScript+"flotte"+coordPM+serveur,flotte.join(";"));
						}
						*/
					}

					// ***********************************************************************************************
					// *********************************************************** Page shipyard *********************
					// ***********************************************************************************************

					else if((url.indexOf('page=ingame&component=shipyard',0))>=0 )
					{

						var niv = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0);

						niv[0] =  getAmountOfShip('transporterSmall', 'amount');
						niv[1] =  getAmountOfShip('transporterLarge', 'amount');
						niv[2] =  getAmountOfShip('fighterLight', 'amount');
						niv[3] =  getAmountOfShip('fighterHeavy', 'amount');
						niv[4] =  getAmountOfShip('cruiser', 'amount');
						niv[5] =  getAmountOfShip('battleship', 'amount');
						niv[6] =  getAmountOfShip('colonyShip', 'amount');
						niv[7] =  getAmountOfShip('recycler', 'amount');
						niv[8] =  getAmountOfShip('espionageProbe', 'amount');
						niv[9] =  getAmountOfShip('bomber', 'amount');
						niv[10] = getAmountOfShip('solarSatellite', 'amount');
						niv[11] = getAmountOfShip('destroyer', 'amount');
						niv[12] = getAmountOfShip('deathstar', 'amount');
						niv[13] = getAmountOfShip('interceptor', 'amount');
						niv[14] = getAmountOfShip('reaper', 'amount');
						niv[15] = getAmountOfShip('explorer', 'amount');
						niv[16] = IsMoon ? 0 : getAmountOfShip('resbuggy', 'amount');

						var bat = BatRes[numeroplanete].split('|');

						var bonusMax = bonusMaxPlanete(bat[0], bat[1], bat[2]);
						if(!IsMoon) afficheMaxCrawler(bonusMax,16);

						var listeFlotte = niv.join('|')+'|';

						flotte[numeroplanete+1] = listeFlotte;
						if(options.generale.saveFleet) GM_setValue(nomScript+"flotte"+coordPM+serveur,flotte.join(";"));

						//if (GM_getValue(nomScript+domain, 'PAS') != 'PAS')  // TechTree visité
						GM_setValue(nomScript+"Def_const"+coordPM+serveur,Def_const.join(';'));
					}

					// ***********************************************************************************************
					// *********************************************************** Page Flotte ***********************
					// ***********************************************************************************************

					else if((url.indexOf('page=ingame&component=fleetdispatch',0))>=0 && options.generale.saveFleet)
					{
						if(!document.getElementById('warning'))
						{
							var flotte_sav  = GM_getValue(nomScript+"flotte"+coordPM+serveur,'0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;').split(';');
							//console.log("flotte_sav "+flotte_sav[numeroplanete]);

							var niv = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0);

							flotte_sav[numeroplanete];//

							niv[0] = getAmountOfShip('transporterSmall', 'amount');
							niv[1] = getAmountOfShip('transporterLarge', 'amount');
							niv[2] = getAmountOfShip('fighterLight', 'amount');
							niv[3] = getAmountOfShip('fighterHeavy', 'amount');
							niv[4] = getAmountOfShip('cruiser', 'amount');
							niv[5] = getAmountOfShip('battleship', 'amount');
							niv[6] = getAmountOfShip('colonyShip', 'amount');
							niv[7] = getAmountOfShip('recycler', 'amount');
							niv[8] = getAmountOfShip('espionageProbe', 'amount');
							niv[9] = getAmountOfShip('bomber', 'amount');
							niv[10] = flotte_sav[numeroplanete][10] //getAmountOfShip('solarSatellite', 'amount');
							niv[11] = getAmountOfShip('destroyer', 'amount');
							niv[12] = getAmountOfShip('deathstar', 'amount');
							niv[13] = getAmountOfShip('interceptor', 'amount');
							niv[14] = getAmountOfShip('reaper', 'amount');
							niv[15] = getAmountOfShip('explorer', 'amount');
							niv[16] = flotte_sav[numeroplanete][16] //IsMoon ? 0 : getAmountOfShip('resbuggy', 'amount');

							var listeFlotte = niv.join('|')+'|';

							flotte[numeroplanete+1] = listeFlotte;
							if(options.generale.saveFleet) GM_setValue(nomScript+"flotte"+coordPM+serveur,flotte.join(";"));

							//if (GM_getValue(nomScript+domain, 'PAS') != 'PAS')  // TechTree visité
							GM_setValue(nomScript+"Def_const"+coordPM+serveur,Def_const.join(';'));

							/*
						if (!document.getElementById('movements')) {flotte[0]='0|0|0|0|0|0|0|0|0|0|0|0|0|0|';}; // Pas de flotte en vol

						if (!document.getElementsByClassName('level')[0] )
						{
							flotte[numeroplanete+1]='0|0|0|0|0|0|0|0|0|0|0|0|0|'+flotte[numeroplanete+1].split('|')[13]+'|';
						} // Pas de flotte a quai
						else
						{

							var niv = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0);

							var niveau ='';
							var bati ='';
							var niveaux = document.getElementsByClassName('level') ;

							var nom_vaisseau = GM_getValue(nomScript+domain,'PAS').split('|')[0].split(';');

							for (var f=0; f<niv.length-1 ; f++)
							{
								if(typeof(niveaux[f].getElementsByClassName('textlabel')[0])=="undefined")
								{
									//niveau = niveaux[f].innerHTML;
								}
								else
								{
									niveau = niveaux[f].innerHTML;
									var label = niveaux[f].getElementsByClassName('textlabel')[0];

									for (var j=0; j< nom_vaisseau.length; j++)
									{
										if(trim(label.innerHTML) == trim(nom_vaisseau[j])  )
										{
											//alert(label.innerHTML+"---"+nom_vaisseau[j]+"---"+label.innerHTML.indexOf(nom_vaisseau[j]));
											bati = niveaux[f].getElementsByClassName('textlabel')[0].innerHTML;
											niveau = niveau.replace(bati, '').replace(/<span class="textlabel"><\/span>/i, '');
											niv[j]=parseInt(niveau.replace( /[^0-9-]/g, ""));

										}
									}
								}
							}
							flotte[numeroplanete+1] =niv.join("|");

						}
						if(options.generale.saveFleet)
						{
							GM_setValue(nomScript+"flotte"+coordPM+serveur,flotte.join(";"));
						}
						*/
						}
					}

					// ***********************************************************************************************
					// *********************************************************** Page Statistique  *****************
					// ***********************************************************************************************

					else if ( (new RegExp(/page=(statistics|highscore)/)).test(url))
					{
						var points=(GM_getValue(nomScript+"pointsTotal"+coordPM+serveur,'0|0|0')+'').split('|');

						var pointTot    = parseInt(points[0]);
						var pointIndest = parseInt(points[1]);
						var pointConst  = parseInt(points[2]);

						var statEnre = new Array();

						function chercheStat()
						{
							var inhalt_score = document.getElementById('inhalt').getElementsByClassName('score');
							if(inhalt_score && document.getElementById('points').className.indexOf('active') >-1 && document.getElementById('player').className.indexOf('active') >-1 )
							{ // si dans les stats points

								var table = inhalt_score[0];
								if(!table || table.getAttribute("done141121") == "done") return;
								table.setAttribute("done141121","done");

								if ( document.getElementById('inhalt').getElementsByClassName('myrank').length > 0 )
								{
									pointTot = document.getElementById('inhalt').getElementsByClassName('myrank')[0].getElementsByClassName('score')[0].firstChild.nodeValue.replace( /[^0-9-]/g, "");
								}
								else
								{
									pointTot = parseInt(points[0]);
								}

								var rank = (GM_getValue(nomScript+'rankIndes'+coordPM+serveur,'0|0')+'').split('|');
								for( var i=1; i< inhalt_score.length-1 ; i++)
								{
									inhalt_score[i].title = addPoints(parseInt(inhalt_score[i].innerHTML.replace( /[^0-9-]/g, "")) - pointTot);
									inhalt_score[i].className +=' tooltipRight js_hideTipOnMobile';

									if (pointIndest <= parseInt(inhalt_score[i]  .firstChild.nodeValue.replace( /[^0-9-]/g, ""))
									&&  pointIndest >= parseInt(inhalt_score[i+1].firstChild.nodeValue.replace( /[^0-9-]/g, "")))
									{
										rank[0]=document.getElementById('inhalt').getElementsByClassName('position')[i].innerHTML.replace( /[^0-9-]/g, "");
											GM_setValue(nomScript+'rankIndes'+coordPM+serveur, rank.join('|'));

									}

									if (pointConst <= parseInt(inhalt_score[i]  .firstChild.nodeValue.replace( /[^0-9-]/g, ""))
									 && pointConst >= parseInt(inhalt_score[i+1].firstChild.nodeValue.replace( /[^0-9-]/g, "")))
									{
										rank[1]=document.getElementById('inhalt').getElementsByClassName('position')[i+1].innerHTML.replace( /[^0-9-]/g, "");
										GM_setValue(nomScript+'rankIndes'+coordPM+serveur, rank.join('|'));
									}
								}
							}
						}
						setInterval(chercheStat, 500);
					}

					// ***********************************************************************************************
					// *********************************************************** Page Vue Générale  ****************
					// ***********************************************************************************************

					else if ((url.indexOf('page=ingame&component=overview',0))>=0)
					{
						var AJours = (GM_getValue(nomScript+"aJours",'true')+'' == 'true' ? true : false);

						// ********************************* Points total  *****************************************
						var tdnode = document.getElementsByTagName('script');

						var sentence1 =  "index.php?page=highscore";
						var decalagePoint = 2;
						var sentence2 = "(";
						var sentence3 = ")";
						var nbJoueur='';

						for (var i=0 ; i<tdnode.length ; i++)
						{
							var pos1 = (tdnode[i].innerHTML).indexOf(sentence1);
							var pos3 = (tdnode[i].innerHTML).indexOf(sentence2,10);

							if (pos1>=0)
							{
								var pos2 = (tdnode[i].innerHTML).indexOf(sentence2,pos1+sentence1.length);
								var PointsTotal = (tdnode[i].innerHTML).substring(pos1+sentence1.length+decalagePoint,pos2);

								PointsTotal=parseInt(PointsTotal.replace( /[^0-9-]/g, ""));

								listeNombre  = (tdnode[i].innerHTML).slice((tdnode[i].innerHTML).indexOf(sentence1)+sentence1.length +decalagePoint, (tdnode[i].innerHTML).indexOf(')',(tdnode[i].innerHTML).indexOf(sentence1)+sentence1.length +decalagePoint )).split(/[^0-9\.]/).join('|').split(/\|{1,}/);

								var totRanked = listeNombre[1];

								nbJoueur = listeNombre[2];
								GM_setValue(nomScript+"nbjoueur"+serveur , nbJoueur);
							}
						}

						if(DefPla[nbPlanet] != '|||||||||||||' && url.indexOf('page=ingame&component=overview') != -1 ) // Evite bug disparition des planetes ??
						{
						//	alert('erase nb planet :'+ nbPlanet);
						//	if(confirm('probleme: une planete en trop \n lune : '+nbLune+' / planete : '+nbPlanet+ '\n\n Delete data about this planet ?'))
							{
							DefPla[nbPlanet] = '|||||||||||||'; GM_setValue(nomScript+"DefPlanete"+coordPM+serveur,DefPla.join(';'));
							BatRes[nbPlanet] = '|||||||||||||'; GM_setValue(nomScript+"BatRes"+coordPM+serveur,BatRes.join(';'));
							BatSta[nbPlanet] = '|||||||||||||'; GM_setValue(nomScript+"BatSta"+coordPM+serveur,BatSta.join(';'));
							flotte[nbPlanet+1] = '|||||||||||||'; GM_setValue(nomScript+"flotte"+coordPM+serveur,flotte.join(';'));
							BatRes_const[nbPlanet] = '|';
							BatSta_const[nbPlanet] = '|';
							//Def_const[nbPlanet]= '|';
							GM_setValue(nomScript+"BatSta_const"+coordPM+serveur,BatSta_const.join(';'));
							GM_setValue(nomScript+"BatRes_const"+coordPM+serveur,BatRes_const.join(';'));
							//GM_setValue(nomScript+"Def_const"+coordPM+serveur,Def_const.join(';'));
							}
							var erreur = 'probleme: une planete en trop \n lune : '+nbLune+' / planete : '+nbPlanet;
						}

						//var DATA = new Array();
						DATA.planet = new Array();

						DATA.info =
						{
							player : pseudo,
							coordPM : CoordPM,
							serveur : serveur,
							speed : speedUni,
							points : (GM_getValue(nomScript+"pointsTotal"+coordPM+serveur,'0|0')+'').split('|')[0],
							BatSta_const : BatSta_const,
							BatRes_const : BatRes_const,
							idplanet : GM_getValue(nomScript+'idPlanet'+IdJoueur+serveur , '10;'),
							numeroPlanete : numeroplanete,
							geolog :Geolog,
							pointsFleet : GM_getValue(nomScript+"pointFlotte"+coordPM+serveur,'')
						}
						var f = 0;
						var prixInitial_defEtFlotteSansDeut = {'cle':4,'clo':10,'crois':27,'vb':60,'traq':70,'bb':75,'dest':115,'rip':9000,'pt':4,'gt':12,'vc':30,'rec':16,'esp':1,'sat':2,'reaper':160,'pathfinder':31,'crawler':5,         'lm':2,'lle':2,'llo':8,'gauss':35,'ion':8,'pla':100,'pb':20,'gb': 100,'mic':8,'mip':15};
						//var prixInitial_defEtFlotteSansDeut = {'cle':4,'clo':10,'crois':27,'vb':60,'traq':70,'bb':75,'dest':115,'rip':9000,'pt':4,'gt':12,'vc':30,'rec':16,'esp':1,'sat':2,  'lm':2,'lle':2,'llo':8,'gauss':35,'ion':8,'pla':100,'pb':20,'gb': 100,'mic':8,'mip':15};
						var prixInitial_defEtFlotte = {'cle':4,'clo':10,'crois':29,'vb':60,'traq':85,'bb':90,'dest':125,'rip':10000,'pt':4,'gt':12,'vc':40,'rec':18,'esp':1,'sat':2.5,'mic':10, 'mip':25,'lm':2,'lle':2,'llo':8,'gauss':37,'ion':8,'pla':130,'pb':20,'gb':100};

						var nom_flotte = new Array(	'pt',	'gt',	'cle',	'clo',	'crois',	'vb',	'vc',	'rec',	'esp',	'bb',	'sat',	'dest',	'rip',	'traq', 'reaper', 'pathfinder', 'crawler'	);
						var nom_def = new Array('lm', 'lle', 'llo', 'gauss', 'ion', 'pla', 'pb', 'gb', 'mic', 'mip');
						var prixInitial_def        = new Array(2,2   ,8,37,8,130,20,100,10,25);

						var prixInitial_defMetal   = new Array(2,1.5 ,6,20,2,50 ,10,50 ,8 ,12.5);
						var prixInitial_defCristal = new Array(0,0.5 ,2,15,6,50 ,10,50 ,0 ,2.5);
						var prixInitial_defDeut    = new Array(0,0   ,0,2 ,0,30 ,0 ,0  ,2 ,10);

						var nom_techno = new Array('espi', 'ordi', 'arme', 'bouc', 'prot', 'ener', 'hype', 'comb', 'impu', 'phyp', 'lase', 'ions', 'plas', 'rese', 'astro');
						var OrdreTech = {'espi':0, 'ordi':1, 'arme':2, 'bouc':3, 'prot':4, 'ener':5, 'hype':6, 'comb':7, 'impu':8, 'phyp':9, 'lase':10, 'ions':11, 'plas':12, 'rese':13, 'astro':14}

						var prixInitial_tech        = new Array(1.4, 1,   1,   0.8, 1,  1.2, 6, 1,   6.6, 36, 0.3, 1.4, 7,   800,16);
						var prixInitial_techMetal   = new Array(0.2 ,0   ,0.8 ,0.2 ,1  ,0   ,0 ,0.4 ,2 ,  10 ,0.2 ,1   ,2,   240 ,4);
						var prixInitial_techCristal = new Array(1   ,0.4 ,0.2 ,0.6 ,0  ,0.8 ,4 ,0   ,4 ,  20 ,0.1 ,0.3 ,4,   400 ,8);
						var prixInitial_techDeut    = new Array(0.2 ,0.6 ,0   ,0   ,0  ,0.4 ,2 ,0.6 ,0.6, 6  ,0   ,0.1 ,1,   160 ,4);

						var exposant_tech = new Array(2,2,2,2,2,2,2,2,2,2,2,2,2,2,1.75);

						var nom_bat = new Array(          'mmet', 'mcri' , 'mdet', 'ces', 'cef', 'nan', 'lab', 'ter', 'silo', 'depo', 'cspa','rob', 'hmet', 'hcri', 'hdet', 'base', 'phal', 'port', 'dock');
						//var prixInitial_bat             = new Array(0.075, 0.072,     0.3  ,0.105,   1.44, 1600, 0.8, 150, 41, 60, 0.7, 0.720,1, 1.5, 2, 80,  80, 8000,  2);
						var prixInitial_bat             = new Array(0.075, 0.072,     0.3,  0.105,   1.44, 1600, 0.8, 150, 41, 60, 0.7, 0.72 ,1, 1.5, 2, 80,  80, 8000, 0.25);
						var prixInitial_batMineMetal   = new Array(0.060, 0.048,     0.225,0.075,   0.9  ,1000,  0.2 ,   0    , 20,     20,     0.4,  0.4    ,1,      1,      1,       20,     20,    2000 , 0.2);
						var prixInitial_batMineCristal = new Array(0.015, 0.024,     0.075,0.03 ,   0.36 ,500 ,  0.4 ,   50   , 20,     40,     0.2,  0.12   ,0,      0.5,    1,       40,     40,    4000 , 0);
						var prixInitial_batMineDeut    = new Array(0    , 0    ,     0    ,0    ,   0.18 ,100 ,  0.2 ,   100  , 1 ,     0,      0.1,  0.2    ,0,      0,      0,       20,     20,    2000 , 0.05);
						//var exposant = new Array(1.5,1.6,1.5,1.5,1.8,2,2,2,2,2,2,2,2,2,2,2,2,2,2.3,2.3,2.3);
						var exposant = new Array(1.5,1.6,1.5,1.5,1.8,2,2,2,2,2,2,2,2,2,2,2,2,2,5);

						var OrdreBat = {'mmet':0, 'mcri':1 , 'mdet':2, 'ces':3, 'cef':4, 'nan':5, 'lab':6, 'ter':7, 'silo':8, 'depo':9, 'cspa':10,'rob':11, 'hmet':12, 'hcri':13, 'hdet':14, 'base':15, 'phal':16, 'port':17, 'dock':18}

						var Constructing = 0;
						var ConstructingPla = 0;
						//var listeMinepact='';

						for (var i=0 ; i< nbPlanet; i++)
						{
							DATA.planet[i] =
							{
								moon : BatSta[i].split('|')[11],
                                //pos : 15,
								building :
								{
									'mmet': BatRes[i].split('|')[0] ,
									'mcri': BatRes[i].split('|')[1] ,
									'mdet': BatRes[i].split('|')[2],
									'ces': BatRes[i].split('|')[3],
									'cef': BatRes[i].split('|')[4],
									'hmet': BatRes[i].split('|')[6],
									'hcri': BatRes[i].split('|')[7],
									'hdet': BatRes[i].split('|')[8],

									'nan': BatSta[i].split('|')[5],
									'lab': BatSta[i].split('|')[2],
									'ter': BatSta[i].split('|')[6],
									'silo': BatSta[i].split('|')[4],
									'depo': BatSta[i].split('|')[3],
									'cspa': BatSta[i].split('|')[1],
									'rob': BatSta[i].split('|')[0],
									'dock': BatSta[i].split('|')[7],

									'base':BatSta[i].split('|')[8],
									'phal':BatSta[i].split('|')[9],
									'port':BatSta[i].split('|')[10]
								},
								defense:
								{
									'lm' : DefPla[i].split('|')[0] ,
									'lle': DefPla[i].split('|')[1] ,
									'llo': DefPla[i].split('|')[2] ,
									'gauss': DefPla[i].split('|')[3] ,
									'ion': DefPla[i].split('|')[4] ,
									'pla': DefPla[i].split('|')[5] ,
									'pb': DefPla[i].split('|')[6] ,
									'gb': DefPla[i].split('|')[7] ,
									'mic': DefPla[i].split('|')[8] ,
									'mip': DefPla[i].split('|')[9]
								},
								fleet:
								{
									'pt':flotte[i+1].split('|')[0],
									'gt':flotte[i+1].split('|')[1],
									'cle':flotte[i+1].split('|')[2],
									'clo':flotte[i+1].split('|')[3],
									'crois':flotte[i+1].split('|')[4],
									'vb':flotte[i+1].split('|')[5],
									'vc':flotte[i+1].split('|')[6],
									'rec':flotte[i+1].split('|')[7],
									'esp':flotte[i+1].split('|')[8],
									'bb':flotte[i+1].split('|')[9],
									'sat':BatRes[i].split('|')[5],//flotte[i+1].split('|')[13]
									'dest':flotte[i+1].split('|')[11],
									'rip':flotte[i+1].split('|')[12],
									'traq':flotte[i+1].split('|')[13],
									'reaper':flotte[i+1].split('|')[14],
									'pathfinder':flotte[i+1].split('|')[15],
									'crawler':flotte[i+1].split('|')[16]

								},
								booster:
								{
									'met': boost[i].split('|')[0],
									'cri': boost[i].split('|')[1],
									'det': boost[i].split('|')[2]
								},
								resource:
								{
									prod:
									{
										'm': 0,
										'c': 0,
										'd': 0
									}
								}
							};

							for(var n=0 ; n<nom_bat.length ; n++)
							{
								if(isNaN(parseInt(DATA.planet[i].building[nom_bat[n]]))) DATA.planet[i].building[nom_bat[n]]='00';
							}
							for(var n=0 ; n<nom_def.length ; n++)
							{
								if(isNaN(parseInt(DATA.planet[i].defense[nom_def[n]]))) DATA.planet[i].defense[nom_def[n]]='00';
							}
							for(var n=0 ; n<nom_flotte.length ; n++)
							{
								if(isNaN(parseInt(DATA.planet[i].fleet[nom_flotte[n]]))) DATA.planet[i].fleet[nom_flotte[n]]='00';
								//console.log(DATA.planet[i].fleet[nom_flotte[n]]);
							}


							if (!Lune[i])
							{
                                var ogame_version  = document.getElementsByName('ogame-version')[0].content;
								//console.log(ogame_version.indexOf("6.0."));
								if(ogame_version.indexOf("6.0.") > -1)//6.0
								{
									var tmppp = document.getElementsByClassName('smallplanet')[f].getElementsByTagName('a')[0].title.split('</B>')[0];
									DATA.planet[i].name = tmppp.split(tmppp.indexOf('<B>(') > -1 ? ')' : '<B>')[1];
								}
								else//6.1
								{
									var tmppp = document.getElementsByClassName('smallplanet')[f].getElementsByTagName('a')[0].title.split('</b>')[0];
									DATA.planet[i].name = tmppp.split(tmppp.indexOf('<b>(') > -1 ? ')' : '<b>')[1];
								}
                                //console.log("DATA.planet[i].name "+DATA.planet[i].name);
                                var nomplanetecoord = DATA.planet[i].name;
                                DATA.planet[i].pos = nomplanetecoord.split(':')[2].replace("]","");

                                //console.log("nomplanetecoord "+nomplanetecoord);
                                //console.log("DATA.planet[i].pos "+DATA.planet[i].pos);

								var tempM = planets[f].innerHTML.split('°C')[1].replace( /[^0-9-]/g, "");

								DATA.planet[i].resource.temp =  parseInt(tempM);
								DATA.planet[i].resource.tempmin = parseInt(planets[f].innerHTML.split(')')[1].split('°C')[0].replace( /[^0-9-]/g, ""));

								var n=0;
								if(planets[f].innerHTML.split(/\s?([\(\)])\s?/)[2].indexOf('overmark') > -1) n=1;

								DATA.planet[i].resource.taille = planets[f].innerHTML.split(/\s?([\(\)])\s?/)[2].split('/')[1+n];
								DATA.planet[i].resource.tailleConst = planets[f].innerHTML.split(/\s?([\(\)])\s?/)[2].split('/')[0].replace( /[^0-9-]/g, "");


								if ( parseInt(document.getElementsByName('ogame-planet-id')[0].content) == parseInt(planets[f].id.split('-')[1]) ) // si la planete actuel
								{
									var  buffBar = document.getElementById("buffBar");

									var coeffbostermetal = 0;
									var coeffbostercristal = 0;
									var coeffbosterdeut = 0;

									if ( buffBar.innerHTML.indexOf("de922af379061263a56d7204d1c395cefcfb7d75")  != -1) coeffbostermetal = 10;
									if ( buffBar.innerHTML.indexOf("ba85cc2b8a5d986bbfba6954e2164ef71af95d4a")  != -1) coeffbostermetal = 20;
									if ( buffBar.innerHTML.indexOf("05294270032e5dc968672425ab5611998c409166")  != -1) coeffbostermetal = 30;
                                    if ( buffBar.innerHTML.indexOf("a83cfdc15b8dba27c82962d57e50d8101d263cfb")  != -1) coeffbostermetal = 40;

									if ( buffBar.innerHTML.indexOf("3c9f85221807b8d593fa5276cdf7af9913c4a35d")  != -1) coeffbostercristal = 10;
									if ( buffBar.innerHTML.indexOf("422db99aac4ec594d483d8ef7faadc5d40d6f7d3")  != -1) coeffbostercristal = 20;
									if ( buffBar.innerHTML.indexOf("118d34e685b5d1472267696d1010a393a59aed03")  != -1) coeffbostercristal = 30;
                                    if ( buffBar.innerHTML.indexOf("35d96e441c21ef112a84c618934d9d0f026998fd")  != -1) coeffbostercristal = 40;

									if ( buffBar.innerHTML.indexOf("d9fa5f359e80ff4f4c97545d07c66dbadab1d1be")  != -1) coeffbosterdeut = 10;
									if ( buffBar.innerHTML.indexOf("e4b78acddfa6fd0234bcb814b676271898b0dbb3")  != -1) coeffbosterdeut = 20;
									if ( buffBar.innerHTML.indexOf("5560a1580a0330e8aadf05cb5bfe6bc3200406e2")  != -1) coeffbosterdeut = 30;
                                    if ( buffBar.innerHTML.indexOf("4b51d903560edd102467b110586000bd64fdb954")  != -1) coeffbosterdeut = 40;

									boost[i] = coeffbostermetal+'|'+coeffbostercristal+'|'+coeffbosterdeut;

									GM_setValue(nomScript+"boost"+coordPM+serveur,boost.join(';'));
								}
								var crawler = DATA.planet[i].fleet.crawler;
								var maxPercentageCrawler = percentageCrawler(DATA.planet[i].building['mmet'], DATA.planet[i].building['mcri'], DATA.planet[i].building['mdet'], crawler);

								DATA.planet[i].resource.prod.d = prodDeut(DATA.planet[i].building['mdet'], Techno[4], tempM, boost[i].split('|')[2], maxPercentageCrawler, Geolog);

								f++;
							}
							else
							{
								if(   document.getElementsByClassName('moonlink  tooltipLeft tooltipClose js_hideTipOnMobile').length > 0 )
								{
									var tmppp = document.getElementsByClassName('smallplanet')[f-1].getElementsByTagName('a')[1].title.split('</b>')[0];
									DATA.planet[i].name = tmppp.split(tmppp.indexOf('<b>(') > -1 ? ')' : '<b>')[1];
								}
								else
								{
									DATA.planet[i].name = text.Lune+' '+document.getElementsByClassName('planet-koords')[f-1].innerHTML ;
								}

								DATA.planet[i].resource.temp = 0;
								DATA.planet[i].resource.tempmin =0;
								DATA.planet[i].resource.taille ='0';

                                var nomplanetecoord = DATA.planet[i].name;
                                DATA.planet[i].pos = nomplanetecoord.split(':')[2].replace("]","");
							}

							if(BatRes_const[i] != '|'  ||  BatSta_const[i] != '|')
							{
								var plapla = document.getElementById("planet-"+idPlanete[i]);
								var coeff = 1;
								if(plapla !== null )
								{
									// 1 => construction  2.25 => destruction
									coeff = plapla.getElementsByClassName("icon12px icon_wrench_red").length > 0 ? 2.25 : 1;
								}

								if(BatRes_const[i] != '|') // Ressource en construction
								{
									if( parseInt(BatRes_const[i].split('|')[1]) < start_time)
									{
										DATA.planet[i].building[BatRes_const[i].split('|')[0]] = parseInt(DATA.planet[i].building[BatRes_const[i].split('|')[0]])+1;
									}
									else
									{
										var cout = prixInitial_bat[OrdreBat[BatRes_const[i].split('|')[0]]] *Math.pow( exposant[OrdreBat[BatRes_const[i].split('|')[0]]], parseInt(DATA.planet[i].building[BatRes_const[i].split('|')[0]]));

										Constructing+= cout/coeff;
										if(i==numeroplanete) ConstructingPla+= cout/coeff;
									}
								}

								if(BatSta_const[i] != '|') // Station en construction
								{
									if( parseInt(BatSta_const[i].split('|')[1]) < start_time)
									{
										DATA.planet[i].building[BatSta_const[i].split('|')[0]] = parseInt(DATA.planet[i].building[BatSta_const[i].split('|')[0]])+1;
									}
									else
									{
										var cout = prixInitial_bat[OrdreBat[BatSta_const[i].split('|')[0]]] *Math.pow( exposant[OrdreBat[BatSta_const[i].split('|')[0]]], parseInt(DATA.planet[i].building[BatSta_const[i].split('|')[0]]));
										Constructing+= cout/coeff;

										if(i==numeroplanete) ConstructingPla+= cout/coeff;
									}
								}
							}
							var finiConst = false;

							if(Def_const[i] != '|') // Defense en construction
							{
								var timeStartConstruction = parseInt(Def_const[i].split('-')[0]) ;

								aff+=Def_const[i]+'\n';

								for (var e=1 ; e<Def_const[i].split('-').length ; e++)
								{
									if(Def_const[i].split('-')[e])
									{
										var nom = Def_const[i].split('-')[e].split('|')[1];
										var nombre = isNaN(Def_const[i].split('-')[e].split('|')[0]) ? 0 : parseInt(Def_const[i].split('-')[e].split('|')[0]);

										if(timeStartConstruction < start_time)
										{
											var tempsParDef = Math.max(Math.floor(((prixInitial_defEtFlotteSansDeut[nom]/5000)*(2/(1+parseInt(DATA.planet[i].building['cspa'])))*(1/Math.pow(2,parseInt(DATA.planet[i].building['nan'])))/speedUni)*3600000) , 1) *1000 ;

											var nbDefConstruite = Math.min(Math.floor((start_time-timeStartConstruction)/tempsParDef), nombre );

											if( !isNaN(DATA.planet[i].defense[nom]))
												DATA.planet[i].defense[nom] = parseInt(DATA.planet[i].defense[nom])+ Math.round(nbDefConstruite) ;

											Constructing+= ( nombre - nbDefConstruite) * prixInitial_defEtFlotte[nom] ;

											if(i==numeroplanete) ConstructingPla+= ( nombre - nbDefConstruite) * prixInitial_defEtFlotte[nom] ;

											timeStartConstruction+= tempsParDef* nombre ;

										}
										else
										{
											Constructing +=  nombre * prixInitial_defEtFlotte[nom];

											if(i==numeroplanete) ConstructingPla+= nombre * prixInitial_defEtFlotte[nom]; ;

										}
									}
								}

								if(timeStartConstruction < start_time) finiConst = true;
							}

							if(finiConst)
							{
								Def_const[i] = '|';
								GM_setValue(nomScript+"Def_const"+coordPM+serveur,Def_const.join(';'));

								DefPla[i]= DATA.planet[i].defense.lm+'|'+DATA.planet[i].defense.lle+'|'+DATA.planet[i].defense.llo+'|'+DATA.planet[i].defense.gauss+
								'|'+DATA.planet[i].defense.ion+'|'+DATA.planet[i].defense.pla+'|'+DATA.planet[i].defense.pb+'|'+DATA.planet[i].defense.gb+'|'+
								DATA.planet[i].defense.mic+'|'+DATA.planet[i].defense.mip ;

								GM_setValue(nomScript+"DefPlanete"+coordPM+serveur, DefPla.join(';'));

							}
						}
						DATA.techno =
						{
							'espi' : Techno[8],
							'ordi': Techno[9],
							'arme': Techno[13],
							'bouc': Techno[14],
							'prot': Techno[15],
							'ener': Techno[0],
							'hype': Techno[3],
							'comb': Techno[5],
							'impu': Techno[6],
							'phyp': Techno[7],
							'lase': Techno[1],
							'ions': Techno[2],
							'plas': Techno[4],
							'rese': Techno[11],
							'expe': Techno[16],
							'astro': Techno[10],
							'grav' : Techno[12]
						};

						DATA.fleet=
						{
							'pt':flotte[0].split('|')[0],
							'gt':flotte[0].split('|')[1],
							'cle':flotte[0].split('|')[2],
							'clo':flotte[0].split('|')[3],
							'crois':flotte[0].split('|')[4],
							'vb':flotte[0].split('|')[5],
							'vc':flotte[0].split('|')[6],
							'rec':flotte[0].split('|')[7],
							'esp':flotte[0].split('|')[8],
							'bb':flotte[0].split('|')[9],
							'sat':flotte[0].split('|')[10],
							'dest':flotte[0].split('|')[11],
							'rip':flotte[0].split('|')[12],
							'traq':flotte[0].split('|')[13],
							'reaper':flotte[0].split('|')[14],
							'pathfinder':flotte[0].split('|')[15],
							'crawler':flotte[0].split('|')[16]

						};


						if (FireFox  || Tamper) unsafeWindow.ifcDATA = DATA;
						//alert(DATA.techno[Res_const.split('|')[0]]+"--"+Res_const);
						if(Res_const != '|')
						{
							if( parseInt(Res_const.split('|')[1]) < start_time)
							{
								DATA.techno[Res_const.split('|')[0]] = parseInt(DATA.techno[Res_const.split('|')[0]])+1;
							}
							else {Constructing += prixInitial_tech[OrdreTech[Res_const.split('|')[0]]] *Math.pow( exposant_tech[OrdreTech[Res_const.split('|')[0]]], parseInt(DATA.techno[Res_const.split('|')[0]]));}
						}

						// ********************************* Options  *****************************************

						CouleurGraph = options.couleur.graphA+','+options.couleur.graphB+','+options.couleur.graphC+','+options.couleur.graphD+','+options.couleur.graphE;

						if(options.generale.BatTotal)
						{
							options.generale.AutreBat = false;
							options.generale.mine = false;
						}
						else
						{
							options.generale.AutreBat = true;
							options.generale.mine = true;
						}

						{// ********************************* Calcul des points  *****************************************



						var PointsBatimentsTotal =0;
						var PointsMinesTotal=0;
						var PointsDefTotal=0;
						var pointLuneTotal = 0;
						var PointsTechno= 0;
						var PointsTechnoMetal= 0;
						var PointsTechnoCristal= 0;
						var PointsTechnoDeut= 0;

						var PointsBatimentsTotalP        =new Array();
						var PointsBatimentsTotalMetalP   =new Array();
						var PointsBatimentsTotalCristalP =new Array();
						var PointsBatimentsTotalDeutP    =new Array();

						var PointsMinesTotalP        =new Array();
						var PointsMinesTotalMetalP   =new Array();
						var PointsMinesTotalCristalP =new Array();

						var PointsMinesMetalTotal= 0;
						var PointsMinesCristalTotal= 0;
						var PointsMinesDeutTotal= 0;
						var PointsBatMetalTotal= 0;
						var PointsBatCristalTotal= 0;
						var PointsBatDeutTotal= 0;

						var PointsDefTotalP       =new Array();
						var PointsDefTotalMetalP  =new Array();
						var PointsDefTotalCristalP=new Array();
						var PointsDefTotalDeutP   =new Array();


						var manqueBat='';
						var manqueDef='';
						var manqueMine='';

						var prod = new Array(0,0,0);
						var prodConstructing = new Array(0,0,0);
						var prodbrute = new Array(0,0,0);
						var listeRes ='';
						var coefArrondi = 1000;
						var lvlplasma = parseInt(DATA.techno['plas']);
						var lvllaser = parseInt(DATA.techno['lase']);
						var lvlenergie = parseInt(DATA.techno['ener']);
						var lvlions = parseInt(DATA.techno['ions']);

						var lvlespio = parseInt(DATA.techno['espi']);
						var lvlimpu  = parseInt(DATA.techno['impu']);

						if( Res_const.split('|')[0] == "plas" && Res_const.split('|')[1] > start_time) //En construction
						{
							lvlplasma += 1;
						}


						for (var f=0; f<DATA.planet.length ; f++)
						{
							// ******************************Production********************************
							var mm = parseInt(DATA.planet[f].building['mmet']);
							var mc = parseInt(DATA.planet[f].building['mcri']);
							var md = parseInt(DATA.planet[f].building['mdet']);
							var crawler = DATA.planet[f].fleet.crawler;
							var maxPercentageCrawler = percentageCrawler(mm, mc, md, crawler);

							DATA.planet[f].resource.prod.m = prodMetal(   mm, DATA.techno['plas'] , DATA.planet[f].pos,  boost[f].split('|')[0], maxPercentageCrawler, Geolog);
                            //console.log(DATA.planet[f].name +" ------ "+DATA.planet[f].resource.prod.m+" --------- "+);
							DATA.planet[f].resource.prod.c = prodCristal( mc, DATA.techno['plas'] , DATA.planet[f].pos,  boost[f].split('|')[1], maxPercentageCrawler, Geolog);

							//console.log("maxPercentageCrawler "+maxPercentageCrawler);

							prod[0]+= DATA.planet[f].resource.prod.m;
							prod[1]+= DATA.planet[f].resource.prod.c;
							prod[2]+= DATA.planet[f].resource.prod.d;


							prodbrute[0] += prodMetal  ( mm, DATA.techno['plas'] , DATA.planet[f].pos, 0, 0, maxPercentageCrawler, Geolog);
							prodbrute[1] += prodCristal( mc, DATA.techno['plas'] , DATA.planet[f].pos, 0, maxPercentageCrawler, Geolog);
							prodbrute[2] += prodDeut   ( md, DATA.techno['plas'] , DATA.planet[f].resource.temp, 0, maxPercentageCrawler, Geolog);
							//console.log(DATA.planet[f].building['mdet']+"--"+speedUni+"--"+DATA.techno['plas']+"--"+DATA.planet[f].resource.temp);

							if( BatRes_const[f].split('|')[1] > start_time && BatRes_const[f].split('|')[0] == "mmet")
							{
								prodConstructing[0] += prodMetal(mm+1 , lvlplasma,DATA.planet[f].pos , boost[f].split('|')[0], maxPercentageCrawler, Geolog);
							}
							else
							{
								prodConstructing[0] += prodMetal(mm , lvlplasma,DATA.planet[f].pos , boost[f].split('|')[0], maxPercentageCrawler, Geolog);
							}

                            if( BatRes_const[f].split('|')[1] > start_time && BatRes_const[f].split('|')[0] == "mcri")
							{
								prodConstructing[1] += prodCristal(mc+1 , lvlplasma ,DATA.planet[f].pos, boost[f].split('|')[1], maxPercentageCrawler, Geolog);
							}
							else
							{
								prodConstructing[1] += prodCristal(mc , lvlplasma ,DATA.planet[f].pos, boost[f].split('|')[1], maxPercentageCrawler, Geolog);
							}

							if( BatRes_const[f].split('|')[1] > start_time && BatRes_const[f].split('|')[0] == "mdet" )
							{
								prodConstructing[2] += prodDeut(parseInt(DATA.planet[f].building[BatRes_const[f].split('|')[0]])+1, lvlplasma, DATA.planet[f].resource.temp ,	boost[f].split('|')[2], maxPercentageCrawler, Geolog);
							}
							else
							{
								prodConstructing[2] += DATA.planet[f].resource.prod.d;
							}

							if(DATA.planet[f].moon=='false')
							{
								prod[0] += 30*speedUni;
								prod[1] += 15*speedUni;
								prodConstructing[0] += 30*speedUni;
								prodConstructing[1] += 15*speedUni;

								prodbrute[0] += 30*speedUni;
								prodbrute[1] += 15*speedUni;

							}

							// ******************************Batiment********************************
							if (DATA.planet[f].building[nom_bat[0]]+''=='00' || (DATA.planet[f].moon=='true' && DATA.planet[f].building[nom_bat[0]] != 0)) { manqueMine +=  '<a href="'+url.split('&cp=')[0].replace('ingame&component=overview','ingame&component=supplies')+('&cp='+idPlanete[f]).replace('&cp=a','')+'">' +DATA.planet[f].name+'</a> | ' ;}
							if (DATA.planet[f].building[nom_bat[5]]+''=='00' || (DATA.planet[f].moon=='true' && DATA.planet[f].building[nom_bat[0]] != 0)) { manqueBat +=  '<a href="'+url.split('&cp=')[0].replace('ingame&component=overview','ingame&component=facilities')+('&cp='+idPlanete[f]).replace('&cp=a','')+'">' +DATA.planet[f].name+'</a> | ' ;}
							if (DATA.planet[f].defense[nom_def[0]]+''=='00')  {manqueDef +=  '<a href="'+url.split('&cp=')[0].replace('ingame&component=overview','ingame&component=defenses')+('&cp='+idPlanete[f]).replace('&cp=a','')+'">' +DATA.planet[f].name+'</a> | ' ;}

							PointsBatimentsTotalP[f]=0;
							PointsBatimentsTotalMetalP[f]=0;
							PointsBatimentsTotalCristalP[f]=0;
							PointsBatimentsTotalDeutP[f]=0;


							PointsMinesTotalP[f]=0;
							PointsMinesTotalMetalP[f]=0;
							PointsMinesTotalCristalP[f]=0;

							PointsDefTotalP[f]=0;

							PointsDefTotalMetalP[f]=0;
							PointsDefTotalCristalP[f]=0;
							PointsDefTotalDeutP[f]=0;

								function arrondiBat(n)
								{
									return Math.floor(n*1000)/1000 ;
								}

							for (var i = 0 ; i<nom_bat.length; i++)
							{
								var exp_build = (Math.pow(exposant[i],DATA.planet[f].building[nom_bat[i]])-1)/(exposant[i]-1);
								if (i<3)
								{
									//formule cout cumulé
									PointsMinesTotalP[f]       += arrondiBat(prixInitial_bat[i]           *exp_build);
									PointsMinesTotalMetalP[f]  += arrondiBat(prixInitial_batMineMetal[i]  *exp_build);
									PointsMinesTotalCristalP[f]+= arrondiBat(prixInitial_batMineCristal[i]*exp_build);

									PointsMinesMetalTotal      += arrondiBat(prixInitial_batMineMetal[i]  *exp_build);
									PointsMinesCristalTotal    += arrondiBat(prixInitial_batMineCristal[i]*exp_build);
								}
								else
								{
									PointsBatimentsTotalP[f]        += arrondiBat(prixInitial_bat[i]            *exp_build);
									PointsBatimentsTotalMetalP[f]   += arrondiBat(prixInitial_batMineMetal[i]   *exp_build);
									PointsBatimentsTotalCristalP[f] += arrondiBat(prixInitial_batMineCristal[i] *exp_build);
									PointsBatimentsTotalDeutP[f]    += arrondiBat(prixInitial_batMineDeut[i]    *exp_build);

									PointsBatMetalTotal   += arrondiBat(prixInitial_batMineMetal[i]  *exp_build);
									PointsBatCristalTotal += arrondiBat(prixInitial_batMineCristal[i]*exp_build);
									PointsBatDeutTotal    += arrondiBat(prixInitial_batMineDeut[i]   *exp_build);

									if(DATA.planet[f].moon=='true')
										pointLuneTotal += arrondiBat(prixInitial_bat[i] *(Math.pow(exposant[i],DATA.planet[f].building[nom_bat[i]])-1)/(exposant[i]-1));
								}

								// ******************************Defense********************************
								if ( i< nom_def.length)
								{
									PointsDefTotalP[f] += prixInitial_def[i] * DATA.planet[f].defense[nom_def[i]];

									PointsDefTotalMetalP[f]  += prixInitial_defMetal[i]   * DATA.planet[f].defense[nom_def[i]];
									PointsDefTotalCristalP[f]+= prixInitial_defCristal[i] * DATA.planet[f].defense[nom_def[i]];
									PointsDefTotalDeutP[f]   += prixInitial_defDeut[i]    * DATA.planet[f].defense[nom_def[i]];
								}
							}

							PointsBatimentsTotal +=PointsBatimentsTotalP[f];
							PointsMinesTotal+=PointsMinesTotalP[f];
							PointsDefTotal+=PointsDefTotalP[f];
						}

						// ******************************Recherche********************************
						for (var k = 0 ; k< prixInitial_tech.length ; k++)
						{
							PointsTechno        += arrondiBat(prixInitial_tech[k]        * (Math.pow( exposant_tech[k], parseInt(DATA.techno[nom_techno[k]])) -1)/(exposant_tech[k]-1));
							PointsTechnoMetal   += arrondiBat(prixInitial_techMetal[k]   * (Math.pow( exposant_tech[k], parseInt(DATA.techno[nom_techno[k]])) -1)/(exposant_tech[k]-1));
							PointsTechnoCristal += arrondiBat(prixInitial_techCristal[k] * (Math.pow( exposant_tech[k], parseInt(DATA.techno[nom_techno[k]])) -1)/(exposant_tech[k]-1));
							PointsTechnoDeut    += arrondiBat(prixInitial_techDeut[k]    * (Math.pow( exposant_tech[k], parseInt(DATA.techno[nom_techno[k]])) -1)/(exposant_tech[k]-1));

						}
						if (PointsTechno < 0) PointsTechno= -1; // Page message pas visité


						var PointPlanete = Math.round(PointsBatimentsTotalP[numeroplanete]+PointsMinesTotalP[numeroplanete]+PointsDefTotalP[numeroplanete]);

						// ********************************* Prod/Jours  *****************************************

						prod[0]= prod[0]*24;
						prod[1]= prod[1]*24;
						prod[2]= prod[2]*24;

						prodConstructing[0]= prodConstructing[0]*24;
						prodConstructing[1]= prodConstructing[1]*24;
						prodConstructing[2]= prodConstructing[2]*24;

						prodbrute[0]= prodbrute[0]*24;
						prodbrute[1]= prodbrute[1]*24;
						prodbrute[2]= prodbrute[2]*24;

						var PointsFlotteTotal = Math.round( PointsTotal-PointsTechno-PointsMinesTotal-PointsBatimentsTotal-PointsDefTotal);
						GM_setValue(nomScript+"pointFlotte"+coordPM+serveur,PointsFlotteTotal+'');

						PointIndest=Math.round(PointsMinesTotal+PointsBatimentsTotal+PointsTechno-pointLuneTotal);
						pointLuneTotal=Math.round(pointLuneTotal);
						PointsBatimentsTotal=Math.round(PointsBatimentsTotal);
						PointsMinesTotal=Math.round(PointsMinesTotal);
						PointsTechno=Math.round(PointsTechno);
						PointsDefTotal=Math.round(PointsDefTotal);

						GM_setValue(nomScript+"pointsTotal"+coordPM+serveur,PointsTotal+'|'+PointIndest+'|'+(Constructing+PointsTotal));

						var codeImg = 'R0lGODlhEAAQAPUAAChsKDA8EdrtwXvEApjWAYnNAur13EZRKoPJAidsJ8PjmJPTAcTxAIzDSJ3ZAbjJmqPdAZPKTJrVGozMHKfgAbvsALXoAHWRCXTAAqviAa/YepnMRFxlQ73hipSahLrgfJTQJ6ncN63If7PbfKPYOMHhl7HmALbch5+lkXS2BIekB4mtBni3BJTLRGu6AnmTCYzHPpS2Sc7t3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAADIALAAAAAAQABAAAAaOQJlwSCwaE4Bk0igERAzQaARQBDQE2Cy2kSA2FJ3OY1xSmGFDp2b0EXk8qI/m1KLKAK4BiBQKxTgcIAMYdgAYKQEBB4sHiQgDhQMsiZSUBQiRBQsEGSYqiQQFkE0IBQQQK5QUDguYQxOmEBcXLwyrBRNEABsLDhUMwBALG3ZpEpwWFRYEEsVFSEpdTNNFQQA7';

						// ******************************Récuperation des données de reférence*******************************

						var Actuelrank = new Array( totRanked,'v300','v300');


						Actuelrank[3]=(GM_getValue(nomScript+'rankIndes'+coordPM+serveur, '0|0')+'').split('|')[0];
						Actuelrank[4]=(GM_getValue(nomScript+'rankIndes'+coordPM+serveur, '0|0')+'').split('|')[1];

						date = new Date()+ '';

						var dates = date.split(/ /);
						if(text.date.DMY ) date = dates[2] +' '+text.date[dates[1]]+ ' '+ dates[3];
						else date = text.date[dates[1]] +' '+dates[2] + ' '+ dates[3];

						var	PointRef = GM_getValue(nomScript+"PointRef"+coordPM+serveur,''+PointsTotal+';'+date+';'+PointsMinesTotal+';'+PointsBatimentsTotal+';'+PointsTechno+';'+PointsFlotteTotal+';'+PointsDefTotal+';true;'+PointsTotal+';'+(Date.parse(new Date())/1000-2)+';'+start_time+';'+Actuelrank[2]+';'+Actuelrank[1]+';'+Actuelrank[3]+';'+PointIndest+';'+Actuelrank[0]+';;;;').split(/;/);
						if(PointRef[7] == 'true' && manqueBat =='' && manqueDef =='' && manqueMine ==''&& PointsTechno != -1) // Si y'avais rien d'enregistré on enregistre
						{
							GM_setValue(nomScript+"PointRef"+coordPM+serveur,PointsTotal+';'+date+';'+PointsMinesTotal+';'+PointsBatimentsTotal+';'+PointsTechno+';'+PointsFlotteTotal+';'+PointsDefTotal+';false;'+PointsTotal+';'+(Date.parse(new Date()) / 1000)+';'+start_time+';'+Actuelrank[2]+';'+Actuelrank[1]+';'+Actuelrank[3]+';'+PointIndest+';'+Actuelrank[0]+';;;;;;');
						}

						PointRef[0] = parseInt(PointRef[0]);
						PointRef[2] = parseInt(PointRef[2]);
						PointRef[3] = parseInt(PointRef[3]);
						PointRef[4] = parseInt(PointRef[4]);
						PointRef[5] = parseInt(PointRef[5]);
						PointRef[6] = parseInt(PointRef[6]);
						PointRef[10] = parseInt(PointRef[10]);
						PointRef[14] = parseInt(PointRef[14]);

						if(accStartTime<1)
						{
							var PointRefMoy = parseInt(PointRef[8]);
							var DateRefMoy = parseInt(PointRef[9]);
						}
						else
						{
							var PointRefMoy = 0;
							var DateRefMoy = accStartTime/1000;
						}
						}

						{// ****************************** BBCode détaillé  ********************************

						var CoulBBcode = options.couleur.CoulBBcode;

						var size1 = '18';
						var size2 = '22';
						var size3 = '10';
						var center = 'center';
						var centerFin = 'center';

						if(!options.generale.bbcode_center && ! options.generale.baliseCenterHTML)
						{
							center = 'align=center';
							centerFin = 'align';
						}
						if(!options.generale.bbcode_pixel && !options.generale.bbcode_SMF)
						{
							size1 = '150';
							size2 = '180';
							size3 = '60';
						}
						if(options.generale.bbcode_SMF)
						{
							size1 += 'pt';
							size2 += 'pt';
							size3 += 'pt';
						}

						// ****************************** BBCode détaillé  ********************************
						CoulBBcode = options.couleur.CoulBBcode;
						var code= '<textarea style="width:100%;background-color:transparent;color:#999999;text-align:center;" onClick="javascript:this.select();">';
						var listeNiveau ='';
						var totNiv =0;

						code+= '['+center+'][u][size='+size2+']'+text.bbcode.rapport+' '+DATA.info.player+' uni '+numUni+'[/size] \n ';
						code+= text.bbcode.genere+'[color=#'+options.couleur.CoulBBcode+'] '+date+' [/color] by [url=http://vulca.1s.fr/][color=#'+CoulBBcode+']InfoCompte[/color][/url] [color=#'+CoulBBcode+']v'+Version+'[/color][/u][/'+centerFin+']\n\n\n';

						code+= ' [u][size='+size2+'][color=#'+options.couleur.CoulBBcode2+'] '+text.bbcode.empirePoint+' [/color][/size][/u]\n';
						code+= '- '+text.BBcode_mine +' [color=#'+options.couleur.CoulBBcode+']'+addPoints(PointsMinesTotal)+' ( '+pourcent(PointsMinesTotal,PointsTotal)+' %)[/color]\n';
						code+= '- '+text.BBcode_bat +' [color=#'+options.couleur.CoulBBcode+']'+addPoints(PointsBatimentsTotal)+' ( '+pourcent(PointsBatimentsTotal,PointsTotal)+' %)[/color]\n';
						code+= '- '+text.BBcode_fin3 +' [color=#'+options.couleur.CoulBBcode+']'+addPoints(PointsDefTotal)+' ( '+pourcent(PointsDefTotal,PointsTotal)+' %)[/color]\n';
						code+= '- '+text.BBcode_fin1 +' [color=#'+options.couleur.CoulBBcode+']'+addPoints(PointsTechno)+' ( '+pourcent(PointsTechno,PointsTotal)+' %)[/color]\n';
						code+= '- '+text.Bcode_fin2 +' [color=#'+options.couleur.CoulBBcode+']'+addPoints(PointsFlotteTotal) + ' ( '+pourcent(PointsFlotteTotal,PointsTotal)+' %)[/color]\n';
						code+= '[b]'+text.BBcode_debut2+' [color=#'+options.couleur.CoulBBcode+']'+addPoints(PointsTotal)+'[/color] [size='+size3+']( '+text.bbcode.dont+' '+pourcent(PointIndest,PointsTotal)+'% '+text.BBcode_fin5+')[/size][/b]\n\n\n';

						var niveau ='';
						code+= '[u][size='+size2+'][color=#'+options.couleur.CoulBBcode2+']'+text.bbcode.Production+'[/color][/size][/u]\n';
						code+= '[list][*]'+text.tag.m+' : [color=#'+options.couleur.CoulBBcode+'][b]'+addPoints(prod[0])+'[/b][/color]\n';
						code+= '[*]'+text.tag.c+' : [color=#'+options.couleur.CoulBBcode+'][b]'+addPoints(prod[1])+'[/b][/color]\n';
						code+= '[*]'+text.tag.d+' : [color=#'+options.couleur.CoulBBcode+'][b]'+addPoints(prod[2])+'[/b][/color][/list]\n\n\n';

						code+= '[u][size='+size2+'][color=#'+options.couleur.CoulBBcode2+']'+text.bbcode.Taille+'[/color][/size][/u]\n';
						calculPlanete();
						code+= listeNiveauUse+'| [b]'+text.bbcode.UsedField+'[/b] => '+text.Moyenne+' = '+Math.round(10*totNivCase/(nbPlanet-nbLune))/10+'\n';
						code+= listeNiveauMax+'| [b]'+text.bbcode.TotField+'[/b] => '+text.Moyenne+' = '+Math.round(10*totNivCaseMax/(nbPlanet-nbLune))/10+'\n\n\n';

						code+= '[u][size='+size2+'][color=#'+options.couleur.CoulBBcode2+']'+text.bbcode.Structure+' [/color][/size][/u]\n';
						code+= '['+center+'][i][size='+size1+'][color=#'+options.couleur.CoulBBcode+']'+text.bbcode.planet+' [/color][/size][/i][/'+centerFin+']\n';
						code+= '[color=#'+options.couleur.CoulBBcode+'][b][u]'+text.Mines+'[/u][/b][/color]\n';

						calculNiv(0);
						code+= listeNiveau+'| [b]'+text.tag.mmet+'[/b] => '+text.Total+' = '+totNiv+'\n';
						calculNiv(1);
						code+= listeNiveau+'| [b]'+text.tag.mcri+'[/b] => '+text.Total+' = '+totNiv+'\n';
						calculNiv(2);
						code+= listeNiveau+'| [b]'+text.tag.mdet+'[/b] => '+text.Total+' = '+totNiv+'\n\n';

						code+= '[color=#'+options.couleur.CoulBBcode+'][b][u]'+text.bbcode.Stockage+'[/u][/b][/color]\n';
						calculNiv(12);
						code+= listeNiveau+'| [b]'+text.tag.hmet+'[/b] => '+text.Total+' = '+totNiv+'\n';
						calculNiv(13);
						code+= listeNiveau+'| [b]'+text.tag.hcri+'[/b] => '+text.Total+' = '+totNiv+'\n';
						calculNiv(14);
						code+= listeNiveau+'| [b]'+text.tag.hdet+'[/b] => '+text.Total+' = '+totNiv+'\n\n';

						code+= '[color=#'+options.couleur.CoulBBcode+'][b][u]'+text.bbcode.Energie+'[/u][/b][/color]\n';
						calculNiv(4);
						code+= listeNiveau+'| [b]'+text.tag.cef+'[/b] => '+text.Total+' = '+totNiv+'\n';
						calculNiv(3);
						code+= listeNiveau+'| [b]'+text.tag.ces+'[/b] => '+text.Total+' = '+totNiv+'\n';

						totNiv=0;
						for (i=0 ; i<DATA.planet.length ; i++)
						{
							if(DATA.planet[i].moon=='false')
							{
								switch (DATA.planet[i].fleet.sat.length)
								{
								case 1:
									code+= '|__'+DATA.planet[i].fleet.sat+'_' ;
								break;
								case 2:
									code+= '|_'+DATA.planet[i].fleet.sat+'_' ;
								break;
								case 3:
									code+= '|_'+DATA.planet[i].fleet.sat ;
								break;
								default:
									code+= '|'+DATA.planet[i].fleet.sat ;
								break;
								}
								totNiv+= parseInt(DATA.planet[i].fleet.sat);
							}
						}

						code+='| [b]'+text.tag.ss+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+totNiv+'[/color]\n\n';


						code+= '[color=#'+options.couleur.CoulBBcode+'][b][u]'+text.bbcode.Construction+'[/u][/b][/color]\n';
						calculNiv(11);
						code+= listeNiveau+'| [b]'+text.tag.rob+'[/b] => '+text.Total+' = '+totNiv+'\n';
						calculNiv(5);
						code+= listeNiveau+'| [b]'+text.tag.nan+'[/b] => '+text.Total+' = '+totNiv+'\n';
						calculNiv(7);
						code+= listeNiveau+'| [b]'+text.tag.ter+'[/b] => '+text.Total+' = '+totNiv+'\n\n';

						code+= '[color=#'+options.couleur.CoulBBcode+'][b][u]'+text.bbcode.Militaire+'[/u][/b][/color]\n';
						calculNiv(10);
						code+= listeNiveau+'| [b]'+text.tag.cspa+'[/b] => '+text.Total+' = '+totNiv+'\n';
						calculNiv(9);
						code+= listeNiveau+'| [b]'+text.tag.depo+'[/b] => '+text.Total+' = '+totNiv+'\n';
						calculNiv(8);
						code+= listeNiveau+'| [b]'+text.tag.silo+'[/b] => '+text.Total+' = '+totNiv+'\n\n';

						calculNiv(18);
						code+= listeNiveau+'| [b]'+text.tag.dock+'[/b] => '+text.Total+' = '+totNiv+'\n\n';

						code+= '[color=#'+options.couleur.CoulBBcode+'][b][u]'+text.bbcode.Scientifique+'[/u][/b][/color]\n';
						calculNiv(6);
						code+= listeNiveau+'| [b]'+text.tag.lab+'[/b] => '+text.Total+' = '+totNiv+'\n\n';

						code+= '['+center+'][i][size='+size1+'][color=#'+options.couleur.CoulBBcode+'] '+text.bbcode.Lune+' [/color][/size][/i][/'+centerFin+']\n';

						code+= '[color=#'+options.couleur.CoulBBcode+'][b][u]'+text.bbcode.Stockage+'[/u][/b][/color]\n';
						calculNivLune(12);
						code+= listeNiveau+'| [b]'+text.tag.hmet+'[/b] => '+text.Total+' = '+totNiv+'\n';
						calculNivLune(13);
						code+= listeNiveau+'| [b]'+text.tag.hcri+'[/b] => '+text.Total+' = '+totNiv+'\n';
						calculNivLune(14);
						code+= listeNiveau+'| [b]'+text.tag.hdet+'[/b] => '+text.Total+' = '+totNiv+'\n\n';

						code+= '[color=#'+options.couleur.CoulBBcode+'][b][u]'+text.bbcode.Construction+'[/u][/b][/color]\n';
						calculNivLune(11);
						code+= listeNiveau+'| [b]'+text.tag.rob+'[/b] => '+text.Total+' = '+totNiv+'\n';
						calculNivLune(15);
						code+= listeNiveau+'| [b]'+text.tag.base+'[/b] => '+text.Total+' = '+totNiv+'\n\n';

						code+= '[color=#'+options.couleur.CoulBBcode+'][b][u]'+text.bbcode.Militaire+'[/u][/b][/color]\n';
						calculNivLune(10);
						code+= listeNiveau+'| [b]'+text.tag.cspa+'[/b] => '+text.Total+' = '+totNiv+'\n';
						calculNivLune(16);
						code+= listeNiveau+'| [b]'+text.tag.phal+'[/b] => '+text.Total+' = '+totNiv+'\n';
						calculNivLune(17);
						code+= listeNiveau+'| [b]'+text.tag.port+'[/b] => '+text.Total+' = '+totNiv+'\n\n\n';

						var contrCoul = {'espi':options.couleur.CoulBBcode, 'ordi':options.couleur.CoulBBcode, 'arme':options.couleur.CoulBBcode, 'bouc':options.couleur.CoulBBcode, 'prot':options.couleur.CoulBBcode, 'ener':options.couleur.CoulBBcode, 'hype':options.couleur.CoulBBcode, 'comb':options.couleur.CoulBBcode, 'impu':options.couleur.CoulBBcode, 'phyp':options.couleur.CoulBBcode, 'lase':options.couleur.CoulBBcode, 'ions':options.couleur.CoulBBcode, 'plas':options.couleur.CoulBBcode, 'rese':options.couleur.CoulBBcode, 'astro':options.couleur.CoulBBcode};

						if(Res_const != '|')
						{
							if(parseInt(Res_const.split('|')[1]) > start_time)
							{
								contrCoul[Res_const.split('|')[0]] = options.couleur.CoulBBcode2;
							}
						}

						code+= '[u][size='+size2+'][color=#'+options.couleur.CoulBBcode2+']'+text.bbcode.Technology+'[/color][/size][/u]\n\n';
						code+= '[u][b][color=#'+options.couleur.CoulBBcode+']'+text.bbcode.Technologies_de_combat+' [/color][/b][/u] \n';
						code+= '[b]'+text.tag.arme+'[/b]:  [color=#'+contrCoul.arme+']'+DATA.techno.arme+'[/color]\n';
						code+= '[b]'+text.tag.bouc+'[/b]:  [color=#'+contrCoul.bouc+']'+DATA.techno.bouc+'[/color]\n';
						code+= '[b]'+text.tag.prot+'[/b]:  [color=#'+contrCoul.prot+']'+DATA.techno.prot+'[/color]\n';
						code+= '[b]'+text.tag.espi+'[/b]:  [color=#'+contrCoul.espi+']'+DATA.techno.espi+'[/color]\n\n';

						code+= '[u][b][color=#'+options.couleur.CoulBBcode+']'+text.bbcode.Technologies_de_vaisseaux+' [/color][/b][/u] \n';
						code+= '[b]'+text.tag.ordi+'[/b]:  [color=#'+contrCoul.ordi+']'+DATA.techno.ordi+'[/color]\n';
						code+= '[b]'+text.tag.comb+'[/b]:  [color=#'+contrCoul.comb+']'+DATA.techno.comb+'[/color]\n';
						code+= '[b]'+text.tag.impu+'[/b]:  [color=#'+contrCoul.impu+']'+DATA.techno.impu+'[/color]\n';
						code+= '[b]'+text.tag.phyp+'[/b]:  [color=#'+contrCoul.phyp+']'+DATA.techno.phyp+'[/color]\n\n';

						code+= '[u][b][color=#'+options.couleur.CoulBBcode+']'+text.bbcode.Technologies_annexes+' [/color][/b][/u]\n';
						code+= '[b]'+text.tag.ener+'[/b]:  [color=#'+contrCoul.ener+']'+DATA.techno.ener+'[/color]\n';
						code+= '[b]'+text.tag.hype+'[/b]:  [color=#'+contrCoul.hype+']'+DATA.techno.hype+'[/color]\n';
						code+= '[b]'+text.tag.ions+'[/b]:  [color=#'+contrCoul.ions+']'+DATA.techno.ions+'[/color]\n';
						code+= '[b]'+text.tag.lase+'[/b]:  [color=#'+contrCoul.lase+']'+DATA.techno.lase+'[/color]\n';
						code+= '[b]'+text.tag.plas+'[/b]:  [color=#'+contrCoul.plas+']'+DATA.techno.plas+'[/color]\n';
						code+= '[b]'+text.tag.rese+'[/b]:  [color=#'+contrCoul.rese+']'+DATA.techno.rese+'[/color]\n';
						code+= '[b]'+text.tag.expe+'[/b]:  [color=#'+contrCoul.astro+']'+DATA.techno.astro+'[/color]\n';
						code+= '[b]'+text.tag.grav+'[/b]:  [color=#'+options.couleur.CoulBBcode+']'+DATA.techno.grav+'[/color]\n\n\n';

						if(options.generale.saveFleet)
						{
							if (options.generale.langue!= 'fr') code+= '[u][size='+size2+'][color=#'+options.couleur.CoulBBcode2+'].:: '+text.Fleet+' ::.[/color][/size][/u]\n\n';
							else code+= '[u][size='+size2+'][color=#'+options.couleur.CoulBBcode2+'][img]https://infocompte.topraider.eu/image/flotte.jpg[/img][/color][/size][/u]\n\n';

							code+='[u][b][color=#'+options.couleur.CoulBBcode+']'+text.bbcode.vaisseauCivil+' [/color][/b][/u] \n';

							var nbDeVaisseau = new Array();

							nbDeVaisseau[0] = calculFlotte(0);
							code+= '[b]'+text.tag.pt+'[/b]: [color=#'+options.couleur.CoulBBcode+']'+addPoints(nbDeVaisseau[0])+'[/color]\n';

							nbDeVaisseau[1] = calculFlotte(1);
							code+= '[b]'+text.tag.gt+'[/b]: [color=#'+options.couleur.CoulBBcode+']'+addPoints(nbDeVaisseau[1])+'[/color]\n';

							nbDeVaisseau[6] = calculFlotte(6);
							code+= '[b]'+text.tag.vc+'[/b]: [color=#'+options.couleur.CoulBBcode+']'+addPoints(nbDeVaisseau[6])+'[/color]\n';

							nbDeVaisseau[7] = calculFlotte(7);
							code+= '[b]'+text.tag.rec+'[/b]: [color=#'+options.couleur.CoulBBcode+']'+addPoints(nbDeVaisseau[7])+'[/color]\n';

							nbDeVaisseau[8] = calculFlotte(8);
							code+= '[b]'+text.tag.esp+'[/b]: [color=#'+options.couleur.CoulBBcode+']'+addPoints(nbDeVaisseau[8])+'[/color]\n';

							nbDeVaisseau[10] = calculFlotte(10);
							code+= '[b]'+text.tag.ss+'[/b]: [color=#'+options.couleur.CoulBBcode+']'+addPoints(nbDeVaisseau[10])+'[/color]\n\n';


							code+='[u][b][color=#'+options.couleur.CoulBBcode+']'+text.bbcode.vaisseauCombat+' [/color][/b][/u] \n';

							nbDeVaisseau[2] = calculFlotte(2);
							code+= '[b]'+text.tag.cle+'[/b]: [color=#'+options.couleur.CoulBBcode+']'+addPoints(nbDeVaisseau[2])+'[/color]\n';

							nbDeVaisseau[3] = calculFlotte(3);
							code+= '[b]'+text.tag.clo+'[/b]: [color=#'+options.couleur.CoulBBcode+']'+addPoints(nbDeVaisseau[3])+'[/color]\n';

							nbDeVaisseau[4] = calculFlotte(4);
							code+= '[b]'+text.tag.crois+'[/b]: [color=#'+options.couleur.CoulBBcode+']'+addPoints(nbDeVaisseau[4])+'[/color]\n';

							nbDeVaisseau[5] = calculFlotte(5);
							code+= '[b]'+text.tag.vb+'[/b]: [color=#'+options.couleur.CoulBBcode+']'+addPoints(nbDeVaisseau[5])+'[/color]\n';

							nbDeVaisseau[13] = calculFlotte(13);
							code+= '[b]'+text.tag.traq+'[/b]: [color=#'+options.couleur.CoulBBcode+']'+addPoints(nbDeVaisseau[13])+'[/color]\n';

							nbDeVaisseau[9] = calculFlotte(9);
							code+= '[b]'+text.tag.bomb+'[/b]: [color=#'+options.couleur.CoulBBcode+']'+addPoints(nbDeVaisseau[9])+'[/color]\n';

							nbDeVaisseau[11] = calculFlotte(11);
							code+= '[b]'+text.tag.dest+'[/b]: [color=#'+options.couleur.CoulBBcode+']'+addPoints(nbDeVaisseau[11])+'[/color]\n';

							nbDeVaisseau[12] = calculFlotte(12);
							code+= '[b]'+text.tag.edlm+'[/b]: [color=#'+options.couleur.CoulBBcode+']'+addPoints(nbDeVaisseau[12])+'[/color]\n';

							nbDeVaisseau[14] = calculFlotte(14);
							code+= '[b]'+text.tag.reaper+'[/b]: [color=#'+options.couleur.CoulBBcode+']'+addPoints(nbDeVaisseau[14])+'[/color]\n';

							nbDeVaisseau[15] = calculFlotte(15);
							code+= '[b]'+text.tag.pathfinder+'[/b]: [color=#'+options.couleur.CoulBBcode+']'+addPoints(nbDeVaisseau[15])+'[/color]\n';

							nbDeVaisseau[16] = calculFlotte(16);
							code+= '[b]'+text.tag.crawler+'[/b]: [color=#'+options.couleur.CoulBBcode+']'+addPoints(nbDeVaisseau[16])+'[/color]\n\n\n\n';
						}

						code+= '[u][size='+size2+'][color=#'+options.couleur.CoulBBcode2+']'+text.bbcode.Defense+'[/color][/size][/u]\n';
						code+= '['+center+'][i][size='+size1+'][color=#'+options.couleur.CoulBBcode+'] '+text.bbcode.planet+' [/color][/size][/i][/'+centerFin+']\n\n';

						calculDef(0);
						code+= listeNiveau+'| [b]'+text.tag.lm+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n';
						calculDef(1);
						code+= listeNiveau+'| [b]'+text.tag.lle+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n';
						calculDef(2);
						code+= listeNiveau+'| [b]'+text.tag.llo+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n';
						calculDef(4);
						code+= listeNiveau+'| [b]'+text.tag.ion+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n';
						calculDef(3);
						code+= listeNiveau+'| [b]'+text.tag.gauss+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n';
						calculDef(5);
						code+= listeNiveau+'| [b]'+text.tag.pla+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n';
						calculDef(6);
						code+= listeNiveau+'| [b]'+text.tag.pb+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n';
						calculDef(7);
						code+= listeNiveau+'| [b]'+text.tag.gb+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n';
						calculDef(8);
						code+= listeNiveau+'| [b]'+text.tag.mic+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n';
						calculDef(9);
						code+= listeNiveau+'| [b]'+text.tag.mip+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n\n';

						code+= '['+center+'][i][size='+size1+'][color=#'+options.couleur.CoulBBcode+'] '+text.bbcode.Lune+' [/color][/size][/i][/'+centerFin+']\n';

						calculDefLune(0);
						code+= listeNiveau+'| [b]'+text.tag.lm+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n';
						calculDefLune(1);
						code+= listeNiveau+'| [b]'+text.tag.lle+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n';
						calculDefLune(2);
						code+= listeNiveau+'| [b]'+text.tag.llo+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n';
						calculDefLune(4);
						code+= listeNiveau+'| [b]'+text.tag.ion+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n';
						calculDefLune(3);
						code+= listeNiveau+'| [b]'+text.tag.gauss+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n';
						calculDefLune(5);
						code+= listeNiveau+'| [b]'+text.tag.pla+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n';
						calculDefLune(6);
						code+= listeNiveau+'| [b]'+text.tag.pb+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n';
						calculDefLune(7);
						code+= listeNiveau+'| [b]'+text.tag.gb+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n';
						calculDefLune(8);
						code+= listeNiveau+'| [b]'+text.tag.mic+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n';
						calculDefLune(9);
						code+= listeNiveau+'| [b]'+text.tag.mip+'[/b] => '+text.Total+' = [color=#'+options.couleur.CoulBBcode+']'+addPoints(totNiv)+'[/color]\n\n</textarea>';

						// ****************************** BBCode + nb colone pour graphique ********************************

						var BBcode='['+center+'][size='+size2+'][b]'+text.BBcode_debut+'[/b][/size]\n\n[size='+size2+']'+text.BBcode_debut2+'[b][color=#ff0000]'+addPoints(PointsTotal)+'[/color][/b][/size]\n';
						var nbAfficher=0;
						if(options.generale.mine)
						{
							nbAfficher++;
							BBcode+=text.BBcode_mine+"[b][color=#ff0000]"+addPoints(PointsMinesTotal)+"[/color][/b] ("+text.soit+" [b][color=#ff0000]"+pourcent(PointsMinesTotal,PointsTotal)+"[/color][/b] %)\n";
						}
						if(options.generale.AutreBat)
						{
							nbAfficher++;
							BBcode+=text.BBcode_bat+"[b][color=#ff0000]"+addPoints(PointsBatimentsTotal)+"[/color][/b] ("+text.soit+" [b][color=#ff0000]"+pourcent(PointsBatimentsTotal,PointsTotal)+"[/color][/b] %)\n";
						}
						if(options.generale.BatTotal)
						{
							nbAfficher++;
							BBcode+=text.BBcode_batT+"[b][color=#ff0000]"+addPoints(PointsMinesTotal+PointsBatimentsTotal)+"[/color][/b] ("+text.soit+" [b][color=#ff0000]"+pourcent(PointsMinesTotal+PointsBatimentsTotal,PointsTotal)+"[/color][/b] %) \n";
						}

						BBcode+=text.BBcode_fin1+"[b][color=#ff0000]"+addPoints(PointsTechno)+"[/color][/b] ("+text.soit+" [b][color=#ff0000]"+pourcent(PointsTechno,PointsTotal)+"[/color][/b] %)\n";;
						BBcode+=text.Bcode_fin2+"[b][color=#ff0000]"+addPoints(PointsFlotteTotal)+"[/color][/b] ("+text.soit+" [b][color=#ff0000]"+pourcent(PointsFlotteTotal,PointsTotal)+"[/color][/b] %) \n";
						BBcode+=text.BBcode_fin3+="[b][color=#fF0000]"+addPoints(PointsDefTotal)+"[/color][/b] ("+text.soit+" [b][color=#ff0000]"+pourcent(PointsDefTotal,PointsTotal)+"[/color][/b] %) \n\n";
						BBcode+=text.BBcode_fin4+="[b][color=#ff0000]"+addPoints(PointIndest)+"[/color][/b] ("+text.soit+" [b][color=#ff0000]"+pourcent(PointIndest,PointsTotal)+"[/color][/b] %) ";
						BBcode+=text.BBcode_fin5 +'\n';

						if (options.generale.Techno_utile)
						{
							var PointsTechnoInu = (GM_getValue(nomScript+"pointTechnoUni"+coordPM+serveur,'0;0' )+'').split(';')[1];
							BBcode+=text.BBcode_fin42 +"[b][color=#ff0000]"+addPoints(PointsTechnoInu)+" "+text.Points+ "[/color][/b] ("+text.soit+" [b][color=#ff0000]"+pourcent(PointsTechnoInu,PointsTotal)+"[/color][/b] %) \n";
						}

						BBcode+=text.BBcode_fin6+'[b][color=#ff0000]'+addPoints(Math.round((PointsTotal- PointRef[8])/arrondi((Date.parse(new Date())/1000-PointRef[9])/(3600*24))))+ ' [/color][/b]'+text.Point_day+' \n';
						BBcode+= text.Production+' : [b][color=#ff0000]'+addPoints(Math.round((prod[0]+prod[1]+prod[2])/1000))+'[/color][/b] '+text.Point_day+' \n';
						BBcode+="[b]uni "+numUni+"[/b][/"+centerFin+"]";

						if(options.generale.techno) nbAfficher++;
						if(options.generale.flottes) nbAfficher++;
						if(options.generale.Def) nbAfficher++;
						if(options.generale.indestructible) nbAfficher++;
						if(options.generale.constructing) nbAfficher++;

						if( options.generale.baliseCenterHTML)
						{
							BBcode = BBcode.replace(/\[center\]/g, '<center>').replace(/\[\/center\]/g, '</center>');
							code = code.replace(/\[center\]/g, '<center>').replace(/\[\/center\]/g, '</center>');
						}
						}

						{// **************************** export  mine *****************************

						var exportMine= '<textarea style="width:100%;background-color:transparent;color:#999999;text-align:center;" onClick="javascript:this.select();">';
						var compteur = 1;
						var dateAjd = new Date();

						var prod_m_total = 0;
						var prod_c_total = 0;
						var prod_d_total = 0;

						var point_m_total = 0;
						var point_c_total = 0;
						var point_d_total = 0;

						function format(x) {
							if (x==0) {return x;} else {
								var str = x.toString(), n = str.length;

								if (n <4) {return x;} else {
									return ((n % 3) ? str.substr(0, n % 3) + '.' : '') + str.substr(n % 3).match(new RegExp('[0-9]{3}', 'g')).join('.');
								}
							}
						}

						var pseudo = GM_getValue(nomScript+'Pseudo'+serveur , "pseudo#coordPM#CoordPM").split('#')[0];
						exportMine += "[u]"+text.exportm.niveau+" [b][color=#b9ffa3]"+pseudo+"[/color][/b] ( "+serveur_split[0]+" ) "+text.exportm.le+" "+dateAjd.toLocaleString()+" :[/u]\n\n";

						function test(valeur)
						{
							return parseInt(valeur) < 10 ? "0"+valeur: valeur;
						}
						for (i=0 ; i<DATA.planet.length ; i++)
						{
							//console.log("DATA.planet[i].moon "+i+" "+DATA.planet[i].moon);

							if(DATA.planet[i].moon == 'false' )
							{
								var mm = parseInt(DATA.planet[i].building[nom_bat[0]]);
								var mc = parseInt(DATA.planet[i].building[nom_bat[1]]);
								var md = parseInt(DATA.planet[i].building[nom_bat[2]]);

								var temperature =DATA.planet[i].resource.temp;

								if( BatRes_const[i].split('|')[1] > start_time && ( BatRes_const[i].split('|')[0] == "mmet" || BatRes_const[i].split('|')[0] == "mcri" || BatRes_const[i].split('|')[0] == "mdet" ))
								{
									if( BatRes_const[i].split('|')[0] == "mmet" )
									{
										mm += 1;
										exportMine+= text.exportm.planete+' '+test(compteur)+' : [color=cyan]'+text.tag.m+' [b]'+test(mm)+'[/b][/color] [b]/[/b] [color=#b7f1ff]'+text.tag.c+' [b]'+test(mc)+'[/b][/color] [b]/[/b] [color=#ffeb67]'+text.tag.d+' [b]'+test(md)+'[/b][/color] [b]/[/b] [color=#ff7373][b]'+temperature+'[/b]°C[/color]\n';
									}
									if( BatRes_const[i].split('|')[0] == "mcri" )
									{
										mc += 1;
										exportMine+= text.exportm.planete+' '+test(compteur)+' : [color=#f9bd68]'+text.tag.m+' [b]'+test(mm)+'[/b][/color] [b]/[/b] [color=cyan]'+text.tag.c+' [b]'+test(mc)+'[/b][/color] [b]/[/b] [color=#ffeb67]'+text.tag.d+' [b]'+test(md)+'[/b][/color] [b]/[/b] [color=#ff7373][b]'+temperature+'[/b]°C[/color]\n';
									}
									if( BatRes_const[i].split('|')[0] == "mdet" )
									{
										md += 1;
										exportMine+= text.exportm.planete+' '+test(compteur)+' : [color=#f9bd68]'+text.tag.m+' [b]'+test(mm)+'[/b][/color] [b]/[/b] [color=#b7f1ff]'+text.tag.c+' [b]'+test(mc)+'[/b][/color] [b]/[/b] [color=cyan]'+text.tag.d+' [b]'+test(md)+'[/b][/color] [b]/[/b] [color=#ff7373][b]'+temperature+'[/b]°C[/color]\n';
									}
								}
								else
								{
									exportMine+= text.exportm.planete+' '+test(compteur)+' : [color=#f9bd68]'+text.tag.m+' [b]'+test(mm)+'[/b][/color] [b]/[/b] [color=#b7f1ff]'+text.tag.c+' [b]'+test(mc)+'[/b][/color] [b]/[/b] [color=#ffeb67]'+text.tag.d+' [b]'+test(md)+'[/b][/color] [b]/[/b] [color=#ff7373][b]'+temperature+'[/b]°C[/color]\n';
								}
								compteur++;

								var crawler = DATA.planet[i].fleet.crawler;
								var maxPercentageCrawler = percentageCrawler(mm, mc, md, crawler);
//console.log("temperature "+temperature+" crawler "+crawler);
								prod_m_total += prodMetal  (mm, lvlplasma, DATA.planet[i].pos, 0, maxPercentageCrawler, 1) + 30*speedUni;
								prod_c_total += prodCristal(mc, lvlplasma, DATA.planet[i].pos , 0, maxPercentageCrawler, 1) + 15*speedUni;
								prod_d_total += prodDeut   (md, lvlplasma, temperature, 0, maxPercentageCrawler, 1);

								point_m_total += Math.floor((75 *  (1 - Math.pow(1.5, mm) / (-(1.5-1))))/1000);
								point_c_total += Math.floor((72 *  (1 - Math.pow(1.6, mc) / (-(1.6-1))))/1000);
								point_d_total += Math.floor((300 * (1 - Math.pow(1.5, md) / (-(1.5-1))))/1000);

								//console.log("prod_m_total "+prod_m_total);
							}
						}

						point_mine = point_m_total + point_c_total + point_d_total;

						exportMine += "\n"+text.exportm.pointsminesm+" : [b][color=#b9ffa3]"+format(point_m_total)+"[/color][/b]";
						exportMine += "\n"+text.exportm.pointsminesc+" : [b][color=#b9ffa3]"+format(point_c_total)+"[/color][/b]";
						exportMine += "\n"+text.exportm.pointsminesd+" : [b][color=#b9ffa3]"+format(point_d_total)+"[/color][/b]";
						exportMine += "\n"+text.exportm.pointsmines+" : [b][color=#b9ffa3]"+format(point_mine)+"[/color][/b]";
						if( Res_const.split('|')[0] == "plas" )
						{
							exportMine += "\n"+text.tag.plas+" : [b][color=cyan]"+lvlplasma+"[/color][/b]\n";
						}
						else
						{
							exportMine += "\n"+text.tag.plas+" : [b][color=#b9ffa3]"+lvlplasma+"[/color][/b]\n";
						}

							//console.log(prod_m_total);

						exportMine += "\n"+text.exportm.parheure+" : [color=#f9bd68][b]"+format(prod_m_total)+"[/b] "+text.tag.m+"[/color] [b]/[/b] [color=#b7f1ff][b]"+format(prod_c_total)+"[/b] "+text.tag.c+"[/color] [b]/[/b] [color=#ffeb67][b]"+format(prod_d_total)+"[/b] "+text.tag.d+"[/color]\n\n";
						exportMine +=  text.exportm.parjour+" : [color=#f9bd68][b]"+(format(prod_m_total*24))+"[/b] "+text.tag.m+"[/color] [b]/[/b] [color=#b7f1ff][b]"+(format(prod_c_total*24))+"[/b] "+text.tag.c+"[/color] [b]/[/b] [color=#ffeb67][b]"+(format(prod_d_total*24))+"[/b] "+text.tag.d+"[/color]\n\n";
						exportMine += text.exportm.parsem+" : [color=#f9bd68][b]"+(format(prod_m_total*24*7))+"[/b] "+text.tag.m+"[/color] [b]/[/b] [color=#b7f1ff][b]"+(format(prod_c_total*24*7))+"[/b] "+text.tag.c+"[/color] [b]/[/b] [color=#ffeb67][b]"+(format(prod_d_total*24*7))+"[/b] "+text.tag.d+"[/color]\n\n";

						exportMine += '[size=8][i]Export with [url=https://openuserjs.org/scripts/benneb/InfoCompte3]Infocompte v'+Version+'[/url][/i][/size]';
						exportMine += '</textarea>';
						}

						// ****************************** options ********************************
						var br = '';
						if (!options.generale.sauterLignePourPourcentageFlotteVol)
							{br ='<br/>';}


						var affichePointLune ='';
						if (options.generale.pointLune && options.generale.AutreBat)
							{affichePointLune = ' '+br+pourcent(pointLuneTotal,PointsBatimentsTotal)+' % '+text.sur_lune;}
						else if (options.generale.pointLune && options.generale.BatTotal)
							{affichePointLune = ' '+br+pourcent(pointLuneTotal,PointsMinesTotal+PointsBatimentsTotal)+' % '+text.sur_lune;}

						// ****************************** Etablissement des couleurs ********************************

						var Color_mine= 'style="color: #FFFFFF;"';
						var Color_autreBat= 'style="color: #FFFFFF;"';
						var Color_batTotal= 'style="color: #FFFFFF;"';
						var Color_techno= 'style="color: #FFFFFF;"';
						var Color_flotte= 'style="color: #FFFFFF;"';
						var Color_def= 'style="color: #FFFFFF;"';
						var Color_indestr= 'style="color: #FFFFFF;"';
						var Color_prog= 'style="color: #FFFFFF;"';
						var color_classFleet = 'style="color: #FFFFFF;"';
						var color_classRes = 'style="color: #FFFFFF;"';
						var color_classIndes = 'style="color: #FFFFFF;"';
						var color_classTotRank = 'style="color: #FFFFFF;"';


						if	(options.generale.couleurPoint)
						{
							if(PointsMinesTotal>PointRef[2]+1) 			{Color_mine= 'style="color: #'+options.couleur.progPos+';"';}
							else if (PointsMinesTotal<PointRef[2] -1) 	{Color_mine= 'style="color: #'+options.couleur.progNeg+';"';}

							if( PointsBatimentsTotal>PointRef[3]+1) 		{Color_autreBat= 'style="color: #'+options.couleur.progPos+';"';}
							else if (PointsBatimentsTotal<PointRef[3]-1) 	{Color_autreBat= 'style="color: #'+options.couleur.progNeg+';"';}

							if((PointsMinesTotal+PointsBatimentsTotal)>(PointRef[2]+PointRef[3]+1)) 			{Color_batTotal= 'style="color: #'+options.couleur.progPos+';"';}
							else if ((PointsMinesTotal+PointsBatimentsTotal)<(PointRef[2]+PointRef[3]) -1)  	{Color_batTotal= 'style="color: #'+options.couleur.progNeg+';"';}

							if( PointsTechno>PointRef[4]+1) 			{Color_techno= 'style="color: #'+options.couleur.progPos+';"';}
							else if (PointsTechno<PointRef[4] -1) 		{Color_techno= 'style="color: #'+options.couleur.progNeg+';"';}

							if( PointsFlotteTotal>PointRef[5]+1) 		{Color_flotte= 'style="color: #'+options.couleur.progPos+';"';}
							else if (PointsFlotteTotal<PointRef[5] -1) 	{Color_flotte= 'style="color: #'+options.couleur.progNeg+';"';}

							if( PointsDefTotal>PointRef[6]+1)			{Color_def= 'style="color: #'+options.couleur.progPos+';"';}
							else if (PointsDefTotal<PointRef[6] -1) 		{Color_def= 'style="color: #'+options.couleur.progNeg+';"';}

							if((PointIndest)>(PointRef[14])+1) 			{Color_indestr= 'style="color: #'+options.couleur.progPos+';"';}
							else if((PointIndest)<(PointRef[14] -1)) 	{Color_indestr= 'style="color: #'+options.couleur.progNeg+';"';}

							if(PointRef[11] != '')
							{
								if( parseInt(Actuelrank[3]) <parseInt(PointRef[13]))			{color_classIndes= 'style="color: #'+options.couleur.progPos+';"';}
								else if (parseInt(Actuelrank[3]) > parseInt(PointRef[13])) 		{color_classIndes= 'style="color: #'+options.couleur.progNeg+';"';}

									if( parseInt(Actuelrank[0].replace( /[^0-9-]/g, "")) <parseInt(PointRef[15].replace( /[^0-9-]/g, "")))		{color_classTotRank= 'style="color: #'+options.couleur.progPos+';"';}
								else if (parseInt(Actuelrank[0].replace( /[^0-9-]/g, ""))> parseInt(PointRef[15].replace( /[^0-9-]/g, ""))) 	{color_classTotRank= 'style="color: #'+options.couleur.progNeg+';"';}
							}
						}

						// ****************************** Affichage des Rangs ********************************
						var rankRes = 	'';
						var rankFleet=	'';
						var rankIndes =	'';
						var rankTot =	'';
						var rankConst =	'';

						if(options.generale.rank )
						{
							rankRes = '';//	'<br/><sub><span '+color_classRes+' title="'+plus(-parseInt(Actuelrank[2].replace( /[^0-9-]/g, "")) +parseInt(PointRef[11].replace( /[^0-9-]/g, "")))+'"> '+text.rank+' : '+Actuelrank[2]+'</sub>';
							rankFleet='';//	'<br/><span '+color_classFleet+' title="'+plus(-parseInt(Actuelrank[1].replace( /[^0-9-]/g, "")) +parseInt(PointRef[12].replace( /[^0-9-]/g, "")))+'"><sub>'+text.rank+' : '+Actuelrank[1]+'</sub>';
							rankIndes = '<br/><sub><span  class="tooltipRight js_hideTipOnMobile" '+color_classIndes+' title="'+plus(-parseInt(Actuelrank[3]) + parseInt(PointRef[13]))+' ('+text.rank_indest+')">'+text.rank+' : '+addPoints(Actuelrank[3])+'</sub></span>';
							rankTot = '<br/><span  class="tooltipRight js_hideTipOnMobile" '+color_classTotRank+' title="'+plus(-parseInt(Actuelrank[0].replace( /[^0-9-]/g, "")) +parseInt(PointRef[15].replace( /[^0-9-]/g, "")))+'"><sub>'+text.rank+' : '+Actuelrank[0]+'</sub>';

							rankConst = '<br/><sub>'+text.rank+' : '+addPoints(Actuelrank[4])+'</sub>';
						}

						// ****************************** Affichage ********************************
						var decaleImg = -40;
						if(Opera) decaleImg =  0;
						if(options.generale.constructing)
						{
							var typeTextBat  = { 'mmet':  text.tag.mmet , 'mcri' : text.tag.mcri , 'mdet' : text.tag.mdet , 'ces': text.tag.ces    ,  'cef' : text.tag.cef,	 'nan': text.tag.nan,	 'lab': text.tag.lab,
												'ter': text.tag.ter,	 'silo': text.tag.silo,	 'depo': text.tag.depo,	 'cspa': text.tag.cspa,	 'rob': text.tag.rob,	 'hmet': text.tag.hmet,	 'hcri': text.tag.hcri,	 'hdet': text.tag.hdet,
												'base': text.tag.base,	 'phal': text.tag.phal,	 'port': text.tag.port, 'dock': text.tag.dock	 };
							var typeTextRes  = { 'ener' : text.tag.ener , 'lase' : text.tag.lase , 'ions' : text.tag.ions , 'hype' : text.tag.hype ,  'plas' : text.tag.plas , 'comb' : text.tag.comb , 'impu' : text.tag.impu , 'phyp' : text.tag.phyp , 'espi' : text.tag.espi , 'ordi' : text.tag.ordi , 'astro': text.tag.expe, 'rese' : text.tag.rese ,  'grav' : text.tag.grav , 'arme' : text.tag.arme , 'bouc' : text.tag.bouc , 'prot' : text.tag.prot};

							var table_tooltip_constructing = "<table align='center'  border='1' cellspacing='10px' cellpadding='10px'><td style='color:#6F9FC8'></td><td>"+text.exportm.planete+"</td><td>lvl</td>";

							for (i=0 ; i<DATA.planet.length ; i++)
							{
								if( !( BatSta_const[i].split('|')[1] == "" && BatRes_const[i].split('|')[1] == "" ))
								{
									table_tooltip_constructing += "<tr>";

									if( BatSta_const[i].split('|')[1] > start_time )
									{
										table_tooltip_constructing += "<td>"+typeTextBat[BatSta_const[i].split('|')[0]]+"</td><td style='color:#6F9FC8'>"+DATA.planet[i].name.split(' ')[1]+"</td><td style='text-align:right;'>"+(parseInt(DATA.planet[i].building[BatSta_const[i].split('|')[0]])+1)+"</td>";
									}

									if( BatRes_const[i].split('|')[1] > start_time )
									{
										table_tooltip_constructing += "<td>"+typeTextBat[BatRes_const[i].split('|')[0]]+"</td><td style='color:#6F9FC8'>"+DATA.planet[i].name.split(' ')[1]+"</td><td style='text-align:right;'>"+(parseInt(DATA.planet[i].building[BatRes_const[i].split('|')[0]])+1)+"</td>";
									}
									table_tooltip_constructing += "</tr>";
								}
							}
							if( Res_const.split('|')[0] != "" && Res_const.split('|')[1] > start_time ){
								table_tooltip_constructing += "<tr><td>"+typeTextRes[Res_const.split('|')[0]]+"</td><td style='text-align:right;'>"+(parseInt(DATA.techno[Res_const.split('|')[0]])+1)+"</td></tr>";
							}
							table_tooltip_constructing += "</table>";
						}

						if(options.generale.Masquer)
						{

							var affiche = '<div><table id="IFC_table_main"  style="width:675px; clear:right;cursor:pointer;">'+

									'<tr><th>'+
									'<table id="IFC_top" style="cursor:pointer;width:660px; margin:auto;text-align:center;">'+
										'<tr >'+
											'<td style="width:80%; font-size: 12px; font-weight: bold; color: #539fc8; line-height: 30px; height: 30px;" background="'+background+'" onclick="if (document.getElementById(\'IFC_table\').style.display==\'none\') {document.getElementById(\'IFC_table\').style.display=\'\'; document.getElementById(\'zonecode\').style.display = \'none\';		document.getElementById(\'zonecode2\').style.display = \'none\';			document.getElementById(\'zonecode3\').style.display = \'none\';} else {document.getElementById(\'IFC_table\').style.display=\'none\';}">'+text.BBcode_debut+'</td>'+
											'<td style="width:20%; font-size: 12px; font-weight: bold; color: #539fc8; line-height: 30px; height: 30px;" background="'+background+'" >'+
												'<a class="tooltipLeft " TITLE="'+text.AffBBcodeSimple+'">'+
												'<img id="copybbcode" style="cursor:pointer;float:right; margin-top:6px; margin-right:35px;  position:relative;" src="data:image/gif;base64,'+codeImg+'"/>'+
												'</a>'+
												'<a class="tooltipLeft " TITLE="'+text.AffBBcodeDetail+'">'+
												'<img id="copybbcode2" style="cursor:pointer; float:right; position:relative; margin-right:3px; margin-top:6px;" src="data:image/gif;base64,'+codeImg+'"/>'+
												'</a>'+
												'<a class="tooltipLeft " TITLE="Export production">'+
												'<img id="copybbcode3" style="cursor:pointer; float:right; position:relative; margin-right:3px; margin-top:6px;" src="data:image/gif;base64,'+codeImg+'"/>'+
												'</a>'+
											'</td>'+
										'</tr>'+
									'</table>';
							affiche +='<table id="IFC_table"  background="'+background2+'"  cellpadding="0px" cellspacing="0px" style="cursor:default;display:none; text-align:center" border="0" >';
							affiche +='<tr >';
							affiche +='<th colspan="4"><div style="display:none;" id="zonecode" ><textarea style="width:100%;background-color:transparent;color:#999999;text-align:center;" onClick="javascript:this.select();">'+BBcode+'</textarea></div>';
							//affiche +='<div style="display:none;" id="zonecode2" >'+code+'<br/>_______________________________________________________<br/>'+text.AffBBcodeSansBBcode+'<br/><br/>'+code.replace(/\[.[^\]]*\]/g,'').replace(/http:\/\/www.vulca.projet-alternative.fr\/infoCompte\/image\//g,'').replace(/.(png|jpg)/g,'')+'</div>';
							//affiche +='<div style="display:none;" id="zonecode3" >'+exportMine+'</div></th></tr>';

							affiche +='<div style="display:none;" id="zonecode2" >'+code+'<br/>_______________________________________________________<br/>'+text.AffBBcodeSansBBcode+'<br/><br/>'+code.replace(/\[.[^\]]*\]/g,'').replace(/http:\/\/www.vulca.projet-alternative.fr\/infoCompte\/image\//g,'').replace(/.(png|jpg)/g,'')+'</div>';

							/**** edit wuko if(options.generale.Masquer) pour utiliser AffBBcodeSansBBcode ****/
							/* Edit de code permettant d'exporter la production des mines sans BBcode */

							affiche +='<div style="display:none;" id="zonecode3" >'+exportMine+'<br/>_______________________________________________________<br/>'+text.AffBBcodeSansBBcode+'<br/><br/>'+exportMine.replace(/\[.[^\]]*\]/g,'').replace(/http:\/\/www.vulca.projet-alternative.fr\/infoCompte\/image\//g,'').replace(/.(png|jpg)/g,'')+'</div></th></tr>';

						}
						else
						{
							var affiche = '<div><table id="IFC_table_main" style="width:675px; clear:right;"><br/><tr style="width:675px;"><th><table id="IFC_table_top" style="width:675px; margin:auto;margin-bottom: -2px; text-align:center;"><tr>'+
							'<th style="width:675px; font-size: 12px; font-weight: bold; color: #539fc8; line-height: 30px; height: 30px;" background="'+background+'" colspan="4" >'+text.BBcode_debut+
							'<a class="tooltipLeft " TITLE="'+text.AffBBcodeSimple+'">'+
							'<img id="copybbcode" style="cursor:pointer;float:right; margin-top:6px; margin-right:35px;  position:relative;" src="data:image/gif;base64,'+codeImg+'"/>'+
							'</a>'+
							'<a class="tooltipLeft " TITLE="'+text.AffBBcodeDetail+'">'+
							'<img id="copybbcode2" style="cursor:pointer; float:right; position:relative; margin-right:3px; margin-top:6px;" src="data:image/gif;base64,'+codeImg+'"/>'+
							'</a>'+
							'<a class="tooltipLeft " TITLE="Export production">'+
							'<img id="copybbcode3" style="cursor:pointer; float:right; position:relative; margin-right:3px; margin-top:6px;" src="data:image/gif;base64,'+codeImg+'"/>'+
							'</a>'+
							'</th></tr></table><center><table id="IFC_mid" width="657px" background="'+background2+'">';

							affiche +='<th colspan="4"><div style="display:none;" id="zonecode" ><textarea style="width:100%;background-color:transparent;color:#999999;text-align:center;" onClick="javascript:this.select();">'+BBcode+'</textarea></div>';
							//affiche +='<div style="display:none;" id="zonecode2" >'+code+'<br/>_______________________________________________________<br/>'+text.AffBBcodeSansBBcode+'<br/><br/>'+code.replace(/\[.[^\]]*\]/g,'').replace(/http:\/\/www.vulca.projet-alternative.fr\/infoCompte\/image\//g,'').replace(/.(png|jpg)/g,'')+'</div>';
							//affiche +='<div style="display:none;" id="zonecode3" >'+exportMine+'</div></th></tr>';


							affiche +='<div style="display:none;" id="zonecode2" >'+code+'<br/>_______________________________________________________<br/>'+text.AffBBcodeSansBBcode+'<br/><br/>'+code.replace(/\[.[^\]]*\]/g,'').replace(/http:\/\/www.vulca.projet-alternative.fr\/infoCompte\/image\//g,'').replace(/.(png|jpg)/g,'')+'</div>';

							/**** edit wuko if(options.generale.Masquer) pour utiliser AffBBcodeSansBBcode ****/
							/* Edit de code permettant d'exporter la production des mines sans BBcode */

							affiche +='<div style="display:none;" id="zonecode3" >'+exportMine+'<br/>_______________________________________________________<br/>'+text.AffBBcodeSansBBcode+'<br/><br/>'+exportMine.replace(/\[.[^\]]*\]/g,'').replace(/http:\/\/www.vulca.projet-alternative.fr\/infoCompte\/image\//g,'').replace(/.(png|jpg)/g,'')+'</div></th></tr>';
						}

						if(options.generale.mine)
							{affiche +='<tr id="tr_mines"><th width="4px"></th><th style="'+th_style+'" >'+text.Mines+'</th><th style="width:250px; '+th_style+'" ><a '+Color_mine+' class="tooltipRight js_hideTipOnMobile" TITLE="'+plus(Math.round(PointsMinesTotal-PointRef[2]))+' '+text.Points+' ('+pourcent(PointsMinesTotal-PointRef[2],PointRef[2])+' %) <br />'+text.tag.m+' : '+addPoints(Math.round(PointsMinesMetalTotal))+'<br />'+text.tag.c+' : '+addPoints(Math.round(PointsMinesCristalTotal))+'<br />'+text.tag.m+'/'+text.tag.c+' = '+(Math.round(((Math.round(PointsMinesMetalTotal))*100/Math.round(PointsMinesCristalTotal)))/100)+'">'+addPoints(PointsMinesTotal)+' ('+pourcent(PointsMinesTotal,PointsTotal)+' %) </a></th><th   style="'+th_style+'" rowspan='+nbAfficher+' id="piebox" colspan="2"></th><th><a  class="tooltipRight js_hideTipOnMobile" TITLE="'+text.affRentaPla+'"><img id="Rentabilite_mines" style="cursor:pointer;" src="data:image/gif;base64,'+codeImg+'"/></a><th></tr>';}
						if(options.generale.AutreBat)
							{affiche +='<tr ><th width="4px"></th><th style="'+th_style+'" >'+text.Other_structure+'</th><th style="width:250px; '+th_style+'" ><a '+Color_autreBat+' class="tooltipRight js_hideTipOnMobile" TITLE="'+plus(Math.round(PointsBatimentsTotal-PointRef[3]))+' '+text.Points+'  ('+pourcent(PointsBatimentsTotal-PointRef[3],PointRef[3])+' %)<br />'+text.tag.m+' : '+addPoints(Math.round(PointsBatMetalTotal))+'<br />'+text.tag.c+' : '+addPoints(Math.round(PointsBatCristalTotal))+'<br />'+text.tag.d+' : '+addPoints(Math.round(PointsBatDeutTotal))+'">'+addPoints(PointsBatimentsTotal)+' ('+pourcent(PointsBatimentsTotal,PointsTotal)+' %)  </a>'+affichePointLune+'</th><th class="IFC_th2"></th></tr>';}
						if(options.generale.BatTotal)
							{affiche +='<tr id="tr_mines"><th width="4px"></th><th style="'+th_style+'" >'+text.Structure+'</th><th style="width:250px; '+th_style+'" ><a '+Color_batTotal+' class="tooltipRight js_hideTipOnMobile" TITLE="'+plus(Math.round((PointsMinesTotal+PointsBatimentsTotal)-(PointRef[2]+PointRef[3])))+' '+text.Points+' ('+pourcent((PointsMinesTotal+PointsBatimentsTotal)-(PointRef[2]+PointRef[3]),PointRef[2]+PointRef[3])+' %)<br />'+text.tag.m+' : '+addPoints(Math.round(PointsMinesMetalTotal+PointsBatMetalTotal))+'<br />'+text.tag.c+' : '+addPoints(Math.round(PointsMinesCristalTotal+PointsBatCristalTotal))+'<br />'+text.tag.d+' : '+addPoints(Math.round(PointsMinesDeutTotal+PointsBatDeutTotal))+'">'+addPoints(PointsMinesTotal+PointsBatimentsTotal)+' ('+pourcent(PointsMinesTotal+PointsBatimentsTotal,PointsTotal)+' %)  </a>'+affichePointLune+' <a class="tooltipRight js_hideTipOnMobile"  TITLE="'+text.affRentaPla+'"><img id="Rentabilite_mines" style="cursor:pointer;" src="data:image/gif;base64,'+codeImg+'"/></a></th><th   style="'+th_style+'" rowspan='+nbAfficher+' id="piebox" colspan="2"></th></tr>';}
						if(options.generale.techno)
							{affiche +='<tr ><th width="4px"></th><th style="'+th_style+'" >'+text.Technology+'</th><th style="width:250px; '+th_style+'" ><a '+Color_techno+' class="tooltipRight js_hideTipOnMobile" TITLE="'+plus(Math.round(PointsTechno-PointRef[4]))+' '+text.Points+' ('+pourcent(PointsTechno-PointRef[4],PointRef[4])+' %)<br />'+text.tag.m+' : '+addPoints(Math.round(PointsTechnoMetal))+'<br />'+text.tag.c+' : '+addPoints(Math.round(PointsTechnoCristal))+'<br />'+text.tag.d+' : '+addPoints(Math.round(PointsTechnoDeut))+'">'+addPoints(PointsTechno)+' ('+pourcent(PointsTechno,PointsTotal)+' %) </a> '+rankRes+'</th><th class="IFC_th2"></th></tr>';}
						if(options.generale.flottes)
							{affiche +='<tr ><th width="4px"></th><th style="'+th_style+'" >'+text.Fleet+'</th><th style="width:250px; '+th_style+'" ><a '+Color_flotte+' class="tooltipRight js_hideTipOnMobile" TITLE="'+plus(Math.round(PointsFlotteTotal-PointRef[5]))+' '+text.Points+' ('+pourcent(PointsFlotteTotal-PointRef[5],PointRef[5])+' %)">'+addPoints(PointsFlotteTotal) + ' ('+pourcent(PointsFlotteTotal,PointsTotal)+' %) </a> '+rankFleet+'</th><th class="IFC_th2"></th></tr>';}
						if(options.generale.Def)
							{affiche +='<tr ><th width="4px"></th><th style="'+th_style+'" >'+text.Defense+'</th><th style="width:250px; '+th_style+'" ><a '+Color_def+' class="tooltipRight js_hideTipOnMobile" class="tooltipRight js_hideTipOnMobile" TITLE="'+plus(Math.round(PointsDefTotal-PointRef[6]))+' '+text.Points+' ('+pourcent(PointsDefTotal-PointRef[6],PointRef[6])+' %)">'+addPoints(PointsDefTotal)+' ('+pourcent(PointsDefTotal,PointsTotal)+' %) </a></th><th class="IFC_th2"></th></tr>';}
						if(options.generale.indestructible)
							{affiche +='<tr ><th width="4px"></th><th style="'+th_style+'" >'+text.Indestructible+'</th><th style="width:250px; '+th_style+'" ><a '+Color_indestr+' class="tooltipRight js_hideTipOnMobile" TITLE="'+plus(Math.round((PointIndest)-PointRef[14]))+' '+text.Points+' ('+pourcent(PointIndest-PointRef[14],PointRef[14])+' %)">'+addPoints(PointIndest)+' ('+pourcent(PointIndest,PointsTotal)+' %) </a> '+rankIndes+'</th><th class="IFC_th2"></th></tr>';}
						if(options.generale.constructing)
							{affiche +='<tr ><th width="4px"></th><th style="'+th_style+'" >'+text.constructing+'</th><th style="width:250px; '+th_style+'" class="tooltipRight js_hideTipOnMobile" TITLE="'+DATA.planet[numeroplanete].name+' : '+addPoints(Math.round(ConstructingPla))+' ('+pourcent(ConstructingPla,Constructing)+' %) <br />'+table_tooltip_constructing+'" >'+addPoints(Math.round(Constructing))+' ('+pourcent(Constructing,PointsTotal)+' %)  '+rankConst+'</th><th class="IFC_th2"></th></tr>';}
						if(options.generale.Point_planete)
							{affiche +='<tr ><th width="4px"></th><th style="'+th_style+'" >'+DATA.planet[numeroplanete].name+'</th><th  id="listePla" colspan="3" style="'+th_style+'" ><a style="color: #FFFFFF;"  class="tooltipRight js_hideTipOnMobile" TITLE="'+text.Mines+': '+addPoints(PointsMinesTotalP[numeroplanete])+' ('+pourcent(PointsMinesTotalP[numeroplanete],PointPlanete)+' %) | '+text.Other_structure+': '+addPoints(PointsBatimentsTotalP[numeroplanete])+' ('+pourcent(PointsBatimentsTotalP[numeroplanete],PointPlanete)+' %) | '+text.Defense+': '+addPoints(PointsDefTotalP[numeroplanete])+' ('+pourcent(PointsDefTotalP[numeroplanete],PointPlanete)+' %)">'+ addPoints(PointPlanete) +' '+text.Points+' ('+pourcent(PointPlanete,PointsTotal)+' %) </a></th><th   style="background-color:transparent;"><a  class="tooltipRight js_hideTipOnMobile" TITLE="'+text.affDetailPla+'"><img id="Point_planete" style="cursor:pointer;" src="data:image/gif;base64,'+codeImg+'"/></a><th></th></th></tr>';}
						if (options.generale.progression)
							{affiche +='<tr ><th width="4px"></th><th style="'+th_style+'" >'+text.Progression+'</th><th colspan="3" style="'+th_style+'" ><a style="color: #FFFFFF;"  class="tooltipRight js_hideTipOnMobile" TITLE="'+text.Mines+': '+plus(Math.round(PointsMinesTotal-PointRef[2]))+' ('+pourcent(PointsMinesTotal-PointRef[2],PointsTotal-PointRef[0])+' %) | '+text.Other_structure+': '+plus(Math.round(PointsBatimentsTotal-PointRef[3]))+' ('+pourcent(PointsBatimentsTotal-PointRef[3],PointsTotal-PointRef[0])+' %) | '+text.Technology+': '+plus(Math.round(PointsTechno-PointRef[4]))+' ('+pourcent(PointsTechno-PointRef[4],PointsTotal-PointRef[0])+' %) | '+text.Fleet+': '+plus(Math.round(PointsFlotteTotal-PointRef[5]))+' ('+pourcent(PointsFlotteTotal-PointRef[5],PointsTotal-PointRef[0])+' %) | '+text.Defense+': '+plus(Math.round(PointsDefTotal-PointRef[6]))+' ('+pourcent(PointsDefTotal-PointRef[6],PointsTotal-PointRef[0])+' %)">'+addPoints(Math.round(PointsTotal-PointRef[0]))+' '+text.Points+' (' +pourcent((PointsTotal-PointRef[0]),PointRef[0]) +' %) '+text.Depuis+' '+PointRef[1]+' => '+addPoints(Math.round((PointsTotal-PointRef[0])/arrondi((Date.parse(new Date())-PointRef[10])/(1000*3600*24))))+' '+text.Point_day+'</a>'+rankTot+'</th><th   style="background-color:transparent;"><a  class="tooltipRight js_hideTipOnMobile" TITLE="'+text.restart+'"><img id="pointRef" style="cursor:pointer" src="data:image/gif;base64,'+codeImg+'"/></a></th><th></th></tr>';	}
						if (options.generale.ProgJours)
							{affiche +='<tr ><th width="4px"></th><th style="'+th_style+'" >'+text.Moyenne+'</th><th colspan="3" style="'+th_style+'" >'+addPoints(Math.round((PointsTotal- PointRefMoy)/arrondi((Date.parse(new Date())/1000-DateRefMoy)/(3600*24))))+ ' '+text.Point_day+'</th></tr>';	}
						if (options.generale.ProdJours)
							{affiche +='<tr ><th width="4px"></th><th style="'+th_style+'" >'+text.Production+'</th><th class="tooltip js_hideTipOnMobile" TITLE="'+text.tag.m+'/'+text.tag.c+' = '+(Math.round(prod[0]*100/prod[1])/100)+' <br />'+text.ProductionBrute+' :  <br />'+addPoints(Math.round(prodbrute[0]/1000))+' / '+addPoints(Math.round(prodbrute[1]/1000))+' / '+addPoints(Math.round(prodbrute[2]/1000))+' <br />'+text.ProductionConstruction+' :  <br />'+addPoints(Math.round(prodConstructing[0]/1000))+' / '+addPoints(Math.round(prodConstructing[1]/1000))+' / '+addPoints(Math.round(prodConstructing[2]/1000))+'" colspan="3" style="'+th_style+'" >'+addPoints(Math.round((prod[0]+prod[1]+prod[2])/1000))+ ' (<a style="color: #FFFFFF;"  class="tooltipRight js_hideTipOnMobile" TITLE="'+text.tag.m+'">'+addPoints(Math.round(prod[0]/1000))+' </a>/ <a style="color: #FFFFFF;"  class="tooltipRight js_hideTipOnMobile"  TITLE="'+text.tag.c+'">'+addPoints(Math.round(prod[1]/1000))+' </a>/ <a style="color: #FFFFFF;"  class="tooltipRight js_hideTipOnMobile" TITLE="'+text.tag.d+'">'+addPoints(Math.round(prod[2]/1000))+ '</a>) '+text.Point_day+'</th></tr>';	}

						//var techTree = GM_getValue(nomScript +domain , '|').split('|').length != 3 ? false :true ;

						if (manqueBat !='' || manqueDef !='' || manqueMine !='' || PointsTechno < 0 /*|| !techTree*/ )
						{
							if (commandant )
							{
								affiche +='<tr ><th width="4px"><th style="'+th_style+'" ><img src="'+cautionIMG+'" /></th><th   colspan="3" style="'+th_style+';color:lime;" >'+text.empireMaj+'<br/><br/>';
							}
							affiche +='<tr ><th   width="4px"></th><th   style="'+th_style+'" ><img src="'+cautionIMG+'" /></th><th   colspan="3" style="'+th_style+'" >'+text.Manque+'<br/><br/>';

							if (manqueMine !='') {affiche += text.Ressource+' : '+manqueMine+'<br/>';}
							if (manqueBat  !='') {affiche += text.Facilities+' : '+manqueBat+'<br/>';}
							if (manqueDef  !='') {affiche += text.Defense   +' : '+manqueDef+'<br/>';}
							if (PointsTechno < 0){affiche += '<a href="'+url.replace('ingame&component=overview','ingame&component=research')+'" >'+text.Technology+'</a>';}

							affiche += '</th></tr>';
						}

						var languesite = 'en';
						if (options.generale.langue== 'fr') languesite = 'fr';

						affiche += '</th></tr><tr ><th  width="4px"></th><th  colspan="4" >'+

						'<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" style="float:right">'+
						'<input type="hidden" name="cmd" value="_s-xclick">'+
						'<input type="hidden" name="hosted_button_id" value="VFPXQ8T9GT87G">'+
						'<input width="48px" height="17px" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />'+
						'</form>'+
						'<a style="font-style: italic;" href="'+adresse_forum+'" target="_blank">InfoCompte '+Version+' </a></th></tr>';

						affiche += '</table>';
						if(options.generale.Masquer && options.generale.Alternative && (options.generale.langue == 'fr'|| (url.indexOf('ogame.fr',0))>=0) ) affiche+='<center><table id="alti_table" background="'+background2+'" style="width:657px; margin:auto; text-align:center;>'+Atlerna+'</table></center>';

						affiche+='</th></tr></table><br/></div>';

						var sp1 = document.createElement("span");
						sp1.setAttribute("id", "newDivIFC");
						var sp1_content = document.createTextNode('');
						sp1.appendChild(sp1_content);

						if(document.getElementById('newEventBox') && FireFox) var sp2 = document.getElementById('newEventBox') ;
						 var sp2 = document.getElementsByClassName("content-box-s")[2];

						var parentDiv = sp2.parentNode;
						parentDiv.insertBefore(sp1, sp2.nextSibling);

						var tableau = document.createElement("div");
						//if( v5 &&  Chrome && ! Tamper )		tableau.setAttribute("style", "float: left;");
						if ( Opera ) 	tableau.setAttribute("style", "float: left;");
						tableau.innerHTML = affiche;

						if (options.generale.posTable)
						{
							document.getElementById('middle').appendChild(tableau);
						}
						else
						{
							document.getElementById('middle').insertBefore(tableau, document.getElementById('middle').firstChild);
						}
						// ****************************** Affichage du graphique *******************************
						if (options.generale.mine)
							{var pie = draw_pie([pourcent(PointsMinesTotal,PointsTotal),pourcent(PointsBatimentsTotal,PointsTotal),pourcent(PointsTechno,PointsTotal),pourcent(PointsFlotteTotal,PointsTotal),pourcent(PointsDefTotal,PointsTotal)]);}
						else if(options.generale.BatTotal)
							{var pie = draw_pie([pourcent(PointsMinesTotal+PointsBatimentsTotal,PointsTotal),pourcent(PointsTechno,PointsTotal),pourcent(PointsFlotteTotal,PointsTotal),pourcent(PointsDefTotal,PointsTotal)]);}
						var piebox = document.getElementById('piebox');
						if (piebox) {piebox.appendChild(pie)};


						// ****************************** Demande Email Alternative *******************************
						if(document.getElementById("alternativeBouton"))
						{
							document.getElementById("alternativeBouton").addEventListener("click", function(event)
							{

								if(GM_getValue(nomScript+"email"+coordPM+serveur, '' ) == '')
								{
									document.getElementById("email").innerHTML = prompt(text.adresse,GM_getValue(nomScript+"email"+coordPM+serveur, '' ) );
									GM_setValue(nomScript+"email"+coordPM+serveur,document.getElementById("email").innerHTML);
								}
								else document.getElementById("email").innerHTML = GM_getValue(nomScript+"email"+coordPM+serveur, '')

							}, true);
						}

						{ // ****************************** BBcode ouvrant/fermant *******************************

						document.getElementById("copybbcode").addEventListener("click", function(event)
						{
							var cellule = document.getElementById('zonecode');
							if (cellule.style.display == 'none')
							{
								cellule.style.display = '';
								document.getElementById('zonecode2').style.display = 'none';
								document.getElementById('zonecode3').style.display = 'none';
								//document.getElementById('IFC_table').style.display='';
							}
							else
							{
								cellule.style.display = 'none';
							}
						}, true);

						document.getElementById("copybbcode2").addEventListener("click", function(event)
						{
							var cellule = document.getElementById('zonecode2');

							if (cellule.style.display == 'none')
							{
								cellule.style.display = '';
								document.getElementById('zonecode').style.display = 'none';
								document.getElementById('zonecode3').style.display = 'none';
								//document.getElementById('IFC_table').style.display='';
							}
							else
							{
								cellule.style.display = 'none';
							}
						}, true);

						document.getElementById("copybbcode3").addEventListener("click", function(event)
						{
							var cellule = document.getElementById('zonecode3');

							if (cellule.style.display == 'none')
							{
								cellule.style.display = '';
								document.getElementById('zonecode').style.display = 'none';
								document.getElementById('zonecode2').style.display = 'none';
								//document.getElementById('IFC_table').style.display='';
							}
							else
							{
								cellule.style.display = 'none';
							}
						}, true);


						function AffDetailPla()
						{
							var aff = '<br/><table id="detail_table" style="margin:auto;"><tr><td>'+text.bbcode.planet+' </td><td> '+text.Mines+' </td><td> '+text.Other_structure+' </td><td> '+text.Defense+' </td><td>=> '+text.BBcode_debut2+'</td></tr>';
							for (var f = 0 ; f < nbPlanet ; f++)
							{

								if(DATA.planet[f].moon== 'true')
										img = 'background-image: url(data:image/gif;base64,R0lGODlhEAAQAPf/ACArPYqewre62VRjepeZuMTJ53uTtxQaLbnD6f3+/zJBU9bd9xsyShskOOTr+yIsQa+85czX9nWOs4SKqBYdMTpRahw3U2ZxjNvk+nJ8mRsrQiMySTtfhB0oOVtqhCo9Upus00hhfISavik5SS1CUjNEWENTaXKLriU1RGN9oyM6Uo2ixSg1SS09TExccRkkNBggMSxCWjxMYTA9UYucvRkhNDJKYyEwQSQ3TBUhMxEVKQoRGQ0WIWqGq1NzmpOiw5OfwIGWu2uCo3WAnaKu0mR7nWt1kpury3ODo2NzkqWz3GFthnuMrqusyytKa117oqW00zRJW3qEojlIXKKkw4OUtOzx/ZOlyiI8WFhwjyRBXENadBMfKxsnNqSry42Ss8vR7iUxRWt7nJuhwqyz0x4oPFBfdVJsjElskh4sPWOCpipFYFtzlUFRZStJZTJTc7jC3ktjg8PO8ktqiiQyQvb6/jdFWSNDZElZbjtTbyg1RS1ATkNjhEJceRQrRVx5nSI9YW2JrTpafFh1nCk9TCAxRV1uilRphPL2/aayzhwlNUBkiVNmgTFTeL7K8BotSBAaJTNNaUBLZxMjOWx3lSg4RlNylURojSo8SsG93jVZfK663So+WKm23iEvPYKPsEJegyk5TYqQrdPU8CQ0QmWDqR82Tyw8Sk1wljFFYExohiE0RXCFqDBNcau51iREaJepzSw4TBYtSiU3RsPD4B4sOkFVcStMcj1Yc7CuzhclMDpNaCxRdGF2mTA4TxknOaqmxaKox4iXuSw6SRkpPpqmzG6LsZ+du5upxjhVekdWayk1UKqqxbS00J+w14OYtyVJbEteelJukJWoxiI1QRktPXuIp7ex0kNXbc/N6SpFaCE2WRsiNpOTsRQoPjxCYTFHVkZoh0hliDxffS9JXKCwzqChv3qIqlpnfx4vPhceLhAXIi9AUFd3n6aoyI+Yt3OIqGV3mBorOXiQsR0/XBowUDZYdidIZhkoQYCEoWt3mS9QbpCOqlBniGBwjwQGCyH5BAEAAP8ALAAAAAAQABAAAAj/AP8JFLhOXCclTNQNXPiPR6MgBgwkcgDH2TqGMV4ZeIIgAaIEDpSg0TSQh7Zknww4WOGgzoJOEpQcEFjPjbYArH78mLdCggQDsJz9g0Tigw1bXsYISJSgToEgaDhwoabiA6NDohCNsQIE2ah5ROxZoFDrVygZh44FO8bs05kQ4d5g0QWjRqUGURhJQXJNyickbixYoNOBmAJFD/IZMZLBUJwKW/D54bJBEZcOFNjJGMDIzJYZGkJB+kcKQANFOLhNsWXGhQIWYR4IhDQiDZcROg5MmcKC240XXAaSINTB040DN+wAuPFA4UJIpHK80NOBkAxPwRkK1IEJ04gDLxgGAQQAOw==);background-repeat:no-repeat;background-position:top right;padding-right: 15px;';
								else 	img = '';

								aff+= '<tr><td style="text-align:left;font-size:0.75em;'+img+'">'+DATA.planet[f].name +'</td><td style="font-size:0.75em;text-align:right;color:#'+options.couleur.graphA+';">'+addPoints(Math.round(PointsMinesTotalP[f]))+'</td><td style="font-size:0.75em;text-align:right;color:#'+options.couleur.graphB+';">'+addPoints(Math.round(PointsBatimentsTotalP[f]))+'</td><td style="font-size:0.75em;text-align:right;color:#'+options.couleur.graphE+';">'+addPoints(Math.round(PointsDefTotalP[f]))+'</td><td style="font-size:0.75em;text-align:left;">=> '+addPoints(Math.round(PointsMinesTotalP[f]+PointsBatimentsTotalP[f]+PointsDefTotalP[f]))+' ('+pourcent(PointsMinesTotalP[f]+PointsBatimentsTotalP[f]+PointsDefTotalP[f],PointsTotal)+' %) </td></tr>';
							}
							//console.log("listePla");
							document.getElementById('listePla').innerHTML= aff+'</table><br/>' ;
							//console.log("Point_planete");
							document.getElementById("Point_planete").style.display='none';
						}

						if(document.getElementById("Point_planete") && document.getElementById('listePla'))
						{
							if(options.generale.AffDetailPla) AffDetailPla();
							else
							{
								document.getElementById("Point_planete").addEventListener("click", function(event)
								{
									AffDetailPla();
								}, true);
							}
						}

						}

						{ // fonction pour calcul de rentabilité
						function getPrix_mine_taux(type, lvlm)
						{
							var PointMineMetal   = prixInitial_batMineMetal  [type]* Math.pow(exposant[type],lvlm);
							var PointMineCristal = prixInitial_batMineCristal[type]* Math.pow(exposant[type],lvlm);
							return 1000*taux[2]*(PointMineMetal/taux[0]+PointMineCristal/taux[1]);
						}
						function rentaeeee( type , temperature , numeroPlanet   )
						{
							var lvlmm = parseInt(DATA.planet[numeroPlanet].building.mmet);
							var lvlmc = parseInt(DATA.planet[numeroPlanet].building.mcri);
							var lvlmd = parseInt(DATA.planet[numeroPlanet].building.mdet);

							var crawler = DATA.planet[numeroPlanet].fleet.crawler;
							var maxPercentageCrawler = percentageCrawler(lvlmm, lvlmc, lvlmd, crawler);

							if( type == 'mmet')
							{
								if( BatRes_const[numeroPlanet].split('|')[1] > start_time && BatRes_const[numeroPlanet].split('|')[0] == type )
								{
									lvlmm += 1;
								}
								var prix_mine_taux = getPrix_mine_taux(0, lvlmm);
								return prix_mine_taux/((prodMetal  (lvlmm+1, lvlplasma, DATA.planet[numeroPlanet].pos, options.generale.useBoost ? DATA.planet[numeroPlanet].booster.met:0, maxPercentageCrawler, Geolog)
													  - prodMetal  (lvlmm  , lvlplasma, DATA.planet[numeroPlanet].pos, options.generale.useBoost ? DATA.planet[numeroPlanet].booster.met:0, maxPercentageCrawler, Geolog))*taux[2]/taux[0]) ;
							}
							if( type == 'mcri')
							{
								if( BatRes_const[numeroPlanet].split('|')[1]  > start_time && BatRes_const[numeroPlanet].split('|')[0] == type )
								{
									lvlmc += 1;
								}
                                var prix_mine_taux = getPrix_mine_taux(1, lvlmc);
								return prix_mine_taux/((prodCristal(lvlmc+1, lvlplasma, DATA.planet[numeroPlanet].pos, options.generale.useBoost ? DATA.planet[numeroPlanet].booster.cri:0, maxPercentageCrawler, Geolog)
													  - prodCristal(lvlmc  , lvlplasma, DATA.planet[numeroPlanet].pos, options.generale.useBoost ? DATA.planet[numeroPlanet].booster.cri:0, maxPercentageCrawler, Geolog))*taux[2]/taux[1]) ;
							}
							if( type == 'mdet')
							{
								if( BatRes_const[numeroPlanet].split('|')[1]  > start_time && BatRes_const[numeroPlanet].split('|')[0] == type )
								{
									lvlmd += 1;
								}
								var prix_mine_taux = getPrix_mine_taux(2, lvlmd);
								return prix_mine_taux/((prodDeut   (lvlmd+1, lvlplasma, temperature, options.generale.useBoost ? DATA.planet[numeroPlanet].booster.det:0, maxPercentageCrawler, Geolog)
													  - prodDeut   (lvlmd  , lvlplasma, temperature, options.generale.useBoost ? DATA.planet[numeroPlanet].booster.det:0, maxPercentageCrawler, Geolog))/taux[2]);
							}
						}
						function hourToyear(heure)
						{
							var annee = heure/(24*365);
							var mois  = heure/(24*30);
							var jour  = heure/(24);
							if( annee > 1 ) return Math.floor(annee*100)/100 +" "+text.years;
							if( mois  > 1 ) return Math.floor(mois *100)/100 +" "+text.months;
											return Math.floor(jour *100)/100 +" "+text.days;
						}
						var OrdreTech = {'espi':0, 'ordi':1, 'arme':2, 'bouc':3, 'prot':4, 'ener':5, 'hype':6, 'comb':7, 'impu':8, 'phyp':9, 'lase':10, 'ions':11, 'plas':12, 'rese':13, 'astro':14}

						function cumulCoutTechno(k, lvl, lvlmax)
						{
							var PointsTechnoMetal   = 0 ;
							var PointsTechnoCristal = 0 ;
							var PointsTechnoDeut    = 0 ;

							if( lvl < lvlmax )
							{
								for( i=lvl ; i <= lvlmax ; i++ )
								{
									PointsTechnoMetal   += prixInitial_techMetal[k]   * Math.pow( exposant_tech[k], i-1) ;
									PointsTechnoCristal += prixInitial_techCristal[k] * Math.pow( exposant_tech[k], i-1) ;
									PointsTechnoDeut    += prixInitial_techDeut[k]    * Math.pow( exposant_tech[k], i-1) ;
								}
							}
							return 1000*((PointsTechnoMetal*taux[2]/taux[0])+(PointsTechnoCristal*taux[2]/taux[1])+(PointsTechnoDeut/taux[2]));
						}
						function getPrix_techno_taux(k,lvll)
						{
							var resultat = 0;

							if( k == 12 )//plasma prerequis
							{
								resultat += cumulCoutTechno(10, lvllaser,  10);
								resultat += cumulCoutTechno(5 , lvlenergie, 5);
								resultat += cumulCoutTechno(11, lvlions,    8);
							}

							if( k == 14 )//astro prerequis
							{
								resultat += cumulCoutTechno(0, lvlespio,  4);
								resultat += cumulCoutTechno(8, lvlimpu,  3);
							}

							var PointsTechnoMetal   = prixInitial_techMetal[k]   * Math.pow( exposant_tech[k], lvll-1) ;
							var PointsTechnoCristal = prixInitial_techCristal[k] * Math.pow( exposant_tech[k], lvll-1) ;
							var PointsTechnoDeut    = prixInitial_techDeut[k]    * Math.pow( exposant_tech[k], lvll-1) ;


							resultat += 1000*((PointsTechnoMetal*taux[2]/taux[0])+(PointsTechnoCristal*taux[2]/taux[1])+(PointsTechnoDeut/taux[2]))
							return resultat;
						}
						function renta_plasma(lvlprochain)
						{
							var prix_plasma_taux_next_lvl = getPrix_techno_taux(12,lvlprochain);

							var supp_metal_plasma   =  0;
							var supp_cristal_plasma =  0;
							var supp_deut_plasma =  0;

							for (var i=0 ; i< nbPlanet; i++)
							{
								if(DATA.planet[i].moon=='false')
								{
									supp_metal_plasma   +=  prodMetalbase  ( DATA.planet[i].building.mmet, DATA.planet[i].pos )/100;
									supp_cristal_plasma +=  prodCristalbase( DATA.planet[i].building.mcri, DATA.planet[i].pos )*0.66/100;
									supp_deut_plasma	+=	prodDeutbase   ( DATA.planet[i].building.mdet, DATA.planet[i].resource.temp )*0.33/100;
								}
							}

							var supp_prod_taux_plasma = (supp_metal_plasma*taux[2]/taux[0]) + (supp_cristal_plasma*taux[2]/taux[1]) + (supp_deut_plasma/taux[2]);
							if( supp_prod_taux_plasma == 0 ) return -1;
							//console.log(prix_plasma_taux_next_lvl/supp_prod_taux_plasma == Number.POSITIVE_INFINITY || prix_plasma_taux_next_lvl/supp_prod_taux_plasma == Number.NEGATIVE_INFINITY);
							return prix_plasma_taux_next_lvl/supp_prod_taux_plasma;
						}
						/*
						function getPrixCrawlerTaux()
						{
							var PointMetal   = 2000;
							var PointCristal = 2000;
							var PointDeut = 1000;
							return (PointMetal*taux[2]/taux[0])+(PointCristal*taux[2]/taux[1])+(PointDeut/taux[2]);
						}

						//le prix de la foreuse / par ce quelle rapporte
						function renta_foreuse(numeroPlanet)
						{
							var lvlmm = parseInt(DATA.planet[numeroPlanet].building.mmet);
							var lvlmc = parseInt(DATA.planet[numeroPlanet].building.mcri);
							var lvlmd = parseInt(DATA.planet[numeroPlanet].building.mdet);
							var tempp = DATA.planet[numeroPlanet].resource.temp;

							var prodMetalCrawler = prodMetalbase(lvlmm, speedUni)*0.0003;
							var prodCristalCrawler = prodCristalbase(lvlmc, speedUni)*0.0003;
							var prodDeutCrawler = prodDeutbase(lvlmd, speedUni, tempp)*0.0003;

							var supp_prod_taux_crawler = (prodMetalCrawler*taux[2]/taux[0]) + (prodCristalCrawler*taux[2]/taux[1]) + (prodDeutCrawler/taux[2]);

							return getPrixCrawlerTaux() / supp_prod_taux_crawler;
						}
						*/
						function prodSuivante( type , temperature, lvlm, booster, maxPercentageCrawler ,pos)
						{
							//'mmet', 'mcri' , 'mdet'
							if( type == 0)
								return (prodMetal  (lvlm+1, lvlplasma, pos, booster, maxPercentageCrawler, Geolog)   - prodMetal  (lvlm, lvlplasma, pos  , booster, maxPercentageCrawler, Geolog))*taux[2]/taux[0] ;

							if( type == 1)
								return (prodCristal(lvlm+1, lvlplasma, pos, booster, maxPercentageCrawler, Geolog)   - prodCristal(lvlm, lvlplasma, pos, booster, maxPercentageCrawler, Geolog))*taux[2]/taux[1] ;

							if( type == 2)
								return (prodDeut   (lvlm+1, lvlplasma, temperature, booster, maxPercentageCrawler, Geolog) - prodDeut   (lvlm, lvlplasma  , temperature, booster, maxPercentageCrawler, Geolog))/taux[2];
						}
						function  cumulprix( cumulprixMetal, cumulprixCristal, type, lvl)//le deut n'intervient pas dans le prix
						{
							var i= (type == "m" ? 0 : (type == "c" ? 1 : 2));

							cumulprixMetal   = parseInt(cumulprixMetal) + arrondi(prixInitial_batMineMetal[i]*Math.pow(exposant[i],lvl-1));
							cumulprixCristal = parseInt(cumulprixCristal) + arrondi(prixInitial_batMineCristal[i]*Math.pow(exposant[i],lvl-1));

							return cumulprixMetal+";"+cumulprixCristal;
						}
						}
						function AffRentaPla()
						{

							// renta mines
							{
							var tr_mines = document.getElementById('tr_mines');
							tr_mines.innerHTML ="";
							tr_mines.removeAttribute("style");

							var month = document.createElement("th");
							month.setAttribute('colspan','3');

							var affRenta = '<br/><table id="renta_table" style="width:640px;text-align:center;font-size:12px;margin:auto;border-spacing:2px; border:3px solid gray;"><tr>'+
									'<td>'+text.bbcode.planet+' </td>'+
									'<td style="color:#'+options.couleur.graphA+';">'+text.tag.m+' </td>'+
									'<td>'+text.renta+'</td>'+
									'<td style="color:#'+options.couleur.graphC+';">'+text.tag.c+' </td>'+
									'<td>'+text.renta+'</td>'+
									'<td style="color:#'+options.couleur.graphD+';">'+text.tag.d+'</td>'+
									'<td>'+text.renta+'</td>'+
									'</tr>';
							var rentabilite = new Array();
							var result_rentaM = "1000000000000000";
							var result_rentaC = "1000000000000000";
							var result_rentaD = "1000000000000000";

							for (var f = 0 ; f < nbPlanet ; f++)
							{
								if(DATA.planet[f].moon != 'true')
								{
									var temperature =DATA.planet[f].resource.temp;

									var rm = rentaeeee( 'mmet' , temperature , f);
									var rc = rentaeeee( 'mcri' , temperature , f);
									var rd = rentaeeee( 'mdet' , temperature , f);

									rentabilite[f] = rm+';'+ rc+';'+ rd;

									if( parseInt(result_rentaM) > parseInt(rm) ) result_rentaM = rm;
									if( parseInt(result_rentaC) > parseInt(rc) ) result_rentaC = rc;
									if( parseInt(result_rentaD) > parseInt(rd) ) result_rentaD = rd;
								}
							}
							var couleurfond = "background-color:rgba(128, 128, 128, 0.5)";
							var couleurfond_mine_en_cour = "background-color:blue";
							var empire_result = "";
							for (var f = 0 ; f < nbPlanet ; f++)
							{
								if(DATA.planet[f].moon != 'true')
								{
									var planet_result = "";
                                    //console.log(DATA.planet[f].name);
									affRenta+= '<tr><td style="text-align:left;">'+DATA.planet[f].name +'</td>';

									if( result_rentaM == rentabilite[f].split(';')[0] )
									{
										if( BatRes_const[f].split('|')[1]  > start_time && BatRes_const[f].split('|')[0] == 'mmet' )
										affRenta+= '<td style="'+couleurfond_mine_en_cour+';text-align:center;color:#'+ options.couleur.graphA+';">'+(parseInt(DATA.planet[f].building.mmet)+2)+'</td>';
										else
										affRenta+= '<td style="'+couleurfond+';text-align:center;color:#'+ options.couleur.graphA+';">'+(parseInt(DATA.planet[f].building.mmet)+1)+'</td>';

										affRenta+= '<td style="'+couleurfond+';text-align:center;">'+(hourToyear(rentabilite[f].split(';')[0]))+'</td>';
										planet_result += "-1";
									}
									else
									{
										if( BatRes_const[f].split('|')[1]  > start_time && BatRes_const[f].split('|')[0] == 'mmet' )
										affRenta+= '<td style="'+couleurfond_mine_en_cour+';text-align:center;color:#'+ options.couleur.graphA+';">'+(parseInt(DATA.planet[f].building.mmet)+2)+'</td>';
										else
										affRenta+= '<td style="text-align:center;color:#'+ options.couleur.graphA+';">'+(parseInt(DATA.planet[f].building.mmet)+1)+'</td>';
										affRenta+= '<td>'+(hourToyear(rentabilite[f].split(';')[0]))+'</td>';
									}



									if( result_rentaC == rentabilite[f].split(';')[1] )
									{
										if( BatRes_const[f].split('|')[1]  > start_time && BatRes_const[f].split('|')[0] == 'mcri' )
										affRenta+= '<td style="'+couleurfond_mine_en_cour+';text-align:center;color:#'+ options.couleur.graphC+';">'+(parseInt(DATA.planet[f].building.mcri)+2)+'</td>';
										else
										affRenta+= '<td style="'+couleurfond+';text-align:center;color:#'+ options.couleur.graphC+';">'+(parseInt(DATA.planet[f].building.mcri)+1)+'</td>';

										affRenta+= '<td style="'+couleurfond+';text-align:center;">'+(hourToyear(rentabilite[f].split(';')[1]))+'</td>';
										planet_result += "-2";
									}
									else
									{
										if( BatRes_const[f].split('|')[1]  > start_time && BatRes_const[f].split('|')[0] == 'mcri' )
										affRenta+= '<td style="'+couleurfond_mine_en_cour+';text-align:center;color:#'+ options.couleur.graphC+';">'+(parseInt(DATA.planet[f].building.mcri)+2)+'</td>';
										else
										affRenta+= '<td style="text-align:center;color:#'+ options.couleur.graphC+';">'+(parseInt(DATA.planet[f].building.mcri)+1)+'</td>';
										affRenta+= '<td>'+(hourToyear(rentabilite[f].split(';')[1]))+'</td>';
									}



									if( result_rentaD == rentabilite[f].split(';')[2] )
									{
										if( BatRes_const[f].split('|')[1]  > start_time && BatRes_const[f].split('|')[0] == 'mdet' )
										affRenta+= '<td style="'+couleurfond_mine_en_cour+';text-align:center;color:#'+ options.couleur.graphD+';">'+(parseInt(DATA.planet[f].building.mdet)+2)+'</td>';
										else
										affRenta+= '<td style="'+couleurfond+';text-align:center;color:#'+ options.couleur.graphD+';">'+(parseInt(DATA.planet[f].building.mdet)+1)+'</td>';

										affRenta+= '<td style="'+couleurfond+';text-align:center;">'+(hourToyear(rentabilite[f].split(';')[2]))+'</td>';
										planet_result += "-3";
									}
									else
									{
										if( BatRes_const[f].split('|')[1]  > start_time && BatRes_const[f].split('|')[0] == 'mdet' )
										affRenta+= '<td style='+couleurfond_mine_en_cour+';text-align:center;color:#'+ options.couleur.graphD+';">'+(parseInt(DATA.planet[f].building.mdet)+2)+'</td>';
										else
										affRenta+= '<td style="text-align:center;color:#'+ options.couleur.graphD+';">'+(parseInt(DATA.planet[f].building.mdet)+1)+'</td>';

										affRenta+= '<td>'+(hourToyear(rentabilite[f].split(';')[2]))+'</td>';
									}
									affRenta+= '</tr>';
									empire_result += idPlanete[f]+planet_result+";";
								}
							}
							var result_renta = Math.min( parseInt(result_rentaM),  parseInt(result_rentaC),   parseInt(result_rentaD) );

							GM_setValue(nomScript+"empireResult"+coordPM+serveur,empire_result);
							}

							// plasma
							{
							affRenta += '</table><div style="float:left;" ><table id="plasma_table" style="text-align:center;font-size:12px;margin:auto;border-spacing:2px; border:3px solid gray;" border="1"><thead><tr><th colspan="2">'+text.tag.plas+'</th></tr><tr><th>level</th><th>'+text.renta+'</th></tr></thead>';
							couleurfond_mine_en_cour = "";
							if( Res_const.split('|')[0] == "plas" && Res_const.split('|')[1] > start_time)
							{
								couleurfond_mine_en_cour = "background-color:blue";
							}
							var plasmaList = new Array();
							for( var p = 1; p <= 20 ; p++)
							{
								var renta_plasma_data = renta_plasma( lvlplasma+p );
								if(renta_plasma_data >= 0)
								{
									if( p <= 10 )
									{
										affRenta +=  '<tr><td style="'+couleurfond_mine_en_cour+';color:#'+ options.couleur.graphA+';text-align:right;width:30px">'+(lvlplasma+p)+'</td>';
										if( renta_plasma_data <= result_renta )
											affRenta +=  '<td style="background-color:gray;text-align:right;width:120px">'+hourToyear(renta_plasma_data)+'</td></tr>';

										else
											affRenta +=  '<td style="text-align:right;width:120px">'+hourToyear(renta_plasma_data)+'</td></tr>';
									}

									couleurfond_mine_en_cour = "";
									plasmaList.push( { "lvl" : lvlplasma+p , "renta" : renta_plasma_data   } );
								}
							}
							}

							// ordres des mines
							{
							//copie des mines
							var Planet = new Array();

							for (var f = 0 ; f < nbPlanet ; f++)
							{
								if(DATA.planet[f].moon != 'true')
								{
									Planet[f] = new Array();

									Planet[f].m = parseInt(DATA.planet[f].building.mmet) + ( BatRes_const[f].split('|')[0] == 'mmet' && BatRes_const[f].split('|')[1] > start_time ? 1 : 0 );
									Planet[f].c = parseInt(DATA.planet[f].building.mcri) + ( BatRes_const[f].split('|')[0] == 'mcri' && BatRes_const[f].split('|')[1] > start_time ? 1 : 0 );
									Planet[f].d = parseInt(DATA.planet[f].building.mdet) + ( BatRes_const[f].split('|')[0] == 'mdet' && BatRes_const[f].split('|')[1] > start_time ? 1 : 0 );

									Planet[f].t = DATA.planet[f].resource.temp;

									Planet[f].boosm = options.generale.useBoost?DATA.planet[f].booster.met:0;
									Planet[f].boosc = options.generale.useBoost?DATA.planet[f].booster.cri:0;
									Planet[f].boosd = options.generale.useBoost?DATA.planet[f].booster.det:0;

								}
							}
							var itmax = 200;
							var tasklist = new Array();

							for (var it = 0 ; it < itmax ; it++)
							{
								var minR = 100000000000000000;
								var minF;
								var minT;
								var minPrix;
								var minProd;

								for (var f = 0 ; f < Planet.length ; f++)
								{
									if(DATA.planet[f].moon != 'true')
									{
										var prixmtm = getPrix_mine_taux(0, Planet[f].m);
										var prixmtc = getPrix_mine_taux(1, Planet[f].c);
										var prixmtd = getPrix_mine_taux(2, Planet[f].d);

										var crawler = DATA.planet[f].fleet.crawler;
										var maxPercentageCrawler = percentageCrawler(Planet[f].m, Planet[f].c, Planet[f].d, crawler);

										var prodsm = prodSuivante( 0 , Planet[f].t , Planet[f].m, options.generale.useBoost ? Planet[f].boosm:0, maxPercentageCrawler );
										var prodsc = prodSuivante( 1 , Planet[f].t , Planet[f].c, options.generale.useBoost ? Planet[f].boosc:0, maxPercentageCrawler, DATA.planet[f].pos );
										var prodsd = prodSuivante( 2 , Planet[f].t , Planet[f].d, options.generale.useBoost ? Planet[f].boosd:0, maxPercentageCrawler );

										var rm = prixmtm / prodsm ;
										var rc = prixmtc / prodsc ;
										var rd = prixmtd / prodsd ;

										if( minR > rm ){ minR = rm; minF = f; minT = "m"; minPrix = prixmtm ; minProd = prodsm; }
										if( minR > rc ){ minR = rc; minF = f; minT = "c"; minPrix = prixmtc ; minProd = prodsc; }
										if( minR > rd ){ minR = rd; minF = f; minT = "d"; minPrix = prixmtd ; minProd = prodsd; }
									}
								}
								Planet[minF][minT] += 1;

								tasklist.push( {"f": minF, "t" : minT, "r" : minR, "lvl" : Planet[minF][minT], "prix" : minPrix, "prodP" : minProd } );
							}
							affRenta += '</table>';
							}

							// astro
							{
								var lvl_n = parseInt(Techno[10])/2 == Math.round(parseInt(Techno[10])/2) ? parseInt(Techno[10]) : parseInt(Techno[10])+1;
								var lvl_np1 = lvl_n +1 ;

								//var cout_planete = 0;
								var nbmoyenne = 0;

								for (var f = 0 ; f < nbPlanet ; f++)
								{
									if( DATA.planet[f].moon != 'true')
									{
										nbmoyenne++;
									}
								}

								//production nouvelle planete
								var prod_taux = ( prod[0]*taux[2]/taux[0] + prod[1]*taux[2]/taux[1] + prod[2]/taux[2] )/24;
								var prod_supp = (prod_taux * ( nbmoyenne + 1 ) / ( nbmoyenne ))  - prod_taux;

								//var astroBennebList = new Array();
								var astroZetaList = new Array();
								for( var itastro = 0 ; itastro < 7 ; itastro++)
								{
									//prix techno
									var astro_taux = getPrix_techno_taux(14,lvl_n)+getPrix_techno_taux(14,lvl_np1);

									//astroBennebList.push( { "lvl" : lvl_n ,  "lvlpun" : lvl_np1 , "tk_id_astro" : tk_id_astro  } );
									astroZetaList.push(   { "lvl" : lvl_n ,  "lvlpun" : lvl_np1 , "astro_taux" : astro_taux } );
									lvl_n += 2
									lvl_np1 = lvl_n +1 ;

								}
							}

							// affichage ordres
							{
							affRenta += '</div><div style="overflow-y:scroll;height:225px;">';//225
							affRenta += '<table id="ordre_table" style="font-size:12px;margin:auto;border-spacing:2px; border:3px solid gray;width:440px" ><thead>';
							affRenta += '<tr><th colspan="5">'+text.ordre_mine+'</th></tr>';
							affRenta += '<tr><th></th><th>'+text.exportm.planete+'</th><th>'+text.Mines+'</th><th>level</th></tr>';
							affRenta += '</thead>';
							var iP = 0;
							//var iAB = 0;
							var iAZ = 0;
							var nb = 1;
							var cumulprixMetal = 0;
							var cumulprixCristal = 0;

							for (var nn = 0 ; nn < tasklist.length ; nn++)
							{

								if( plasmaList.length > 0 && plasmaList.length > iP  && plasmaList[iP].renta < tasklist[nn].r )
								{
									affRenta += '<tr class="ago-infocompte" ago-data=\'{"id":122,"increase":'+plasmaList[iP].lvl+'}\' style="color:cyan;"><td>'+(nb++)+'</td><td colspan="2">'+text.tag.plas+'</td><td>'+plasmaList[iP].lvl+'</td></tr>';

									iP++;
									nn--;
								}
								else
								{
									if( astroZetaList.length > 0 && astroZetaList.length > iAZ  && (tasklist[nn].prodP * astroZetaList[iAZ].astro_taux)  <= (tasklist[nn].prix * prod_supp))
									{
										affRenta += '<tr class="ago-infocompte" ago-data=\'{"id":124,"increase":'+astroZetaList[iAZ].lvl+',"range":1}\'  style="color:#6F9FC8;"><td>'+(nb++)+'</td><td colspan="2">'+text.tag.expe+' '+astroZetaList[iAZ].lvl+'+'+astroZetaList[iAZ].lvlpun+' </td><td></td></tr>';
										iAZ++;
									}
									/*
									//ajouter test max du nombre de foreuse
									var renta_crawler = renta_foreuse(tasklist[nn].f);
									if( renta_crawler < tasklist[nn].r )
									{
										affRenta += '<tr><td>foreuse</td></tr>';
									}
									*/
									var coul = tasklist[nn].t == "m" ? options.couleur.graphA : tasklist[nn].t == "c" ? options.couleur.graphC : options.couleur.graphD;
									var cumul = cumulprix( cumulprixMetal, cumulprixCristal, tasklist[nn].t, tasklist[nn].lvl);
									cumulprixMetal = cumul.split(';')[0];
									cumulprixCristal = cumul.split(';')[1];
									titlecumul = text.tag.m+" : "+format(cumulprixMetal)+"<br />"+text.tag.c+" : "+format(cumulprixCristal);

									affRenta += '<tr class="ago-infocompte" ago-data=\'{"id":'+(tasklist[nn].t =="m" ? 1 : (tasklist[nn].t =="c" ? 2 : 3 ))+',"increase":'+tasklist[nn].lvl+',"coords":"'+DATA.planet[tasklist[nn].f].name+'"}\'><td>'+(nb++)+'</td><td>'+DATA.planet[tasklist[nn].f].name+'</td><td style="color:#'+coul+';"  class="tooltipLeft" title="'+titlecumul+'">'+text.tag[tasklist[nn].t]+'</td><td>'+tasklist[nn].lvl+'</td></tr>';
								}
							}

							month.innerHTML = affRenta+'</table></div><table id="txt_renta_table"><tr><td colspan="3" style="font-size:8px;width:600px;text-align:center;">'+text.textrenta+'</td></tr></table><br/>' ;
							tr_mines.appendChild(month);
							}
						}

						{ // Listener
						if(document.getElementById("Rentabilite_mines"))
						{
							document.getElementById("Rentabilite_mines").addEventListener("click", function(event)
							{
								AffRentaPla();
							}, true);
						}

						// ****************************** RaZ progression *******************************

						if(document.getElementById("pointRef"))
						{
							document.getElementById("pointRef").addEventListener("click", function(event)
							{
								if(confirm(text.Avertissement))
								{
								GM_setValue(nomScript+"PointRef"+coordPM+serveur,PointsTotal+';'+date+';'+PointsMinesTotal+';'+PointsBatimentsTotal+';'+PointsTechno+';'+PointsFlotteTotal+';'+PointsDefTotal+';false;'+PointRef[8]+';'+PointRef[9]+';'+start_time+';'+Actuelrank[2]+';'+Actuelrank[1]+';'+Actuelrank[3]+';'+PointIndest+';'+Actuelrank[0]+';;;');

								}
							}, true);
						}

						/*
						if (!AJours || (!(FireFox || Tamper) && !Opera && parseInt(GM_getValue(nomScript+"dateMaJ",0))+ freqMaj< Date.parse(new Date()) / 1000) )
						{
							// ******************************A Jours apres clique *******************************
							document.getElementById("MaJ").addEventListener("click", function(event)
							{
								GM_setValue(nomScript+"aJours",true);
								GM_setValue(nomScript+"dateMaJ",Date.parse(new Date()) / 1000);
							}, true);
						}
						*/
						/*
						if(document.getElementById("updateInfoCompte") )
						{
							document.getElementById("updateInfoCompte3").addEventListener("click", function(event)
							{
								GM_setValue(nomScript+"aJours",true);
								GM_setValue(nomScript+"dateMaJ",Date.parse(new Date()) / 1000);
							}, true);
						}
						*/
						/*
						if (document.getElementById("iconeUpdate") && !AJours)
						{
						document.getElementById("iconeUpdate").addEventListener("click", function(event)
							{
								GM_setValue(nomScript+"aJours",true);
								GM_setValue(nomScript+"dateMaJ",Date.parse(new Date()) / 1000);
							}, true);
						}
						*/
						}
					}
				}
			}
		}
		// *******************************************************************************************************
		// *********************************************************** Page RC  **********************************
		// *******************************************************************************************************
		if (  url.indexOf('page=messages',0)  >= 0)
		{
			/*
			if(options.generale.Signa)
			{
				var speedfleet = document.getElementsByName('ogame-universe-speed-fleet')[0].content;
				function key()
				{
					//var icon_apikey = document.getElementsByClassName("icon_nf icon_apikey");
					var icon_apikey = document.getElementsByClassName("icon_nf icon_apikey tooltipCustom tooltip-width:400 fleft");

					var len = icon_apikey.length;
					if( len > 0 )
					{
						var cr = false;
						var sr = false;

						for(var i=0; i < len ; i++)
						{
							var crkeyelement = icon_apikey[i];
							if(typeof(crkeyelement) !="undefined")
							{
								var title = crkeyelement.title.split("'");//<input value='sr-00-000-3806d676e5c7762076d7095031441ec597c2c7fb' readonly style='width:360px'></input>
								var crkey = title[1];
								//var crkey = crkeyelement.href;

								if( crkey != "")
								{
									var lettre = crkey.substr(0,2);
									//var lettre = crkey.substr(14,2);
									if( lettre == "cr" )
									{
										crkeyelement.className = "icon_nf icon_apikey tooltip tooltipRight tooltipClose";
										crkeyelement.title = "<a href=\'http://topraider.eu/?CR_KEY="+crkey+"&idPlayer="+IdJoueur+"\' target=\'_blank\'> Vulca convertor </a><br />"+
															 "<a href=\'https://ogotcha.universeview.be/?CR_KEY="+crkey+"\' target=\'_blank\'>OGotcha convertor </a><br />"+
															 "<a href=\'http://ogmem.com/cr/directupload?api_id="+crkey+"\' target=\'_blank\'>OGMem convertor </a><br /><br />"+
															 "CR KEY : "+crkey;

										cr = true;
									}
									if( lettre == "sr" )
									{

										var Techno = GM_getValue(nomScript+"nivTechno"+coordPM+serveur, '-1;-1;-1;-1;-1;-1;-1;-1;-1;-1;-1;-1;-1;-1;-1;-1;-1;-1' ).split(';');

										crkeyelement.className = "icon_nf icon_apikey tooltip tooltipRight tooltipClose";
										//var nom_techno = new Array( 'ener', 'lase','ions','hype', 'plas', 'comb', 'impu', 'phyp', 'espi', 'ordi', 'astro' ,'rese', 'grav', 'arme','bouc', 'prot');
										crkeyelement.title = "<a href=\'http://topraider.eu/index.php?SR_KEY="+crkey+"&combu="+Techno[5]+"&impu="+Techno[6]+"&prop="+Techno[7]+"&arme="+Techno[13]+"&bouclier="+Techno[14]+"&protect="+Techno[15]+"&speed="+speedfleet+"' target=\'_blank\'> Websim simulator </a><br />"+
															 "SR KEY : "+crkey;

										sr = true;
									}
								}
							}

						}
						if( cr || sr)
						{
							clearInterval(refreshIntervalId);
							refreshIntervalId = setInterval(key, 500);
						}

					}
				}
				var refreshIntervalId = setInterval(key, 500);
			}
			*/
		}


		// *******************************************************************************************************
		// *********************************************************** Page Empire  ******************************
		// *******************************************************************************************************

		if ((url.indexOf('page=standalone&component=empire',0))>=0)
		{
			//console.log("empire");

			var serveur       = document.getElementsByName('ogame-universe')[0].content;
			var IdJoueur      = document.getElementsByName('ogame-player-id')[0].content;
			var speedUni      = document.getElementsByName('ogame-universe-speed')[0].content;
			var coordPM       = GM_getValue(nomScript+'Pseudo'+serveur , '#').split('#')[1];
			var Geolog        = GM_getValue(nomScript+"Geolog"+coordPM+serveur, 1);
			var classBonusProd= GM_getValue(nomScript+"classBonusProd"+coordPM+serveur, 0);
			var idPlanete     = GM_getValue(nomScript+'idPlanet'+IdJoueur+serveur , '10;').split(';');
			var empireoptions = GM_getValue(nomScript+'empire'+serveur+coordPM , 'true;true;;;').split(';');

			var classBonusProd = characterClassName == "miner" ? 25/100 : 0;
			var crawler_value = characterClassName == "miner" ? 0.03 : 0.02;
			var x_value = characterClassName == "miner" ? 1.5 : 1;
			var y_value = 8;

			var DefPla        = GM_getValue(nomScript+"DefPlanete"+coordPM+serveur,'||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;').split(';');
			var BatRes        = GM_getValue(nomScript+"BatRes"+coordPM+serveur,'||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;||||||||||||||;').split(';');
			var BatSta        = GM_getValue(nomScript+"BatSta"+coordPM+serveur,'|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;|||||||||||||;').split(';');
			var flotte        = GM_getValue(nomScript+"flotte"+coordPM+serveur,'0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;0|0|0|0|0|0|0|0|0|0|0|0|0|0;').split(';');
			var boost         = GM_getValue(nomScript+"boost"+coordPM+serveur,'0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;0|0|0;').split(';');
			var infTech       = GM_getValue(nomScript+"pointTechnoUni"+coordPM+serveur,'0;0').split(';');

			var BatSta_const = GM_getValue(nomScript+"BatSta_const"+coordPM+serveur,'|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|').split(';');
			var BatRes_const = GM_getValue(nomScript+"BatRes_const"+coordPM+serveur,'|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|').split(';');
			var Res_const = GM_getValue(nomScript+"Res_const"+coordPM+serveur,'|');
			var Def_const = GM_getValue(nomScript+"Def_const"+coordPM+serveur,'|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|').split(';');

			var isMoon = (url.indexOf('&planetType=1')>-1)

			var coutBati = new Array(new Array(0.06,0.015,0),new Array(0.048,0.024,0),new Array(0.225,0.075,0),new Array(0.075,0.030,0),new Array(0.9,0.360,0.18),new Array(0,2,0.5),new Array(1,0,0),new Array(1,0.5,0),new Array(1,1,0),new Array(2.645,0,0),new Array(2.645,1.322,0),new Array(2.645,2.645,0),new Array(0.4,0.12,0.2),new Array(0.4,0.2,0.1),new Array(0.2,0.4,0.2),new Array(20,40,0),new Array(20,20,1),new Array(1000,500,100),new Array(0,50,100));
			var nom_bat = new Array('mmet', 'mcri' , 'mdet', 'ces', 'cef', 'sat',
									'hmet', 'hcri', 'hdet', 'sm','sc','sd','rob','cspa','lab', 'depo', 'silo', 'nan',  'ter', 'dock');
			var exposant = new Array(1.5,1.6,1.5,1.5,1.8,1,2,2,2, 2.3, 2.3, 2.3,2,2,2,2,2,2,2,2);

			var coutBatiL = new Array(new Array(0,2,0.5),new Array(1,0,0),new Array(1,0.5,0),new Array(1,1,0),new Array(0.4,0.12,0.2),new Array(0.4,0.2,0.1),new Array(20,40,20),new Array(20,40,20),new Array(2000,4000,2000));
			var nom_batL = new Array('sat', 'hmet', 'hcri', 'hdet','rob','cspa', 'base', 'phal', 'port');
			var exposantL = new Array(1,2,2,2, 2,2,2,2,2,2,2,2);

			var nom_techno = new Array( 'ener', 'lase','ions','hype', 'plas', 'comb', 'impu', 'phyp', 'espi', 'ordi', 'astro' ,'rese', 'grav', 'arme','bouc', 'prot');
			var coutBatiT = new Array(new Array(0,0.8,0.4),new Array(0.2,0.1,0),new Array(1,0.3,0.1),new Array(0,4,2),new Array(2,4,1),new Array(0.4,0,0.6),new Array(2,4,0.6),new Array(10,20,6),new Array(0.2,1,0.2),new Array(0,0.4,0.6),new Array(4,8,4),new Array(240,400,160),new Array(0,0,0),new Array(0.8,0.2,0),new Array(0.2,0.6,0),new Array(1,0,0));
			var exposantT = new Array(2,2,2,2,2,2,2,2,2,2,1.75,2,2,2,2,2);

			function capacitehangar(lvl)
			{
				return Math.floor((2.5 * Math.pow(1.8331954764,lvl))) * 5000 ;
			}

			function empire()
			{
				if( empireoptions[1] == "true" )
				{
					var empire_result_gm = GM_getValue(nomScript+"empireResult"+coordPM+serveur,'');
					var empire_result = empire_result_gm.split(';');
					var empire_result_tab = new Array();
					for(var ii =0 ; ii< empire_result.length ; ii++)
					{
						var splitt = empire_result[ii].split('-');
						empire_result_tab[splitt[0]] = new Array();
						for( tt = 1 ; tt < splitt.length ; tt++)
						{
							empire_result_tab[splitt[0]].push(splitt[tt]);
						}
					}
				}
				var listeNivTech ='';
				var batEncontruction =-1;
				var numConst=0;
				var niv =0;
				var RaZRechConst = true;
				function  getlvl( name)
				{
					var lvl = planetid.getElementsByClassName(name)[0];
					if(lvl)
					{
						if(lvl.getElementsByTagName('a').length> 0 )
						{
							lvl = lvl.getElementsByTagName('a')[0].textContent;

							if(planetid.getElementsByClassName(name)[0].getElementsByTagName('img').length > 0 )
							{
								batEncontruction =numConst;
								niv=lvl;
							}
						}
						else
						{
							lvl = lvl.textContent;
						}

						numConst++;

						return lvl.replace(/\./g, '').replace(/\,/g, '');
					}
					else
					{
							return 0;
					}
				}

				function addConst(nRes)
				{
					if(batEncontruction>-1)
					{
						if(parseInt(BatRes_const[nbplanete].split('|')[1]) <  start_time || isNaN(BatRes_const[nbplanete].split('|')[1]) || nom_bat[batEncontruction]!= BatRes_const[nbplanete].split('|')[0])
							{BatRes_const[nbplanete] = '|'; }
						if(parseInt(BatSta_const[nbplanete].split('|')[1]) <  start_time || isNaN(BatSta_const[nbplanete].split('|')[1]) || nom_bat[batEncontruction]!= BatSta_const[nbplanete].split('|')[0])
							{BatSta_const[nbplanete] = '|'; }

						if (BatRes_const[nbplanete] == '|' && BatSta_const[nbplanete] == '|' )
						{
							var prix = Math.floor((coutBati[batEncontruction][0]+coutBati[batEncontruction][1])*(Math.pow(exposant[batEncontruction],niv))*1000);

							var timeFin = Math.round(start_time + ((prix/5000)*(2/(1+parseInt(BatSta[nbplanete].split('|')[0])))*(1/Math.pow(2,parseInt(BatSta[nbplanete].split('|')[5])))/speedUni)*3600000) ;

							if(batEncontruction<nRes)
							{
								BatRes_const[nbplanete] = nom_bat[batEncontruction] + '|'+timeFin ;
							}
							else BatSta_const[nbplanete] = nom_bat[batEncontruction] + '|'+timeFin ;
						//		alert(batEncontruction)
							//	alert(	BatRes_const[nbplanete]+BatSta_const[nbplanete]);
						}
					}
					else
					{
						BatRes_const[nbplanete] ='|';
						BatSta_const[nbplanete] ='|';
					}
					enConst=-1;
					numConst=0;
					niv=0;
				}
				function addConstTech()
				{
					if(batEncontruction > -1  )
					{
						if(parseInt(Res_const.split('|')[1]) <  start_time || isNaN(Res_const.split('|')[1]) || Res_const.split('|')[0] != nom_techno[batEncontruction]) // si le joueur utilise plusieurs ordi
						{Res_const = '|';}

						if (Res_const == '|')
						{
							var prix = Math.floor((coutBatiT[batEncontruction][0]+coutBatiT[batEncontruction][1])*(Math.pow(exposantT[batEncontruction],niv))*1000);
							var timeFin =  Math.round(start_time + (prix / (1000 * (1 + parseInt(BatSta[nbplanete].split('|')[2]))))/speedUni*3600000) ;

							Res_const = nom_techno[batEncontruction] + '|'+timeFin ;

						}
					}

				}

				for(var nbplanete =0 ; nbplanete< idPlanete.length -1 ; nbplanete++)
				{
					if(document.getElementById('planet'+idPlanete[nbplanete]) )
					{
						var planetid = document.getElementById('planet'+idPlanete[nbplanete]);

						if( !isMoon )
						{
							if( empireoptions[1] == "true" )
							{
								if( empire_result_tab[idPlanete[nbplanete]] )
								{
									for( xx = 0 ; xx < empire_result_tab[idPlanete[nbplanete]].length ; xx++)
									{
										planetid.getElementsByClassName(empire_result_tab[idPlanete[nbplanete]][xx])[0].setAttribute("style", "background:url();background-color:SaddleBrown  ;");
									}
								}
							}
							if( empireoptions[0] == "true" )
							{
								var lvlmetal = getlvl("1");
								var lvlcristal = getlvl("2");
								var lvldeut = getlvl("3");
								var inner = planetid.getElementsByClassName("fields textCenter")[0].innerHTML;
								var temperature = inner.substr(4,inner.length-1).replace( /[^0-9-]/g, "");
								var lvlhangarmetal = getlvl("22");
								var lvlhangarcristal = getlvl("23");
								var lvlhangardeut = getlvl("24");
								var lvlplasma = getlvl("122");

								var metal = planetid.getElementsByClassName("metal")[0].textContent.replace(/\./g, '').replace(/\,/g, '');
								var cristal = planetid.getElementsByClassName("crystal")[0].textContent.replace(/\./g, '').replace(/\,/g, '');
								var deut = planetid.getElementsByClassName("deuterium")[0].textContent.replace(/\./g, '').replace(/\,/g, '');
								var coeffbostermetal = 0;
								var coeffbostercristal = 0;
								var coeffbosterdeut = 0;

                                var position = planetid.getElementsByClassName("planetData")[0].textContent.split(':')[2].split(']')[0];
                                //console.log(position);

                                if ( planetid.innerHTML.indexOf("de922af379061263a56d7204d1c395cefcfb7d75")  != -1) coeffbostermetal = 10;
                                if ( planetid.innerHTML.indexOf("ba85cc2b8a5d986bbfba6954e2164ef71af95d4a")  != -1) coeffbostermetal = 20;
                                if ( planetid.innerHTML.indexOf("05294270032e5dc968672425ab5611998c409166")  != -1) coeffbostermetal = 30;
                                if ( planetid.innerHTML.indexOf("a83cfdc15b8dba27c82962d57e50d8101d263cfb")  != -1) coeffbostermetal = 40;

                                if ( planetid.innerHTML.indexOf("3c9f85221807b8d593fa5276cdf7af9913c4a35d")  != -1) coeffbostercristal = 10;
                                if ( planetid.innerHTML.indexOf("422db99aac4ec594d483d8ef7faadc5d40d6f7d3")  != -1) coeffbostercristal = 20;
                                if ( planetid.innerHTML.indexOf("118d34e685b5d1472267696d1010a393a59aed03")  != -1) coeffbostercristal = 30;
                                if ( planetid.innerHTML.indexOf("35d96e441c21ef112a84c618934d9d0f026998fd")  != -1) coeffbostercristal = 40;

                                if ( planetid.innerHTML.indexOf("d9fa5f359e80ff4f4c97545d07c66dbadab1d1be")  != -1) coeffbosterdeut = 10;
                                if ( planetid.innerHTML.indexOf("e4b78acddfa6fd0234bcb814b676271898b0dbb3")  != -1) coeffbosterdeut = 20;
                                if ( planetid.innerHTML.indexOf("5560a1580a0330e8aadf05cb5bfe6bc3200406e2")  != -1) coeffbosterdeut = 30;
                                if ( planetid.innerHTML.indexOf("4b51d903560edd102467b110586000bd64fdb954")  != -1) coeffbosterdeut = 40;

								var crawler = getlvl("217");

								var maxPercentageCrawler = percentageCrawler(lvlmetal, lvlcristal, lvldeut, crawler);
								//console.log("crawler "+crawler+" maxPercentageCrawler "+ maxPercentageCrawler);

								var prod_m_total = prodMetal  (lvlmetal  , lvlplasma , position , coeffbostermetal, maxPercentageCrawler, Geolog) + 30*speedUni;
								var prod_c_total = prodCristal(lvlcristal, lvlplasma , position, coeffbostercristal, maxPercentageCrawler, Geolog) + 15*speedUni;
								var prod_d_total = prodDeut   (lvldeut   , lvlplasma , temperature , coeffbosterdeut, maxPercentageCrawler, Geolog);



								var minMetal   = (capacitehangar(lvlhangarmetal)   - metal)   / prod_m_total ;
								var minCristal = (capacitehangar(lvlhangarcristal) - cristal) / prod_c_total ;
								var minDeut    = prod_d_total == 0 ? 1000000 : (capacitehangar(lvlhangardeut)    - deut)    / prod_d_total ;

								var minimumheure = Math.min(minMetal ,	minCristal	,	minDeut );
								var type1 = "";
								var type2 = "";
								var type3 = "";

								function hourMinute(minheure)
								{
									var heure  = Math.floor(minheure);
									var minute = Math.floor((minheure - heure)*60);
									var resr = heure+"h"+(minute >= 10 ? minute : "0"+minute );

									return resr;
								}
								if ( minMetal   == minimumheure )
								{
									type1 = "METAL : " +hourMinute(minMetal);
									if ( minCristal <= minDeut )
									{
										type2 = "CRISTAL : " +hourMinute(minCristal);
										type3 = "DEUT : "    +hourMinute(minDeut);
									}
									else
									{
										type3 = "CRISTAL : " +hourMinute(minCristal);
										type2 = "DEUT : "    +hourMinute(minDeut);
									}

								}
								if ( minCristal == minimumheure )
								{
									type1 = "CRISTAL : " +hourMinute(minCristal);
									if ( minMetal <= minDeut )
									{
										type3 = "DEUT : "  +hourMinute(minDeut);
										type2 = "METAL : " +hourMinute(minMetal);
									}
									else
									{
										type2 = "DEUT : "  +hourMinute(minDeut);
										type3 = "METAL : " +hourMinute(minMetal);
									}
								}
								if ( minDeut    == minimumheure )
								{
									type1 = "DEUT : " +hourMinute(minDeut);
									if ( minMetal <= minCristal )
									{
										type3 = "CRISTAL : " +hourMinute(minCristal);
										type2 = "METAL : "   +hourMinute(minMetal);
									}
									else
									{
										type2 = "CRISTAL : " +hourMinute(minCristal);
										type3 = "METAL : "   +hourMinute(minMetal);
									}
								}

								var resr = hourMinute(minimumheure);
								if( minimumheure < 10 )
								{
									resr = "<span style='color:red'>"+resr+"</span>" ;
								}

								planetid.getElementsByClassName("row")[1].innerHTML = "<span class='tooltipRight js_hideTipOnMobile' title='"+type1+"<br />"+type2+"<br />"+type3+"' style='line-height:23px'>"+resr+"</span>";
								document.getElementsByTagName('body')[0].setAttribute("style","text-align:center");
							}
						}

						batEncontruction=-1;
						numConst=0;
						niv=0;
						if(!isMoon)
						{
							BatRes[nbplanete] = getlvl("1")+'|'+		getlvl("2")+'|'+		getlvl("3")+'|'+		getlvl("4")+'|'+
												getlvl("12")+'|'+		getlvl("212")+'|'+		getlvl("22")+'|'+		getlvl("23")+'|'+
												getlvl("24")+'|'+		getlvl("25")+'|'+		getlvl("26")+'|'+		getlvl("27")+'|';

							BatSta[nbplanete] = getlvl("14")+'|'+		getlvl("21")+'|'+		getlvl("31")+'|'+		getlvl("34")+'|'+
												getlvl("44")+'|'+		getlvl("15")+'|'+		getlvl("33")+'|'+

								//dock
								getlvl("36")+'|'+

								'0|0|0|false';

							addConst(11);

							boost[nbplanete] = coeffbostermetal+'|'+coeffbostercristal+'|'+coeffbosterdeut;

						}
						else
						{

							BatRes[nbplanete] = '0|0|0|0|0|'+			getlvl("212")+'|'+		getlvl("22")+'|'+		getlvl("23")+'|'+		getlvl("24")+'|'+		'0|0|0';

							//ajout de 0| pour dock
							BatSta[nbplanete] = getlvl("14")+'|'+		getlvl("21")+'|'+		'0|0|0|0|0|0|'+
								getlvl("41")+'|'+		getlvl("42")+'|'+		getlvl("43")+'|'+'true';
							addConst(3);

							boost[nbplanete] = '0|0|0';
						}

						flotte[nbplanete+1]=    getlvl("202")+'|'+		getlvl("203")+'|'+		getlvl("204")+'|'+		getlvl("205")+'|'+
												getlvl("206")+'|'+		getlvl("207")+'|'+		getlvl("208")+'|'+		getlvl("209")+'|'+
												getlvl("210")+'|'+		getlvl("211")+'|'+		getlvl("212")+'|'+		getlvl("213")+'|'+
												getlvl("214")+'|'+		getlvl("215")+'|'+		getlvl("218")+'|'+		getlvl("219")+'|'+		getlvl("217")+'|';

						DefPla[nbplanete] =     getlvl("401")+'|'+		getlvl("402")+'|'+		getlvl("403")+'|'+		getlvl("404")+'|'+
												getlvl("405")+'|'+		getlvl("406")+'|'+		getlvl("407")+'|'+		getlvl("408")+'|'+
												getlvl("502")+'|'+		getlvl("503")+'|';

						var isRechConst = planetid.getElementsByClassName('values research groupresearch')[0].getElementsByTagName('img').length

						if(isRechConst != 0) RaZRechConst = false;

						if (nbplanete == 0 || isRechConst !=0)
						{
							enConst=-1;
							numConst=0;
							niv=0;

							listeNivTech =  getlvl("113")+';'+		getlvl("120")+';'+
											getlvl("121")+';'+		getlvl("114")+';'+
											getlvl("122")+';'+		getlvl("115")+';'+
											getlvl("117")+';'+		getlvl("118")+';'+
											getlvl("106")+';'+		getlvl("108")+';'+
											getlvl("124")+';'+		getlvl("123")+';'+
											getlvl("199")+';'+		getlvl("109")+';'+
											getlvl("110")+';'+		getlvl("111")+';';

							addConstTech()

							GM_setValue(nomScript+"nivTechno"+coordPM+serveur, listeNivTech );
						}
					}
				}

				if(RaZRechConst) Res_const='|';

				GM_setValue(nomScript+"DefPlanete"+coordPM+serveur,DefPla.join(';'));
				GM_setValue(nomScript+"BatRes"+coordPM+serveur,BatRes.join(';'));
				GM_setValue(nomScript+"BatSta"+coordPM+serveur,BatSta.join(';'));
				GM_setValue(nomScript+"flotte"+coordPM+serveur,flotte.join(';'));
				GM_setValue(nomScript+"boost"+coordPM+serveur,boost.join(';'));

				GM_setValue(nomScript+"BatSta_const"+coordPM+serveur,BatSta_const.join(';'));
				GM_setValue(nomScript+"BatRes_const"+coordPM+serveur,BatRes_const.join(';'));
				GM_setValue(nomScript+"Res_const"+coordPM+serveur,Res_const);
				GM_setValue(nomScript+"Def_const"+coordPM+serveur,'|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|;|');
			}
			setTimeout(empire, 1000)
		}
    }
}

GM_addStyle( '#productionboxBottom {position: initial;}' );
InfoCompteScript();
