const path = require ('path')

module.exports = {

////////////////////////////////////////////////////////////////////////////////

get_xsd_path_of_b_r_a_k_z_a_k_i_n_f:

    function () {

		return path.join (__dirname, '..', 'Static/zags-brakzakinf-ru-root.xsd')

    },

////////////////////////////////////////////////////////////////////////////////

get_request_of_b_r_a_k_z_a_k_i_n_f:

    function () {

		return this.rq.data
    	
    },

////////////////////////////////////////////////////////////////////////////////

get_response_of_b_r_a_k_z_a_k_i_n_f:

    function () {
/*    
    	const {rq: {data}} = this
*/
    	return {BRAKZAKINFResponse: {
  "ИдЗапрос": "0bde2079-eded-11ea-952d-00155d01aa22",
  "КолДок": "1",
  "ДатаСвед": "1957-08-13",
  "ТипАГСЗапрос": "02",
  "СведОтветАГС": {
    "ИдДок": "0bde2079-eded-11ea-952d-00155d01aa21",
    "РезОбраб": "1",
    "СведРегЗаклБрак": {
      "РазделЕГР": "1",
      "НомерЗаписЕГР": "120109060000401234123",
      "НомАГССвид": "12587",
      "НомерВерс": "0",
      "ДатаВерс": "2020-01-01",
      "КодСостСтат": "0101",
      "ДатаЗапис": "2020-01-01",
      "ОрганЗАГС": {
        "НаимЗАГС": "Отдел Государственной службы записи актов гражданского состояния Республики Ингушетия Джейрахского района",
        "КодЗАГС": "R0600004"
      },
      "СвидетЗаклБрак": {
        "ТипСвидет": "1",
        "СерияСвидет": "I-МН",
        "НомерСвидет": "125875",
        "ДатаВыдСвидет": "2020-02-01"
      },
      "ПрдСведРег": {
        "ДатаЗаклБрак": "2020-01-01",
        "Супруг": {
          "ФамилияДо": "Петров",
          "ФамилияПосле": "Петров",
          "Имя": "Иван",
          "Отчество": "Петрович",
          "ГраждОКСМ": "643",
          "ДатаРождКаленд": "1998-05-08",
          "ПрМестоРожден": "1",
          "ПрАдрМЖ": "1",
          "УдЛичнФЛ": {
            "КодВидДок": "21",
            "СерДок": "2134",
            "НомДок": "123456",
            "ДатаДокКаленд": "2012-06-12",
            "ВыдДок": "Отдел УФМС России по Тюменской области в Центральном административном округе города Тюмени",
            "ПрКодВыдДок": "1"
          }
        },
        "Супруга": {
          "ФамилияДо": "Иванова",
          "ФамилияПосле": "Петрова",
          "Имя": "Лариса",
          "Отчество": "Сергеевна",
          "ПрГражданство": "1",
          "ПрДатаРожд": "1",
          "МестоРожден": {
            "ПризнМесто": "1",
            "МестоТекст": "Российская Федерация, Тюменская область, г. Тюмень",
            "КодСтраны": "643",
            "НаимСтраны": "Российская Федерация",
            "Регион": "72",
            "НаимСубъект": "Тюменская область",
            "Город": "г. Тюмень",
            "ОКТМО": "71701000"
          },
          "АдрМЖ": {
            "АдрМЖРФ": {
              "АдрРФФИАС": {
                "АдрТекст": "Российская Федерация, Тюменская область, г. Тюмень, ул. Николая Федорова, д.17, кв.309",
                "ИдНом": "6ce4f31e-2f77-427a-8a50-5c2175ba0cc0",
                "ОКТМО": "71701000",
                "Индекс": "000000",
                "КодРегион": "72",
                "НаимРегион": "Тюменская область",
                "Город": "Тюмень",
                "Улица": "ул Николая Федорова",
                "Дом": "17",
                "Кварт": "309"
              }
            }
          },
          "УдЛичнФЛ": {
            "КодВидДок": "21",
            "СерДок": "2134",
            "НомДок": "123564",
            "ДатаДокКаленд": "2007-04-12",
            "ВыдДок": "Отдел УФМС России по Тюменской области в Центральном административном округе города Тюмени",
            "ПрКодВыдДок": "1"
          }
        }
      }
    }
  }
}}}

}