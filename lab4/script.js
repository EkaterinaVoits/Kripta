
var myKey="Войцехович"; 
var Text='шифрование'
/*var Text=`
Объект — пассивный компонент системы, хранящий, перерабатывающий, передающий или принимающий информацию; примеры объектов: страницы, файлы, папки, директории, компьютерные программы, устройства (мониторы, диски, принтеры и т. д.). 
Под субъектами информационных отношений понимаются как владельцы, так и пользователи информации и поддерживающей инфраструктуры. Субъект — активный компонент системы, который может инициировать поток информации; примеры субъектов: пользователь, процесс либо устройство.
Угроза информационной безопасности объекта — возможные воздействия на него, приводящие к ущербу. 
Природа воздействий на информационный объект бывают непреднамеренными и преднамеренными, однако все воздействия могут привести к последствиям 3-х видов: 
нарушение конфиденциальности;
нарушение доступности;
нарушение целостности.
Под угрозами информационной безопасности понимаются потенциально возможные негативные воздействия на защищаемую информацию, к числу которых относятся: 
несанкционированное распространение (передача) персональных данных; 
утрата сведений, составляющих конфиденциальную информацию, персональные данные Учреждения и иную защищаемую информацию, а также искажение такой информации; 
утечка – несанкционированное ознакомление с защищаемой информацией посторонних лиц (несанкционированный доступ, копирование, хищение и т.д); 
недоступность информации в результате ее блокирования, сбоя оборудования или программ, дезорганизации функционирования операционных систем рабочих станций, серверов, маршрутизаторов, систем управления баз данных, воздействия вирусов, стихийных бедствий и иных форс-мажорных обстоятельств; 
отсутствие планирования и контроля; 
низкая степень надежности программного обеспечения; 
недостаточная осведомленность персонала, низкая квалификация персонала и пользователей в области информационных технологий.
Источниками внутренних угроз могут являться:
сотрудники организации;
программное обеспечение;
аппаратные средства.
Внутренние угрозы могут проявляться в следующих формах:
ошибки системных администраторов;
нарушения сотрудниками установленных регламентов сбора, обработки, передачи и уничтожения информации;
ошибки в работе программного обеспечения;
отказы и сбои в работе компьютерного оборудования.
К внешним источникам угроз относятся:
компьютерные вирусы и вредоносные программы;
организации и отдельные лица;
стихийные бедствия.
Внешние угрозы могут проявляться в следующих формах:
несанкционированный доступ к персональным данным клиентов агентства и сотрудников компании;
неработоспособность компьютерного оборудования вследствие стихийных бедствий;
кража денежных ресурсов компании;
ущерб, связанный с разглашением персональных данных отдельных лиц.
По происхождению угрозы можно подразделить на преднамеренные и непреднамеренные.
Непреднамеренные угрозы — это действия, которые совершают люди по неосторожности, незнанию, невнимательности или из любопытства. К такому типу угроз относят установку программных продуктов, которые не входят в список необходимых для работы, и в последствии могут стать причиной нестабильной работы системы и потеря информации.
Преднамеренные угрозы — угрозы, связанные со злым умыслом преднамеренного физического разрушения, впоследствии выхода из строя системы. К преднамеренным угрозам относятся внутренние и внешние атаки.
В свою очередь, информационные угрозы могут быть обусловлены:
Естественными факторами
Человеческими факторами.
Человеческие факторы в свою очередь подразделяются на угрозы, несущие случайный неумышленный характер и угрозы умышленного характера, которые делятся на активные/неактивные и внутренние/внешние.
Пассивные угрозы направлены на несанкционированное использование информационных ресурсов (прослушивание). 
Активные угрозы имеют цель: нарушение нормального процесса функционирования системы посредством целенаправленного воздействия на информационные ресурсы.  
По способам воздействия на объекты информационной безопасности угрозы подлежат следующей классификации:
информационные;
программные;
физические.
Снижение рисков за счет использования контрмер может осуществляться различными способами: 
уменьшением вероятностей осуществления угроз безопасности; 
ликвидацией уязвимостей или уменьшением их величин; 
уменьшением величины возможного ущерба; 
восстановлением ресурсов, которым был нанесен ущерб; 
выявлением атак и других нарушений безопасности. 
Выбор варианта защиты активов осуществляется на основании результатов оценки рисков с учетом требований безопасности и существующих стоимостных и других ограничений.
Система мер, рекомендуемая для большинства компаний, перед которыми стоит вопрос защиты информации, призвана обеспечить соблюдение основных признаков ее безопасности:
− Доступность сведений. Под этим определением понимается возможность и для авторизованного субъекта в любое время получить требуемые данные, и для клиентов в регулярном режиме получать информационные услуги;
− Целостность информации. Это означает ее неизменность, отсутствие любых посторонних, неавторизованных вмешательств, направленных на изменение или уничтожение данных, нарушение системы их расположения;
− Конфиденциальность или абсолютная недоступность данных для неавторизованных субъектов;
− Отсутствие отказа или невозможность отрицать принадлежность действий или данных;
− Аутентичность или возможность достоверного подтверждения авторства информационных сообщений или действий в системе.
`*/
var myText=Text.replace(/[^А-Яа-я]/g, '');

