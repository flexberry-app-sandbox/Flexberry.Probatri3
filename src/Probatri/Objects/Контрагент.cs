﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Probatri
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Контрагент.
    /// </summary>
    // *** Start programmer edit section *** (Контрагент CustomAttributes)

    // *** End programmer edit section *** (Контрагент CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КонтрагентE", new string[] {
            "КодКонтрагента as \'Код контрагента\'",
            "Контрагент as \'Контрагент\'",
            "Лицо as \'Лицо\'",
            "ИНН as \'ИНН\'",
            "Адрес as \'Адрес\'",
            "Телефон as \'Телефон\'",
            "Почта as \'Почта\'"})]
    [View("КонтрагентL", new string[] {
            "КодКонтрагента as \'Код контрагента\'",
            "Контрагент as \'Контрагент\'",
            "Лицо as \'Лицо\'",
            "ИНН as \'ИНН\'",
            "Адрес as \'Адрес\'",
            "Телефон as \'Телефон\'",
            "Почта as \'Почта\'"})]
    public class Контрагент : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодКонтрагента;
        
        private string fКонтрагент;
        
        private IIS.Probatri.Лица fЛицо;
        
        private int fИНН;
        
        private string fАдрес;
        
        private string fТелефон;
        
        private string fПочта;
        
        // *** Start programmer edit section *** (Контрагент CustomMembers)

        // *** End programmer edit section *** (Контрагент CustomMembers)

        
        /// <summary>
        /// Адрес.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.Адрес CustomAttributes)

        // *** End programmer edit section *** (Контрагент.Адрес CustomAttributes)
        [StrLen(255)]
        public virtual string Адрес
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.Адрес Get start)

                // *** End programmer edit section *** (Контрагент.Адрес Get start)
                string result = this.fАдрес;
                // *** Start programmer edit section *** (Контрагент.Адрес Get end)

                // *** End programmer edit section *** (Контрагент.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.Адрес Set start)

                // *** End programmer edit section *** (Контрагент.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (Контрагент.Адрес Set end)

                // *** End programmer edit section *** (Контрагент.Адрес Set end)
            }
        }
        
        /// <summary>
        /// ИНН.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.ИНН CustomAttributes)

        // *** End programmer edit section *** (Контрагент.ИНН CustomAttributes)
        public virtual int ИНН
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.ИНН Get start)

                // *** End programmer edit section *** (Контрагент.ИНН Get start)
                int result = this.fИНН;
                // *** Start programmer edit section *** (Контрагент.ИНН Get end)

                // *** End programmer edit section *** (Контрагент.ИНН Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.ИНН Set start)

                // *** End programmer edit section *** (Контрагент.ИНН Set start)
                this.fИНН = value;
                // *** Start programmer edit section *** (Контрагент.ИНН Set end)

                // *** End programmer edit section *** (Контрагент.ИНН Set end)
            }
        }
        
        /// <summary>
        /// КодКонтрагента.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.КодКонтрагента CustomAttributes)

        // *** End programmer edit section *** (Контрагент.КодКонтрагента CustomAttributes)
        public virtual int КодКонтрагента
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.КодКонтрагента Get start)

                // *** End programmer edit section *** (Контрагент.КодКонтрагента Get start)
                int result = this.fКодКонтрагента;
                // *** Start programmer edit section *** (Контрагент.КодКонтрагента Get end)

                // *** End programmer edit section *** (Контрагент.КодКонтрагента Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.КодКонтрагента Set start)

                // *** End programmer edit section *** (Контрагент.КодКонтрагента Set start)
                this.fКодКонтрагента = value;
                // *** Start programmer edit section *** (Контрагент.КодКонтрагента Set end)

                // *** End programmer edit section *** (Контрагент.КодКонтрагента Set end)
            }
        }
        
        /// <summary>
        /// Контрагент.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.Контрагент CustomAttributes)

        // *** End programmer edit section *** (Контрагент.Контрагент CustomAttributes)
        [StrLen(255)]
        public virtual string Контрагент
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.Контрагент Get start)

                // *** End programmer edit section *** (Контрагент.Контрагент Get start)
                string result = this.fКонтрагент;
                // *** Start programmer edit section *** (Контрагент.Контрагент Get end)

                // *** End programmer edit section *** (Контрагент.Контрагент Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.Контрагент Set start)

                // *** End programmer edit section *** (Контрагент.Контрагент Set start)
                this.fКонтрагент = value;
                // *** Start programmer edit section *** (Контрагент.Контрагент Set end)

                // *** End programmer edit section *** (Контрагент.Контрагент Set end)
            }
        }
        
        /// <summary>
        /// Лицо.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.Лицо CustomAttributes)

        // *** End programmer edit section *** (Контрагент.Лицо CustomAttributes)
        public virtual IIS.Probatri.Лица Лицо
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.Лицо Get start)

                // *** End programmer edit section *** (Контрагент.Лицо Get start)
                IIS.Probatri.Лица result = this.fЛицо;
                // *** Start programmer edit section *** (Контрагент.Лицо Get end)

                // *** End programmer edit section *** (Контрагент.Лицо Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.Лицо Set start)

                // *** End programmer edit section *** (Контрагент.Лицо Set start)
                this.fЛицо = value;
                // *** Start programmer edit section *** (Контрагент.Лицо Set end)

                // *** End programmer edit section *** (Контрагент.Лицо Set end)
            }
        }
        
        /// <summary>
        /// Почта.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.Почта CustomAttributes)

        // *** End programmer edit section *** (Контрагент.Почта CustomAttributes)
        [StrLen(255)]
        public virtual string Почта
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.Почта Get start)

                // *** End programmer edit section *** (Контрагент.Почта Get start)
                string result = this.fПочта;
                // *** Start programmer edit section *** (Контрагент.Почта Get end)

                // *** End programmer edit section *** (Контрагент.Почта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.Почта Set start)

                // *** End programmer edit section *** (Контрагент.Почта Set start)
                this.fПочта = value;
                // *** Start programmer edit section *** (Контрагент.Почта Set end)

                // *** End programmer edit section *** (Контрагент.Почта Set end)
            }
        }
        
        /// <summary>
        /// Телефон.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.Телефон CustomAttributes)

        // *** End programmer edit section *** (Контрагент.Телефон CustomAttributes)
        [StrLen(255)]
        public virtual string Телефон
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.Телефон Get start)

                // *** End programmer edit section *** (Контрагент.Телефон Get start)
                string result = this.fТелефон;
                // *** Start programmer edit section *** (Контрагент.Телефон Get end)

                // *** End programmer edit section *** (Контрагент.Телефон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.Телефон Set start)

                // *** End programmer edit section *** (Контрагент.Телефон Set start)
                this.fТелефон = value;
                // *** Start programmer edit section *** (Контрагент.Телефон Set end)

                // *** End programmer edit section *** (Контрагент.Телефон Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КонтрагентE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтрагентE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтрагентE", typeof(IIS.Probatri.Контрагент));
                }
            }
            
            /// <summary>
            /// "КонтрагентL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтрагентL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтрагентL", typeof(IIS.Probatri.Контрагент));
                }
            }
        }
    }
}