function task1() {
    const a = 4;
    const b = 6;
    const N = 33;

    const listLetters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я' ]
    let newListLetters =[];
    let newText = '';

        start = new Date().getTime();
        if(findNod(a,N)==1){
            for(let i=0; i<N; i++){
                let res = a*i+b;
                if (res > 32) {
                    do{res -=33;}
                    while(res > 32)
                }
            newListLetters[i] = listLetters[res];
            console.log( newListLetters[i]);
        }
        for (const letter of Text.toUpperCase()) {
            if (!listLetters.includes(letter)) {
                continue
            }
            const indexLetter = listLetters.findIndex((item) => item === letter);
            newText += newListLetters[indexLetter];
            EnctrypedText = newText.toLowerCase();
        }
    }else{
        alert("Числа а и N не взаимно простые");
    }

    stop = new Date().getTime();
    newText = '';


    function findNod(a,N) {    
        let mass = [a,N];
        let nod;
        let first = task3(parseInt(mass[0]));
        for(let i = 1; i < mass.length; i++) {
            let second = task3(parseInt(mass[i]));
            let same = getCommonElements(first, second);
            nod = 1;
            for(let j = 0; j < same.length; j++) {
                nod = nod * same[j];
            }
            first = task3(nod);
        }
        console.log("НОД(" + mass + ")=" + nod);
        return first;
    }

    function getCommonElements(a, b) {
        b = new Set(b)
        return [...new Set(a.filter(x => b.has(x)))]
    }

    function task3(n) {
        let mass = [];
        for(i = 1; i < (n ^ 0.5) + 0.1; i += 1) {
            if(isEazy(i) == 1) {
                let x = n / i;
                if(isInt(x)) {
                    n = x;
                    mass.push(i);
                    i = 1;
                }
            }
        }
        
        return mass;
    }
    function isInt(value) {
        return !isNaN(value) && (function(x) {
            return(x | 0) === x;
        })(parseFloat(value))
    }
    
    function isEazy(n) {
        let flag = 0;
        for(let u = 1; u < (n ^ 0.5) + 0.1; u++) {
            if(n % u == 0) {
                flag += 1;
            }
        }
        if(flag == 2 || flag == 1) {
            return 1;
        } else return 0;
    }

   
        start = new Date().getTime();
       
        for (const letter of EnctrypedText.toUpperCase()) {
            if (!listLetters.includes(letter)) {
                continue
            }
            const indexLetter = newListLetters.findIndex((item) => item === letter);
            newText += listLetters[indexLetter];
            DectrypedText = newText.toLowerCase();
        }  
        stop = new Date().getTime();
        newText = '';


        document.write("Время выполнения операции = "+ (stop - start)+ "мс<br>");
        document.write ("ЗАШИФРОВКА:<br>"); // шифруем
        document.write (EnctrypedText+ "<br>"+ "<br>"); // шифруем

        document.write ("РАСШИФРОВКА:<br>"); // шифруем
        document.write (DectrypedText+ "<br>"+ "<br>"); // расшифровываем


}




function task2() {

    start = new Date().getTime();
    var cypher = (function () {
        var cypher = {}, register = function (e) {return e === e.toUpperCase();};
        cypher.language = {
            ru : "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split(""),
            all     : [],
            joinAll : function (){
                cypher.language.all = [];
                for (var i in this) {
                    if (typeof this[i] !== "function" && i !== "all") {
                        cypher.language.all = cypher.language.all.concat (this[i]);
                    }
                }
            }
        }

        cypher.vizhener = {
            square : [],
            genSqViz : function (lang) {
                var l = cypher.language[lang];
                for (var i = 0; i < l.length; i++) {
                    this.square[i] = l.slice(i).concat(l.slice(0, i));
                }
            },
            encryption : function (lang, text, key) {
                if (lang === "all") cypher.language.joinAll ();
                else if (!Array.isArray(cypher.language[lang])) return;
                this.genSqViz(lang);
                text.split(' ').join('');
                var sText = text;


                key2=key;


                while(key.length<text.length) {
                    for(var j = 0; j < key2.length; j++) {
                        key+=key2[j];
                        //alert(key+"    "+key.length+"    "+text.length);
                        if(key.length==text.length) break;  
                    }
                }

                text = text.toUpperCase();
                key  = key.toUpperCase();


                

                var s = "", l = cypher.language[lang];
                for (var i = 0; i < text.length; i++) {
                    s += this.square[l.indexOf(text[i])][l.indexOf(key[i])];
                }

                return s.split ("").map (function (e, i, a) {return register (sText[i]) ? e : e.toLowerCase();}).join("");
            },
            decryption : function (lang, key, cipher) {
                if (lang === "all") cypher.language.joinAll ();
                else if (!Array.isArray(cypher.language[lang])) return;
                this.genSqViz(lang);

                key2=key;
                while(key.length<cipher.length) {
                    for(var j = 0; j < key2.length; j++) {
                        key+=key2[j];
                        //alert(key+"    "+key.length+"    "+text.length);
                        if(key.length==cipher.length) break;  
                    }
                }

                var sCipher = cipher;

                cipher = cipher.toUpperCase();
                key    = key.toUpperCase();
                var s = "",  l = cypher.language[lang];
                for (var i = 0; i < cipher.length; i++) {
                    var row = l.indexOf(key[i])
                    coll = this.square[row].indexOf(cipher[i]);
                    s += l[coll];
                }
                return s.split ("").map (function (e, i, a) {return register (sCipher[i]) ? e : e.toLowerCase();}).join("");
            },
            outS : function () {
                for (var i = 0; i < this.square.length; i++) {
                    document.write(this.square[i].join ("") + "<br>");
                }
            }
        };

        stop = new Date().getTime();
        
        return cypher;
    } ());


    
    
    var encryption_text=cypher.vizhener.encryption ("ru", myText, myKey);
    document.write ("ЗАШИФРОВКА:<br>"); // шифруем
    document.write (encryption_text + "<br>"+ "<br>"); // шифруем

    document.write ("РАСШИФРОВКА:<br>"); // шифруем
    document.write (cypher.vizhener.decryption ("ru", myKey, encryption_text) + "<br>"+ "<br>"); // расшифровываем

    document.write("Время выполнения операции = "+ (stop - start) + "мс<br>");
}









// cypher.caesar = {
//             encryption : function (lang, text, slip) {
//                 var l = cypher.language[lang], text = text.split(""), s = "";
//                 for (var i = 0; i < text.length; i++) {
//                     var index = l.indexOf (text[i]) + slip;
//                     if (index >= l.length) index -= l.length;
//                     s += l[index];
//                 }
//                 return s;
//             },
//             decryption : function (lang, cipher, slip) {
//                 var l = cypher.language[lang], cipher = cipher.split(""), s = "";
//                 for (var i = 0; i < cipher.length; i++) {
//                     var index = l.indexOf (cipher[i]) - slip;
//                     if (index < 0) index += l.length;
//                     s += l[index];
//                 }
//                 return s;
//             }
//         };