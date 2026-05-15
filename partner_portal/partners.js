// ----------------- Partners Array -----------------
const partners = [
    // --- Vendors ---
// ----------------- Unified Partners Array -----------------
    // --- Vendors ---
    {
        name: "Lenovo",
        premium: true,
        category: "Vendor",
        needs: ["Hardware", "AI", "Cloud", "Infrastructure", "Data Center", "Smart Building", "Digital Transformation", "Modern Workplace", "ESG Compliance", "Managed Services"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0009_lenovo.jpg",
        website: "https://www.lenovo.com/gr/el/",
        email: "info@lenovo.com",
        button: {
            text: "H Lenovo και πάλι Νο1",
            color: "#E2231A",
            link: "https://lenovonews.gr/h-lenovo-kai-pali-no1/"
        }
    },
    {
        name: "HP",
        premium: false,
        category: "Vendor",
        needs: ["Hardware", "Printing & MPS", "Modern Workplace", "Security", "ESG Compliance"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0008_HP_Blue_RGB_150_LG.jpg",
        website: "https://www.hp.com",
        email: "info@hp.com"
    },
    {
        name: "Cisco",
        premium: false,
        category: "Vendor",
        needs: ["Networking", "Security", "UC/Video Conference", "Cloud", "Software", "AI", "Data Center"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0006_cisco.jpg",
        website: "https://www.cisco.com",
        email: "info@cisco.com"
    },
    {
        name: "Bitdefender",
        premium: false,
        category: "Vendor",
        needs: ["Security", "Software", "Cloud", "Managed Services"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0025_Bitdefender_Masterbrand_Logo_Positive.jpg",
        website: "https://www.bitdefender.com",
        email: "info@bitdefender.com"
    },
    {
        name: "HPE",
        premium: false,
        category: "Vendor",
        needs: ["Infrastructure", "Networking", "AI", "Cloud", "Data Center", "Digital Transformation", "Security", "Managed Services"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0014_hpe.jpg",
        website: "https://www.hpe.com",
        email: "info@hpe.com"
    },
    {
        name: "Dell",
        premium: false,
        category: "Vendor",
        needs: ["Infrastructure", "AI", "Hardware", "Cloud", "ESG Compliance", "Data Center", "Modern Workplace", "Security"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0023_delltech_logo_stk_rgb.jpg",
        website: "https://www.dell.com",
        email: "info@dell.com"
    },
    {
        name: "NetApp",
        premium: false,
        category: "Vendor",
        needs: ["Infrastructure", "Data Center", "Cloud", "AI", "Software"],
        logo: "https://shpages.com/wp-content/uploads/2025/09/ql_netapp_logo_black_rgb.jpg",
        website: "https://www.netapp.com",
        email: "info@netapp.com"
    },
    {
        name: "Schneider Electric",
        premium: false,
        category: "Vendor",
        needs: ["Infrastructure", "Data Center", "Smart Building", "ESG Compliance", "Hardware"],
        logo: "https://shpages.com/wp-content/uploads/2025/09/ql_Logo_SE_Green_RGB-Screen.jpg",
        website: "https://www.se.com",
        email: "info@se.com"
    },
    {
        name: "Asus",
        premium: false,
        category: "Vendor",
        needs: ["Hardware", "Modern Workplace"],
        logo: "https://shpages.com/wp-content/uploads/2025/09/ql_asus.jpg",
        website: "https://www.asus.com",
        email: "info@asus.com"
    },
    {
        name: "LG Electronics",
        premium: true,
        category: "Vendor",
        needs: ["Hardware", "Smart Building", "Modern Workplace", "UC/Video Conference"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0020_1.-LG-Business-Solutions-Logo_2D_White-Background_CMYK.jpg",
        website: "https://www.lg.com",
        email: "info@lg.com"
    },
    {
        name: "Anydesk",
        premium: false,
        category: "Vendor",
        needs: ["Software", "Modern Workplace", "Security"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0011_AnyDesk_Logo.jpg",
        website: "https://anydesk.com",
        email: "info@anydesk.com"
    },
    {
        name: "Softone-Impact",
        premium: false,
        category: "Vendor",
        needs: ["Software", "Digital Transformation", "ERP", "Cloud"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_entesoftone.png",
        website: "https://www.softone.gr",
        email: "info@softone.gr"
    },
    {
        name: "Epsilonnet",
        premium: false,
        category: "Vendor",
        needs: ["Software", "Cloud", "Modern Workplace", "ERP", "Digital Transformation", "AI"],
        logo: "https://shpages.com/wp-content/uploads/2025/09/ql_EPSILONNET_logo.png.jpg",
        website: "https://www.epsilonnet.gr",
        email: "info@epsilonnet.gr"
    },
    {
        name: "WatchGuard",
        premium: false,
        category: "Vendor",
        needs: ["Security", "Networking", "Cloud", "Hardware"],
        logo: "https://shpages.com/wp-content/uploads/2025/09/ql_watchguard.jpg",
        website: "https://www.watchguard.com",
        email: "info@watchguard.com"
    },
    {
        name: "Epson",
        premium: false,
        category: "Vendor",
        needs: ["Printing & MPS", "ESG Compliance", "Hardware", "Digital Transformation"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0002_epson.jpg",
        website: "https://www.epson.com",
        email: "info@epson.com"
    },
    {
        name: "Kyocera",
        premium: false,
        category: "Vendor",
        needs: ["Printing & MPS", "Hardware", "ESG Compliance", "Software"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0016_kyocera.jpg",
        website: "https://www.kyocera.com",
        email: "info@kyocera.com"
    },
    {
        name: "Lexmark",
        premium: false,
        category: "Vendor",
        needs: ["Printing & MPS", "Hardware", "Modern Workplace"],
        logo: "https://shpages.com/wp-content/uploads/2025/09/ql_lexmark.jpg",
        website: "https://www.lexmark.com",
        email: "info@lexmark.com"
    },
    {
        name: "Digital Realty",
        premium: false,
        category: "Vendor",
        needs: ["Data Center", "Cloud", "Infrastructure", "Networking"],
        logo: "https://shpages.com/wp-content/uploads/2025/09/ql_Digital_Realty_TM_Brandmark_RGB_Black-Copy.jpg",
        website: "https://www.digitalrealty.com",
        email: "info@digitalrealty.com"
    },
    {
        name: "Akubela",
        premium: false,
        category: "Vendor",
        needs: ["Smart Building", "Hardware", "AI"],
        logo: "https://shpages.com/wp-content/uploads/2025/09/ql_akubela.png",
        website: "https://akubela.com/",
        email: "info@akubela.com"
    },
    {
        name: "Dahua",
        premium: false,
        category: "Vendor",
        needs: ["UC/Video Conference", "Hardware", "Security", "Smart Building", "AI"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0010_dahua.jpg",
        website: "https://www.dahuasecurity.com/",
        email: "info@dahua.com"
    },
    {
        name: "Logitech",
        premium: false,
        category: "Vendor",
        needs: ["UC/Video Conference", "Hardware", "Modern Workplace", "AI"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0006_logitech.jpg",
        website: "https://www.logitech.com",
        email: "info@logitech.com"
    },
    {
        name: "HP-Poly",
        premium: false,
        category: "Vendor",
        needs: ["UC/Video Conference", "Modern Workplace", "Hardware"],
        logo: "https://shpages.com/wp-content/uploads/2025/09/ql_logo_HP-Poly_Electric_Blue_keyline_RGB.jpg",
        website: "https://www.hp.com/us-en/poly.html",
        email: "info@hp.com"
    },
    {
        name: "MaxHub",
        premium: false,
        category: "Vendor",
        needs: ["UC/Video Conference", "Hardware", "Modern Workplace"],
        logo: "https://shpages.com/wp-content/uploads/2025/09/ql_maxhub.jpg",
        website: "https://www.maxhub.com",
        email: "info@maxhub.com"
    },
    {
        name: "Eizo",
        premium: false,
        category: "Vendor",
        needs: ["Hardware"],
        logo: "https://shpages.com/wp-content/uploads/2025/09/ql_eizo.jpg",
        website: "https://www.eizo.com",
        email: "info@eizo.com"
    },

    // --- Distributors ---
    {
        name: "Info Quest Technologies",
        premium: true,
        category: "Distributor",
        needs: ["Cloud", "Infrastructure", "Security", "Networking", "ESG Compliance", "Digital Transformation", "Modern Workplace", "AI", "Managed Services"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0017_QG-IQT.jpg",
        website: "https://www.infoquest.gr",
        email: "microsoft@info.quest.gr"
    },
    {
        name: "Oktabit",
        premium: true,
        category: "Distributor",
        needs: ["Infrastructure", "Networking", "ESG Compliance", "Modern Workplace", "Hardware", "Data Center", "AI"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0021_Oktabit-Logo-2024-no-margins_orange.jpg",
        website: "https://www.oktabit.gr",
        email: "info@oktabit.gr"
    },
    {
        name: "ALEF",
        premium: false,
        category: "Distributor",
        needs: ["Infrastructure", "Security", "Networking", "Cloud"],
        logo: "https://shpages.com/wp-content/uploads/2025/09/ql_ALEF_Logo2018_RGB.jpg",
        website: "https://www.alef.com/gr/",
        email: "info@alef.com"
    },
    {
        name: "ASBIS",
        premium: false,
        category: "Distributor",
        needs: ["Infrastructure", "Hardware", "Data Center", "Cloud"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0027_asbis_logo_blue.jpg",
        website: "https://www.asbis.com/",
        email: "info@asbis.com"
    },
    {
        name: "Interworks",
        premium: false,
        category: "Distributor",
        needs: ["Cloud", "Software", "Digital Transformation"],
        logo: "https://shpages.com/wp-content/uploads/2025/09/ql__0000_interworks-cloud-logo-original-RGB-ed53395f.jpg",
        website: "https://interworks.cloud/",
        email: "info@interworks.cloud"
    },
    {
        name: "Digital Sima",
        premium: false,
        category: "Distributor",
        needs: ["Security", "Networking", "Software"],
        logo: "https://shpages.com/wp-content/uploads/2025/09/ql_digital_sima.jpg",
        website: "https://www.digitalsima.gr/",
        email: "info@digitalsima.gr"
    },
    {
        name: "PartnerNet",
        premium: false,
        category: "Distributor",
        needs: ["Networking", "UC/Video Conference"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0018_PartnerNET_Final.jpg",
        website: "https://www.partnernet-ict.com/",
        email: "sales@partnernet-ict.com"
    },
    {
        name: "Professional Services",
        premium: false,
        category: "Distributor",
        needs: ["Networking", "Hardware", "Infrastructure"],
        logo: "https://shpages.com/wp-content/uploads/2025/09/ql_professional_services.jpg",
        website: "https://profser.gr/",
        email: "info@profser.gr"
    },
    {
        name: "Silicon Blue",
        premium: false,
        category: "Distributor",
        needs: ["Networking"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0000_Silicon.jpg",
        website: "https://siliconblue.eu/",
        email: "info@siliconblue.gr"
    },

    // --- Resellers ---
    {
        name: "Byte Computers",
        premium: false,
        category: "Reseller",
        needs: ["Digital Transformation", "System Integration", "Public Sector", "Security", "Cloud", "Software"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0004_byte.jpg",
        website: "https://www.byte.gr",
        email: "info@byte.gr"
    },
    {
        name: "Active",
        premium: false,
        category: "Reseller",
        needs: ["Managed Services", "Modern Workplace", "Printing & MPS", "Hardware"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0028_ActiveLogo-Default.jpg",
        website: "https://www.active.gr",
        email: "info@active.gr"
    },
    {
        name: "InTTrust",
        premium: false,
        category: "Reseller",
        needs: ["Cloud", "Security", "Digital Transformation", "Managed Services"],
        logo: "https://shpages.com/wp-content/uploads/2025/09/ql_INTTRUST_NEW_LOGO_450x164.jpg",
        website: "https://www.inttrust.gr",
        email: "info@inttrust.gr"
    },
    {
        name: "Dataways",
        premium: false,
        category: "Reseller",
        needs: ["Managed Services", "System Integration", "Security", "Cloud", "Networking"],
        logo: "https://shpages.com/wp-content/uploads/2025/09/ql_dataways.jpg",
        website: "https://www.dataways.gr",
        email: "info@dataways.gr"
    },
    {
        name: "Digimark",
        premium: false,
        category: "Reseller",
        needs: ["Managed Services", "System Integration", "Security", "Software", "Printing & MPS", "Cloud"],
        logo: "https://shpages.com/wp-content/uploads/2025/09/ql_digimark.jpg",
        website: "https://www.digimark.gr",
        email: "info@digimark.gr"
    },
    {
        name: "Eurosupplies",
        premium: false,
        category: "Reseller",
        needs: ["ESG Compliance", "Printing & MPS", "Hardware"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0015_eurosupplies-logo_1000x233-8.jpg",
        website: "https://www.eurosupplies.gr",
        email: "info@eurosupplies.gr"
    },
    {
        name: "CPI",
        premium: false,
        category: "Reseller",
        needs: ["Printing & MPS", "Hardware", "ESG Compliance", "Managed Services"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0024_CPI-1MB.jpg",
        website: "https://www.cpi.gr",
        email: "info@cpi.gr"
    },
    {
        name: "OpenSky",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Printing & MPS", "System Integration"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0005_OPEN-SKY-LOGO-FINAL-RGB.jpg",
        website: "https://www.opensky.gr",
        email: "info@opensky.gr"
    },
    {
        name: "Msystems",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Modern Workplace"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0007_msystems.jpg",
        website: "https://www.msystems.gr",
        email: "info@msystems.gr"
    },
    {
        name: "Microsoft",
        premium: false,
        category: "Vendor",
        needs: ["Cloud", "AI", "Software", "Security", "Modern Workplace", "Digital Transformation", "ERP", "ESG Compliance"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_microsoft-scaled.png",
        website: "https://www.microsoft.com",
        email: "info@microsoft.com"
    },
    {
        name: "Google Workspace",
        premium: false,
        category: "Vendor",
        needs: ["Cloud", "AI", "Software", "Digital Transformation", "Modern Workplace"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_googlew.png",
        website: "https://workspace.google.com/",
        email: ""
    },
    {
        name: "Amazon Web Services",
        premium: false,
        category: "Vendor",
        needs: ["Cloud", "AI", "Infrastructure", "Data Center", "Software"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_aws-scaled.png",
        website: "https://aws.amazon.com",
        email: ""
    },
    {
        name: "IBM",
        premium: false,
        category: "Vendor",
        needs: ["AI", "Cloud", "Infrastructure", "Security", "Digital Transformation", "Software", "Data Center"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_ibm.png",
        website: "https://www.ibm.com",
        email: "info@ibm.com"
    },
    {
        name: "Oracle",
        premium: false,
        category: "Vendor",
        needs: ["Cloud", "Software", "Data Center", "AI", "ERP"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_oracle-scaled.png",
        website: "https://www.oracle.com",
        email: "info@oracle.com"
    },
    {
        name: "SAP",
        premium: false,
        category: "Vendor",
        needs: ["Software", "Cloud", "Digital Transformation", "ERP", "AI"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_sap-scaled.png",
        website: "https://www.sap.com",
        email: "info@sap.com"
    },
    {
        name: "Fortinet",
        premium: false,
        category: "Vendor",
        needs: ["Security", "Networking", "Cloud", "Software", "Data Center"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_fortinet-scaled.png",
        website: "https://www.fortinet.com",
        email: "info@fortinet.com"
    },
    {
        name: "VMware",
        premium: false,
        category: "Vendor",
        needs: ["Cloud", "Infrastructure", "Data Center", "Software"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_vmware-scaled.png",
        website: "https://www.vmware.com",
        email: "info@vmware.com"
    },
    {
        name: "Red Hat",
        premium: false,
        category: "Vendor",
        needs: ["Cloud", "Software", "Infrastructure", "Security"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_redhat-scaled.png",
        website: "https://www.redhat.com",
        email: "info@redhat.com"
    },
    {
        name: "Aruba",
        premium: false,
        category: "Vendor",
        needs: ["Networking", "Security", "Cloud", "Hardware"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_aruba-scaled.png",
        website: "https://www.arubanetworks.com",
        email: "info@arubanetworks.com"
    },
    {
        name: "Sony",
        premium: false,
        category: "Vendor",
        needs: ["Hardware", "UC/Video Conference", "Digital Transformation"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_sony-scaled.png",
        website: "https://www.sony.com",
        email: "info@sony.com"
    },
    {
        name: "Panasonic",
        premium: false,
        category: "Vendor",
        needs: ["Hardware", "UC/Video Conference", "Security"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_panasonic-scaled.png",
        website: "https://www.panasonic.com",
        email: "info@panasonic.com"
    },
    {
        name: "Samsung",
        premium: false,
        category: "Vendor",
        needs: ["Hardware", "Modern Workplace", "Smart Building", "Digital Transformation"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_samsung-scaled.png",
        website: "https://www.samsung.com",
        email: "info@samsung.com"
    },
    {
        name: "BenQ",
        premium: false,
        category: "Vendor",
        needs: ["Hardware", "UC/Video Conference"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_benq-scaled.png",
        website: "https://www.benq.com",
        email: "info@benq.com"
    },
    {
        name: "ViewSonic",
        premium: false,
        category: "Vendor",
        needs: ["Hardware", "UC/Video Conference"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_viewsonic.png",
        website: "https://www.viewsonic.com",
        email: "info@viewsonic.com"
    },
    {
        name: "Canon",
        premium: false,
        category: "Vendor",
        needs: ["Printing & MPS", "Hardware", "Digital Transformation"],
        logo: "https://shpages.com/wp-content/uploads/2024/09/ql__0026_Canon_WEB_logo.jpg",
        website: "https://www.canon.com",
        email: "info@canon.com"
    },
    {
        name: "Ricoh",
        premium: false,
        category: "Vendor",
        needs: ["Printing & MPS", "Modern Workplace", "Digital Transformation", "Software"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_ricoh.png",
        website: "https://www.ricoh.com",
        email: "info@ricoh.com"
    },
    {
        name: "Xerox",
        premium: false,
        category: "Vendor",
        needs: ["Printing & MPS", "Digital Transformation", "Software", "Modern Workplace"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_xerox.png",
        website: "https://www.xerox.com",
        email: "info@xerox.com"
    },
    {
        name: "Synology",
        premium: false,
        category: "Vendor",
        needs: ["Infrastructure", "Data Center", "Cloud", "Security", "Hardware"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_synology.png",
        website: "https://www.synology.com",
        email: "info@synology.com"
    },
    {
        name: "Hikvision",
        premium: false,
        category: "Vendor",
        needs: ["Security", "Hardware", "AI", "Smart Building", "UC/Video Conference"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_hikvision.png",
        website: "https://www.hikvision.com",
        email: "info@hikvision.com"
    },
    {
        name: "Yealink",
        premium: false,
        category: "Vendor",
        needs: ["UC/Video Conference", "Modern Workplace", "Hardware"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_yealink.png",
        website: "https://www.yealink.com",
        email: "info@yealink.com"
    },
    {
        name: "Ricoh-Gestetner",
        premium: false,
        category: "Vendor",
        needs: ["Printing & MPS", "Modern Workplace", "Digital Transformation"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_Ricoh-Gestetner.png",
        website: "https://www.ricoh-gestetner.com",
        email: "info@ricoh-gestetner.com"
    },
    {
        name: "Yeastar",
        premium: false,
        category: "Vendor",
        needs: ["UC/Video Conference", "Modern Workplace", "Cloud"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_yeastar.png",
        website: "https://www.yeastar.com",
        email: "info@yeastar.com"
    },
    {
        name: "Space Hellas",
        premium: false,
        category: "Reseller",
        needs: ["Cloud", "Security", "Digital Transformation", "Managed Services", "Networking", "System Integration"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_space.png",
        website: "https://www.space.gr",
        email: ""
    },
    {
        name: "SingularLogic",
        premium: false,
        category: "Reseller",
        needs: ["ERP", "Software", "Digital Transformation", "Cloud", "Public Sector", "System Integration"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_singular.png",
        website: "https://www.singularlogic.eu",
        email: ""
    },
    {
        name: "Unisystems",
        premium: false,
        category: "Reseller",
        needs: ["System Integration", "Security", "Cloud", "Digital Transformation", "Managed Services", "Public Sector"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_unisystems.png",
        website: "https://www.unisystems.com",
        email: ""
    },
    {
        name: "Cosmote e-Value",
        premium: false,
        category: "Reseller",
        needs: ["Managed Services", "Cloud", "Networking", "Modern Workplace"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_cosmoteevalue.png",
        website: "https://www.cosmote-evalue.gr",
        email: ""
    },
    {
        name: "Intracom Telecom",
        premium: false,
        category: "Vendor",
        needs: ["Security", "Networking", "Infrastructure", "Software", "Digital Transformation"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_intracom.png",
        website: "https://www.intracom-telecom.com",
        email: ""
    },
    {
        name: "IQ Solutions",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware", "System Integration", "Managed Services"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_iqsolutions.png",
        website: "https://www.iqsolutions.gr",
        email: ""
    },
    {
        name: "Westnet Distribution",
        premium: false,
        category: "Distributor",
        needs: ["Networking", "Security", "Hardware", "Modern Workplace"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_westnet.png",
        website: "https://www.mywestnet.com/el/",
        email: ""
    },
    {
        name: "Google Cloud",
        premium: false,
        category: "Vendor",
        needs: ["Cloud", "AI", "Software", "Data Center"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_googlecloud.png",
        website: "https://cloud.google.com",
        email: ""
    },
    {
        name: "Kaspersky",
        premium: false,
        category: "Vendor",
        needs: ["Security", "Software", "Cloud"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_kaspersky.png",
        website: "https://www.kaspersky.gr",
        email: ""
    },
    {
        name: "Infinitum",
        premium: false,
        category: "Reseller",
        needs: ["Cloud", "Software", "Hardware", "System Integration", "Managed Services"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_infinitum.png",
        website: "https://www.infinitum.gr",
        email: ""
    },
    {
        name: "OfficeLine",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services", "Modern Workplace", "Digital Transformation", "Cloud", "Security"],
        logo: "https://shpages.com/wp-content/uploads/2026/03/ql_officeline.png",
        website: "https://www.officeline.gr",
        email: ""
    },
	// ----------------- Partners Array -----------------
    {
        name: "Intale",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://intale.com",
        email: "sales@intale.com"
    },
    {
        name: "Dnet",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Hardware"],
        logo: "",
        website: "https://dnet.gr",
        email: "sales@dnet.gr"
    },
    {
        name: "LOD",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://lod.gr",
        email: "info@lod.gr"
    },
    {
        name: "Neda SA",
        premium: false,
        category: "Reseller",
        needs: ["Hardware"],
        logo: "",
        website: "https://neda-sa.gr",
        email: "info@neda-sa.gr"
    },
    {
        name: "Neda",
        premium: false,
        category: "Reseller",
        needs: ["Hardware"],
        logo: "",
        website: "https://neda.com.gr",
        email: "info@neda.com.gr"
    },
    {
        name: "Nortech",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Software"],
        logo: "",
        website: "https://nortech.gr",
        email: "info@nortech.gr"
    },
    {
        name: "Onset",
        premium: false,
        category: "Reseller",
        needs: ["Hardware"],
        logo: "",
        website: "https://onset.gr",
        email: "info@onset.gr"
    },
    {
        name: "Real Solution",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Digital Transformation"],
        logo: "",
        website: "https://realsolution.gr",
        email: "niki@realsolution.gr"
    },
    {
        name: "ReloadTech",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://reloadtech.gr",
        email: "info@reloadtech.gr"
    },
    {
        name: "Rework",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://rework.gr",
        email: "info@rework.gr"
    },
    {
        name: "Synectics",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Digital Transformation"],
        logo: "",
        website: "https://synectics.gr",
        email: "info@synectics.gr"
    },
    {
        name: "Inteliseis",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://inteliseis.gr",
        email: "info@inteliseis.gr"
    },
    {
        name: "Alfacon",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware", "Managed Services"],
        logo: "",
        website: "https://alfacon.gr",
        email: "info@alfacon.gr"
    },
    {
        name: "IT Force",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Software"],
        logo: "",
        website: "https://itforce.gr",
        email: "mgiag@itforce.gr"
    },
    {
        name: "Ergologic",
        premium: false,
        category: "Reseller",
        needs: ["Hardware"],
        logo: "",
        website: "https://ergologic.gr",
        email: "info@ergologic.gr"
    },
    {
        name: "KnowHow Consulting",
        premium: false,
        category: "Reseller",
        needs: ["Digital Transformation", "Software", "Hardware"],
        logo: "",
        website: "https://knowhow-consulting.gr",
        email: "acc@knowhow-consulting.gr"
    },
    {
        name: "Netcomp",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Infrastructure"],
        logo: "",
        website: "https://netcomp.gr",
        email: "net@netcomp.gr"
    },
    {
        name: "Clink",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://clink.gr",
        email: "info@clink.gr"
    },
    {
        name: "B-Soft",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://b-soft.gr",
        email: "info@b-soft.gr"
    },
    {
        name: "Dataflow",
        premium: false,
        category: "Reseller",
        needs: ["Cloud", "Software"],
        logo: "",
        website: "https://dataflow.gr",
        email: "info@dataflow.gr"
    },
    {
        name: "Analyseis",
        premium: false,
        category: "Reseller",
        needs: ["AI", "Software"],
        logo: "",
        website: "https://analyseis.gr",
        email: "info@analyseis.gr"
    },
    {
        name: "Codeworx",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://codeworx.com.cy",
        email: "info@codeworx.com.cy"
    },
    {
        name: "DotPoint",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://dotpoint.gr",
        email: "jcn@dotpoint.gr"
    },
    {
        name: "EntryTech",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://entrytech.gr",
        email: "info@entrytech.gr"
    },
    {
        name: "Gravity Labs",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://gravitylabs.gr",
        email: "hello@gravitylabs.gr"
    },
    {
        name: "LSystems",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Cloud"],
        logo: "",
        website: "https://lsystems.gr",
        email: "info@lsystems.gr"
    },
    {
        name: "TaxProfit",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://taxprofit.gr",
        email: "info@taxprofit.gr"
    },
    {
        name: "SmartTree",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Digital Transformation"],
        logo: "",
        website: "https://smarttree.gr",
        email: "hello@smarttree.gr"
    },
    {
        name: "StepOne",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://stepone.gr",
        email: "info@stepone.gr"
    },
    {
        name: "ADT Group",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Infrastructure"],
        logo: "",
        website: "https://adtgroup.gr",
        email: "web@adtgroup.gr"
    },
    {
        name: "ComInf",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Networking", "Managed Services"],
        logo: "",
        website: "https://cominf.gr",
        email: "kazazis@cominf.gr"
    },
    {
        name: "Momentous",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Digital Transformation", "Managed Services"],
        logo: "",
        website: "https://momentous.gr",
        email: "manousos@momentous.gr"
    },
    {
        name: "Noesys",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://noesys.gr",
        email: "info@noesys.gr"
    },
    {
        name: "BA Group",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://bagroup.gr",
        email: "info@bagroup.gr"
    },
    {
        name: "Epico",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://epico.gr",
        email: "dimitris@epico.gr"
    },
    {
        name: "G Dimopoulos",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://g-dimopoulos.gr",
        email: "info@g-dimopoulos.gr"
    },
    {
        name: "ProNorth",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://pronorth.gr",
        email: "info@pronorth.gr"
    },
    {
        name: "InfoSector",
        premium: false,
        category: "Reseller",
        needs: ["Security", "Networking"],
        logo: "",
        website: "https://infosector.gr",
        email: "vassilakis@infosector.gr"
    },
    {
        name: "MyGSI",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://mygsi.eu",
        email: "info@mygsi.eu"
    },
    {
        name: "DSDC",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Cloud"],
        logo: "",
        website: "https://dsdc.gr",
        email: "d.kalantzis@dsdc.gr"
    },
    {
        name: "Abstergo",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://abstergo.gr",
        email: "info@abstergo.gr"
    },
    {
        name: "Ancom",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Hardware"],
        logo: "",
        website: "https://ancom.gr",
        email: "sales@ancom.gr"
    },
    {
        name: "Mentor",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://mentor.com.gr",
        email: "petridis@mentor.com.gr"
    },
    {
        name: "Omicron2",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://omicron2.gr",
        email: "info@omicron2.gr"
    },
    {
        name: "Digicom",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Software"],
        logo: "",
        website: "https://digicom.gr",
        email: "info@digicom.gr"
    },
    {
        name: "I-Solutions",
        premium: false,
        category: "Reseller",
        needs: ["Hardware"],
        logo: "",
        website: "https://i-solutions.gr",
        email: "info@i-solutions.gr"
    },
    {
        name: "Logistic-i",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://logistic-i.gr",
        email: "ipolitis@logistic-i.gr"
    },
    {
        name: "CNET",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Hardware"],
        logo: "",
        website: "https://cnet.gr",
        email: "tassos@cnet.gr"
    },
    {
        name: "Technologic",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://technologic.gr",
        email: "info@technologic.gr"
    },
    {
        name: "Infobc",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://infobc.gr",
        email: "fat@infobc.gr"
    },
    {
        name: "Vratimos Doulos",
        premium: false,
        category: "Reseller",
        needs: ["Hardware"],
        logo: "",
        website: "https://vratimosdoulos.gr",
        email: "doulos@vratimosdoulos.gr"
    },
    {
        name: "AMCI",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://amci.gr",
        email: "mmelabianaki@amci.gr"
    },
    {
        name: "BlueGrid Consulting",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Digital Transformation"],
        logo: "",
        website: "https://bluegridconsulting.gr",
        email: "gmar@bluegridconsulting.gr"
    },
    {
        name: "B-S",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://b-s.com.gr",
        email: "c.zois@b-s.com.gr"
    },
    {
        name: "Extend",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://extend.gr",
        email: "info@extend.gr"
    },
    {
        name: "MyCon",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://mycon.gr",
        email: "info@mycon.gr"
    },
    {
        name: "Nous Pratit",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://nouspratit.gr",
        email: "sales@nouspratit.gr"
    },
    {
        name: "Arebas",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://arebas.gr",
        email: "info@arebas.gr"
    },
    {
        name: "Artion SA",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://artion-sa.gr",
        email: "artion@artion-sa.gr"
    },
    {
        name: "PG Infotech",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://pginfotech.gr",
        email: "info@pginfotech.gr"
    },
    {
        name: "Revia",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://revia.gr",
        email: "info@revia.gr"
    },
    {
        name: "Exelixi Data",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Cloud"],
        logo: "",
        website: "https://exelixi-data.gr",
        email: "info@exelixi-data.gr"
    },
    {
        name: "DCSCom",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Hardware"],
        logo: "",
        website: "https://dcscom.net",
        email: "cpapadoudis@dcscom.net"
    },
    {
        name: "ADYS",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://anysma.gr",
        email: "info@anysma.gr"
    },
    {
        name: "YP+ Support",
        premium: false,
        category: "Reseller",
        needs: ["Software", "IT Support"],
        logo: "",
        website: "https://ypostirixiplus.gr",
        email: "e.kokkalis@ypostirixiplus.gr"
    },
    {
        name: "MinosNet",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Hardware"],
        logo: "",
        website: "https://minosnet.gr",
        email: "info@minosnet.gr"
    },
    {
        name: "Kountouriotis",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://kountouriotis.gr",
        email: "info@kountouriotis.gr"
    },
    {
        name: "Patsanis",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://patsanis.gr",
        email: "e@patsanis.gr"
    },
    {
        name: "Msupport",
        premium: false,
        category: "Reseller",
        needs: ["IT Support"],
        logo: "",
        website: "https://msupport.com.gr",
        email: "info@msupport.com.gr"
    },
    {
        name: "Alfasoft",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://alfasoft.gr",
        email: "info@alfasoft.gr"
    },
    {
        name: "Net314",
        premium: false,
        category: "Reseller",
        needs: ["Networking"],
        logo: "",
        website: "https://net314.eu",
        email: "mpappas@net314.eu"
    },
    {
        name: "Pantazaras",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://pantazaras.com",
        email: "spantaz@pantazaras.com"
    },
    {
        name: "Netgo",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Hardware"],
        logo: "",
        website: "https://netgo.gr",
        email: "sales@netgo.gr"
    },
    {
        name: "ECS",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://ecs.gr",
        email: "info@ecs.gr"
    },
    {
        name: "Actsales",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "",
        email: "actsales@outlook.com.gr"
    },
    {
        name: "Infosource",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://infosource.gr",
        email: "admin@infosource.gr"
    },
    {
        name: "Samos Repairs",
        premium: false,
        category: "Reseller",
        needs: ["IT Support"],
        logo: "",
        website: "https://samos-repairs.gr",
        email: "admin@samos-repairs.gr"
    },
    {
        name: "Platt4M",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://platt4m.com",
        email: "alex.papadatos@platt4m.com"
    },
    {
        name: "CConsulting",
        premium: false,
        category: "Reseller",
        needs: ["Hardware"],
        logo: "",
        website: "https://cconsulting.gr",
        email: "alnikos@cconsulting.gr"
    },
    {
        name: "E-Anco",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://e-anco.gr",
        email: "anco@e-anco.gr"
    },
    {
        name: "Pasteque",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://pasteque.gr",
        email: "ap@pasteque.gr"
    },
    {
        name: "PrismaComp",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://prismacomp.gr",
        email: "aprokopas@prismacomp.gr"
    },
    {
        name: "PVasilakis",
        premium: false,
        category: "Reseller",
        needs: ["Hardware"],
        logo: "",
        website: "https://pvasilakis.gr",
        email: "avasilaki@pvasilakis.gr"
    },
    {
        name: "SofosTech",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://sofostech.gr",
        email: "b2b@sofostech.gr"
    },
    {
        name: "EasySystems",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://easysystems.gr",
        email: "billing@easysystems.gr"
    },
    {
        name: "Infowave",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Hardware"],
        logo: "",
        website: "https://infowave.gr",
        email: "btp@infowave.gr"
    },
    {
        name: "TmSoft",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://tmsoft.gr",
        email: "d.magkoutis@tmsoft.gr"
    },
    {
        name: "Datastream",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Software"],
        logo: "",
        website: "https://datastream.gr",
        email: "datastream@datastream.gr"
    },
    {
        name: "Amicro",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://amicro.gr",
        email: "del@amicro.gr"
    },
    {
        name: "The Peak",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://thepeak.gr",
        email: "info@thepeak.gr"
    },
    {
        name: "Sigma Solutions",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://sigmasolutions.gr",
        email: "g.stefanidis@sigmasolutions.gr"
    },
    {
        name: "C-Force",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Hardware"],
        logo: "",
        website: "https://c-force.gr",
        email: "georgedoulos@c-force.gr"
    },
    {
        name: "EpsilonNet",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://epsilonnet.gr",
        email: "georgios.ktenidis@epsilonnet.gr"
    },
    {
        name: "Agrologic",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://agrologic.gr",
        email: "giantsi@agrologic.gr"
    },
    {
        name: "DeltaSys",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://deltasys.gr",
        email: "gk@deltasys.gr"
    },
    {
        name: "E-Anaptixis",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://e-anaptixis.gr",
        email: "gn@e-anaptixis.gr"
    },
    {
        name: "GP Computers",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://gpcomputers.gr",
        email: "gpalaiologos@gpcomputers.gr"
    },
    {
        name: "ActionPC",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://actionpc.gr",
        email: "gziakas@actionpc.gr"
    },
    {
        name: "Enhance",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://enhance.gr",
        email: "hello@enhance.gr"
    },
    {
        name: "ABCit",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://abcit.gr",
        email: "info@abcit.gr"
    },
    {
        name: "ActionNet",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Hardware"],
        logo: "",
        website: "https://actionnet.gr",
        email: "info@actionnet.gr"
    },
    {
        name: "ActionSoft",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://actionsoft.gr",
        email: "info@actionsoft.gr"
    },
    {
        name: "AlexTech",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://alextech.gr",
        email: "info@alextech.gr"
    },
    {
        name: "Almanet",
        premium: false,
        category: "Reseller",
        needs: ["Networking"],
        logo: "",
        website: "https://almanet.gr",
        email: "info@almanet.gr"
    },
    {
        name: "AmtTech",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://amttech.gr",
        email: "info@amttech.gr"
    },
    {
        name: "Analisi",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://analisi.gr",
        email: "info@analisi.gr"
    },
    {
        name: "AnkoGroup",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://ankogroup.gr",
        email: "info@ankogroup.gr"
    },
    {
        name: "Answer",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://answer.com.gr",
        email: "info@answer.com.gr"
    },
    {
        name: "Anthisys",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://anthisys.gr",
        email: "info@anthisys.gr"
    },
    {
        name: "Arcadia Network",
        premium: false,
        category: "Reseller",
        needs: ["Networking"],
        logo: "",
        website: "https://arcadia-network.gr",
        email: "info@arcadia-network.gr"
    },
    {
        name: "AR Systems",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://arsystems.gr",
        email: "info@arsystems.gr"
    },
    {
        name: "Bitcore",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://bitcore.gr",
        email: "info@bitcore.gr"
    },
    {
        name: "B-OS",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://b-os.gr",
        email: "info@b-os.gr"
    },
    {
        name: "Bratnet",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://bratnet.gr",
        email: "info@bratnet.gr"
    },
    {
        name: "Business IT",
        premium: false,
        category: "Reseller",
        needs: ["Hardware"],
        logo: "",
        website: "https://business-it.gr",
        email: "info@business-it.gr"
    },
    {
        name: "CBS",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://cbs.net.gr",
        email: "info@cbs.net.gr"
    },
    {
        name: "CCA GR",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://ccagr.gr",
        email: "info@ccagr.gr"
    },
    {
        name: "C Experts",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://cexperts.gr",
        email: "info@cexperts.gr"
    },
    {
        name: "Datasmart",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://datasmart.gr",
        email: "sotntetsikas@datasmart.gr"
    },
    {
        name: "PC to Spiti",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://pcstospiti.gr",
        email: "skarlas@pcstospiti.gr"
    },
    {
        name: "PC Project",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://pc-project.gr",
        email: "smponias@pc-project.gr"
    },
    {
        name: "Mixanografiki",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://mixanografiki.gr",
        email: "sofia@mixanografiki.gr"
    },
    {
        name: "Anysma",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://anysma.gr",
        email: "soft@anysma.gr"
    },
    {
        name: "CompuServ",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://compuserv.gr",
        email: "software@compuserv.gr"
    },
    {
        name: "Supervisor",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://supervisor.gr",
        email: "software@supervisor.gr"
    },
    {
        name: "Infosynthesis",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://infosynthesis.gr",
        email: "sotiris.ilias@infosynthesis.gr"
    },
    {
        name: "StartPC",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://startpc.gr",
        email: "info@startpc.gr"
    },
    {
        name: "GSSupport",
        premium: false,
        category: "Reseller",
        needs: ["Managed Services"],
        logo: "",
        website: "https://gssupport.gr",
        email: "info@gssupport.gr"
    },
    {
        name: "IlisData",
        premium: false,
        category: "Reseller",
        needs: ["Managed Services", "Software"],
        logo: "",
        website: "https://ilisdata.gr",
        email: "support@ilisdata.gr"
    },
    {
        name: "Toskidis",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://toskidis.gr",
        email: "support@toskidis.gr"
    },
    {
        name: "Velissariou",
        premium: false,
        category: "Reseller",
        needs: ["Hardware"],
        logo: "",
        website: "https://velissariou.gr",
        email: "support@velissariou.gr"
    },
    {
        name: "SingularLogic",
        premium: false,
        category: "Reseller",
        needs: ["ERP", "Software"],
        logo: "",
        website: "https://singularlogic.eu",
        email: "systemsoft.sales@singularlogic.eu"
    },
    {
        name: "Infotech",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Networking"],
        logo: "",
        website: "https://infotech.com.gr",
        email: "pakon@infotech.com.gr"
    },
    {
        name: "Alphait",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://alphait.gr",
        email: "sales@alphait.gr"
    },
    {
        name: "Cintech",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://cintech.gr",
        email: "sales@cintech.gr"
    },
    {
        name: "Consultech",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://consultech.gr",
        email: "sales@consultech.gr"
    },
    {
        name: "Ekomninos",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://ekomninos.gr",
        email: "sales@ekomninos.gr"
    },
    {
        name: "Epilogi",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://epilogi.net",
        email: "sales@epilogi.net"
    },
    {
        name: "Hellas Networks",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Software"],
        logo: "",
        website: "https://hellasnetworks.gr",
        email: "sales@hellasnetworks.gr"
    },
    {
        name: "InfoAccounting",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://infoaccounting.gr",
        email: "sales@infoaccounting.gr"
    },
    {
        name: "InfoPlus",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://infoplus.com.gr",
        email: "sales@infoplus.com.gr"
    },
    {
        name: "Inforama",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://inforama.gr",
        email: "sales@inforama.gr"
    },
    {
        name: "Infotechnica",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://infotechnica.gr",
        email: "sales@infotechnica.gr"
    },
    {
        name: "Lisi",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://lisi.gr",
        email: "sales@lisi.gr"
    },
    {
        name: "MHX",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://mhx.gr",
        email: "sales@mhx.gr"
    },
    {
        name: "Microsan",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://microsan.gr",
        email: "sales@microsan.gr"
    },
    {
        name: "Orama Tech",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://orama-tech.gr",
        email: "sales@orama-tech.gr"
    },
    {
        name: "Profit Services",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://profitservices.gr",
        email: "sales@profitservices.gr"
    },
    {
        name: "StirixisNet",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://stirixisnet.gr",
        email: "sales@stirixisnet.gr"
    },
    {
        name: "UTEC",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://utec.gr",
        email: "sales@utec.gr"
    },
    {
        name: "Waythinks",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://waythinks.com",
        email: "sales@waythinks.com"
    },
    {
        name: "MS Net",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://ms-net.gr",
        email: "sas@ms-net.gr"
    },
    {
        name: "PC-Emarket",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://pc-emarket.gr",
        email: "info@pc-emarket.gr"
    },
    {
        name: "PCGate",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://pcgate.gr",
        email: "info@pcgate.gr"
    },
    {
        name: "PC Genius",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://pcgenius.gr",
        email: "info@pcgenius.gr"
    },
    {
        name: "PDC-IT",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://pdc-it.gr",
        email: "info@pdc-it.gr"
    },
    {
        name: "Playsystems",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://playsystems.gr",
        email: "info@playsystems.gr"
    },
    {
        name: "Plus-PC",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://plus-pc.gr",
        email: "info@plus-pc.gr"
    },
    {
        name: "PNP Solutions",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://pnp-solutions.eu",
        email: "info@pnp-solutions.eu"
    },
    {
        name: "Praxi",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://praxi.gr",
        email: "info@praxi.gr"
    },
    {
        name: "PraxiPOS",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://praxipos.gr",
        email: "info@praxipos.gr"
    },
    {
        name: "Prisma",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://prisma.gr",
        email: "info@prisma.gr"
    },
    {
        name: "Protogramma",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://protogramma.gr",
        email: "info@protogramma.gr"
    },
    {
        name: "Pyxida",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://pyxida.eu",
        email: "info@pyxida.eu"
    },
    {
        name: "Quetri",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://quetri.com",
        email: "info@quetri.com"
    },
    {
        name: "RedT",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://redt.gr",
        email: "info@redt.gr"
    },
    {
        name: "RestartIT",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://restartit.gr",
        email: "info@restartit.gr"
    },
    {
        name: "Sahinian",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://sahinian.gr",
        email: "info@sahinian.gr"
    },
    {
        name: "SataSupport",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://satasupport.gr",
        email: "info@satasupport.gr"
    },
    {
        name: "Service-4U",
        premium: false,
        category: "Reseller",
        needs: ["Managed Services"],
        logo: "",
        website: "https://service-4u.gr",
        email: "info@service-4u.gr"
    },
    {
        name: "Skepsis IT",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://skepsisit.gr",
        email: "info@skepsisit.gr"
    },
    {
        name: "Smart4All",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://smart4all.gr",
        email: "info@smart4all.gr"
    },
    {
        name: "Smart Electronic",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://smart-electronic.gr",
        email: "info@smart-electronic.gr"
    },
    {
        name: "SmartIT",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://smartit.com.gr",
        email: "info@smartit.com.gr"
    },
    {
        name: "Smart-Net",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Software"],
        logo: "",
        website: "https://smart-net.gr",
        email: "info@smart-net.gr"
    },
    {
        name: "Softcom",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://softcom.gr",
        email: "info@softcom.gr"
    },
    {
        name: "Softcomm",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://softcomm.gr",
        email: "info@softcomm.gr"
    },
    {
        name: "SoftCon",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://softcon.gr",
        email: "info@softcon.gr"
    },
    {
        name: "Soft-Net",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://soft-net.gr",
        email: "info@soft-net.gr"
    },
    {
        name: "SoftXXL",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://softxxl.gr",
        email: "info@softxxl.gr"
    },
    {
        name: "Solutions Informatics",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://solutions-informatics.gr",
        email: "info@solutions-informatics.gr"
    },
    {
        name: "SRG",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://srg.gr",
        email: "info@srg.gr"
    },
    {
        name: "SSPC",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://sspc.gr",
        email: "info@sspc.gr"
    },
    {
        name: "STM2",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://stm2.gr",
        email: "info@stm2.gr"
    },
    {
        name: "Strolis",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://strolis.gr",
        email: "info@strolis.gr"
    },
    {
        name: "TameiakiExpress",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://tameiakiexpress.gr",
        email: "Info@tameiakiexpress.gr"
    },
    {
        name: "Tech2Work",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://tech2work.eu",
        email: "info@tech2work.eu"
    },
    {
        name: "TechBuddy",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://techbuddy.gr",
        email: "info@techbuddy.gr"
    },
    {
        name: "TechnoLife",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://technolife.gr",
        email: "info@technolife.gr"
    },
    {
        name: "TechnoLogistics",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Managed Services"],
        logo: "",
        website: "https://technologistics.gr",
        email: "info@technologistics.gr"
    },
    {
        name: "Technorganosi",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://technorganosi.gr",
        email: "info@technorganosi.gr"
    },
    {
        name: "TechOne",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://techone.gr",
        email: "info@techone.gr"
    },
    {
        name: "TechPlace",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://techplace.gr",
        email: "info@techplace.gr"
    },
    {
        name: "TechPoint",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://techpoint.gr",
        email: "info@techpoint.gr"
    },
    {
        name: "TeleSystems",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "UC/Video Conference"],
        logo: "",
        website: "https://telesystems.gr",
        email: "info@telesystems.gr"
    },
    {
        name: "TopService",
        premium: false,
        category: "Reseller",
        needs: ["Managed Services"],
        logo: "",
        website: "https://topservice.gr",
        email: "info@topservice.gr"
    },
    {
        name: "T-Point",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://t-point.gr",
        email: "info@t-point.gr"
    },
    {
        name: "Ubicom",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Managed Services"],
        logo: "",
        website: "https://ubicom.gr",
        email: "info@ubicom.gr"
    },
    {
        name: "UpdatePC",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://updatepc.gr",
        email: "info@updatepc.gr"
    },
    {
        name: "UpStore",
        premium: false,
        category: "Reseller",
        needs: ["Cloud", "Software"],
        logo: "",
        website: "https://upstore.com.gr",
        email: "info@upstore.com.gr"
    },
    {
        name: "VitaNet",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Managed Services"],
        logo: "",
        website: "https://vitanet.gr",
        email: "info@vitanet.gr"
    },
    {
        name: "Voulcom",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://voulcom.gr",
        email: "info@voulcom.gr"
    },
    {
        name: "Wizcom",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://wizcom.gr",
        email: "info@wizcom.gr"
    },
    {
        name: "WNC",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Hardware"],
        logo: "",
        website: "https://wnc.gr",
        email: "info@wnc.gr"
    },
    {
        name: "Zeinis",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://zeinis.gr",
        email: "info@zeinis.gr"
    },
    {
        name: "MicroData",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://microdata.gr",
        email: "info@microdata.gr"
    },
    {
        name: "IoTSoft",
        premium: false,
        category: "Reseller",
        needs: ["IoT", "Software"],
        logo: "",
        website: "https://iotsoft.gr",
        email: "ioannis.pagonis@iotsoft.gr"
    },
    {
        name: "ACN IT Services",
        premium: false,
        category: "Reseller",
        needs: ["Managed Services", "Networking"],
        logo: "",
        website: "https://acn.gr",
        email: "it_services@acn.gr"
    },
    {
        name: "UniComp",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://unicomp.gr",
        email: "john@unicomp.gr"
    },
    {
        name: "InfoSupport",
        premium: false,
        category: "Reseller",
        needs: ["Managed Services", "Software"],
        logo: "",
        website: "https://infosupport.gr",
        email: "sales@infosupport.gr"
    },
    {
        name: "DataWizard",
        premium: false,
        category: "Reseller",
        needs: ["Software", "AI"],
        logo: "",
        website: "https://datawizard.gr",
        email: "kouliasta@datawizard.gr"
    },
    {
        name: "Net-Sales",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Networking"],
        logo: "",
        website: "https://net-sales.gr",
        email: "lpletsas@net-sales.gr"
    },
    {
        name: "MySoft",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://mysoft.gr",
        email: "mail@mysoft.gr"
    },
    {
        name: "IsComputer",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://iscomputer.com.gr",
        email: "manager@iscomputer.com.gr"
    },
    {
        name: "Naxos Computers",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://naxoscomputers.gr",
        email: "manager@naxoscomputers.gr"
    },
    {
        name: "CompuSystem",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://compusystem.gr",
        email: "n.apergis@compusystem.gr"
    },
    {
        name: "Connect Line",
        premium: false,
        category: "Reseller",
        needs: ["Software", "ERP"],
        logo: "",
        website: "https://connect-line.gr",
        email: "salesadmin@connect-line.gr"
    },
    {
        name: "RDC",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://rdc.gr",
        email: "sales@rdc.gr"
    },
    {
        name: "DGSoft",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://dgsoft.gr",
        email: "sales@dgsoft.gr"
    },
    {
        name: "Foxline",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Networking"],
        logo: "",
        website: "https://foxline.gr",
        email: "gap@foxline.gr"
    },
    {
        name: "XIT",
        premium: false,
        category: "Reseller",
        needs: ["IT Support", "Software"],
        logo: "",
        website: "https://xit.gr",
        email: "sales@xit.gr"
    },
    {
        name: "Verus+ ",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Digital Transformation"],
        logo: "",
        website: "https://verusplus.com",
        email: "info@verusplus.com"
    },
    {
        name: "M-Service",
        premium: false,
        category: "Reseller",
        needs: ["IT Support", "Hardware"],
        logo: "",
        website: "https://m-service.gr",
        email: "sales@m-service.gr"
    },
    {
        name: "DataGR",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Cloud"],
        logo: "",
        website: "https://datagr.gr",
        email: "info@datagr.gr"
    },
    {
        name: "ExeTech",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://exetech.gr",
        email: "idelig@exetech.gr"
    },
    {
        name: "Adcon",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://adcon.gr",
        email: "sales@adcon.gr"
    },
    {
        name: "BMS",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://bms.gr",
        email: "sales@bms.gr"
    },
    {
        name: "Digital Support",
        premium: false,
        category: "Reseller",
        needs: ["IT Support", "Hardware"],
        logo: "",
        website: "https://digitalsupport.gr",
        email: "info@digitalsupport.gr"
    },
    {
        name: "Syscode",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://syscode.gr",
        email: "km@syscode.gr"
    },
    {
        name: "Datalink",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Hardware"],
        logo: "",
        website: "https://datalink.com.gr",
        email: "info@datalink.com.gr"
    },
    {
        name: "GB Elite Solutions",
        premium: false,
        category: "Reseller",
        needs: ["Digital Transformation", "Software"],
        logo: "",
        website: "https://gbelitesolutions.gr",
        email: "dimitris.g@gbelitesolutions.gr"
    },
    {
        name: "Metadata",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Cloud"],
        logo: "",
        website: "https://metadata.com.gr",
        email: "info@metadata.com.gr"
    },
    {
        name: "Info Process",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://infoprocess.gr",
        email: "aaltiparmakis@infoprocess.gr"
    },
    {
        name: "Conquest",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://conquest.gr",
        email: "info@conquest.gr"
    },
    {
        name: "Indata-X",
        premium: false,
        category: "Reseller",
        needs: ["Software", "AI"],
        logo: "",
        website: "https://indata-x.gr",
        email: "pxenakis@indata-x.gr"
    },
    {
        name: "Assembly",
        premium: false,
        category: "Reseller",
        needs: ["Hardware"],
        logo: "",
        website: "https://assembly.gr",
        email: "gk@assembly.gr"
    },
    {
        name: "Symbol PC",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "IT Support"],
        logo: "",
        website: "https://symbolpc.gr",
        email: "info@symbolpc.gr"
    },
    {
        name: "Netways",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Software"],
        logo: "",
        website: "https://netways.gr",
        email: "d.panagiotidis@netways.gr"
    },
    {
        name: "ADP Software",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://adp-software.gr",
        email: "soltsis@adp-software.gr"
    },
    {
        name: "GeniusNet",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Software"],
        logo: "",
        website: "https://geniusnet.gr",
        email: "fotini@geniusnet.gr"
    },
    {
        name: "Revival SA",
        premium: false,
        category: "Reseller",
        needs: ["Digital Transformation", "Software"],
        logo: "",
        website: "https://revivalsa.gr",
        email: "gantypas@revivalsa.gr"
    },
    {
        name: "Thinx",
        premium: false,
        category: "Reseller",
        needs: ["Software", "AI"],
        logo: "",
        website: "https://thinx.gr",
        email: "sales@thinx.gr"
    },
    {
        name: "Datum",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Cloud"],
        logo: "",
        website: "https://datum.com.gr",
        email: "info@datum.com.gr"
    },
    {
        name: "UniSupport",
        premium: false,
        category: "Reseller",
        needs: ["IT Support", "Hardware"],
        logo: "",
        website: "https://unisupport.gr",
        email: "xth@unisupport.gr"
    },
    {
        name: "AMS Company",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://ams-company.gr",
        email: "info@ams-company.gr"
    },
    {
        name: "Day One",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://day-one.gr",
        email: "sales@day-one.gr"
    },
    {
        name: "Rodiaki Pliroforiki",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://rodiakipliroforiki.gr",
        email: "info@rodiakipliroforiki.gr"
    },
    {
        name: "Computerline",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Hardware"],
        logo: "",
        website: "https://computerline.gr",
        email: "manos@computerline.gr"
    },
    {
        name: "Active Support",
        premium: false,
        category: "Reseller",
        needs: ["IT Support", "Managed Services"],
        logo: "",
        website: "https://activesupport.gr",
        email: "info@activesupport.gr"
    },
    {
        name: "Interplay",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://interplay.gr",
        email: "info@interplay.gr"
    },
    {
        name: "RAM",
        premium: false,
        category: "Reseller",
        needs: ["Hardware"],
        logo: "",
        website: "https://ram.gr",
        email: "ilias@ram.gr"
    },
    {
        name: "Plus Info",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://plusinfo.gr",
        email: "sot@plusinfo.gr"
    },
    {
        name: "BlueNet Solutions",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Software"],
        logo: "",
        website: "https://bluenetsolutions.gr",
        email: "pk@bluenetsolutions.gr"
    },
    {
        name: "E-Analysis",
        premium: false,
        category: "Reseller",
        needs: ["Software", "AI"],
        logo: "",
        website: "https://e-analysis.eu",
        email: "i.todorovic@e-analysis.eu"
    },
    {
        name: "Mifo",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://mifo.gr",
        email: "info@mifo.gr"
    },
    {
        name: "Ingenio",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://ingenio.gr",
        email: "info@ingenio.gr"
    },
    {
        name: "ERP Milios",
        premium: false,
        category: "Reseller",
        needs: ["Software", "ERP"],
        logo: "",
        website: "https://erpmilios.gr",
        email: "support@erpmilios.gr"
    },
    {
        name: "Infotrace",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://infotrace.gr",
        email: "info@infotrace.gr"
    },
    {
        name: "New Software",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://newsoftware.gr",
        email: "info@newsoftware.gr"
    },
    {
        name: "Think Data",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Cloud"],
        logo: "",
        website: "https://thinkdata.gr",
        email: "i.glovanou@thinkdata.gr"
    },
    {
        name: "Infoworks",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://infoworks.gr",
        email: "theodoridis@infoworks.gr"
    },
    {
        name: "LeadSoft",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://leadsoft.gr",
        email: "apaschos@leadsoft.gr"
    },
    {
        name: "GrowApp",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Cloud"],
        logo: "",
        website: "https://growapp.gr",
        email: "gpountzas@growapp.gr"
    },
    {
        name: "SoftNets",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Networking"],
        logo: "",
        website: "https://softnets.gr",
        email: "ggeorgiou@softnets.gr"
    },
    {
        name: "IT Relations",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://it-relations.eu",
        email: "n.koromilas@it-relations.eu"
    },
    {
        name: "Netplan",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Infrastructure"],
        logo: "",
        website: "https://netplan.gr",
        email: "support@netplan.gr"
    },
    {
        name: "Databank",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Cloud"],
        logo: "",
        website: "https://databank.gr",
        email: "g.sioustis@databank.gr"
    },
    {
        name: "Fairy Network",
        premium: false,
        category: "Reseller",
        needs: ["Networking"],
        logo: "",
        website: "https://fairynetwork.gr",
        email: "chpsa@fairynetwork.gr"
    },
    {
        name: "ILog",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://ilog.gr",
        email: "andreas@ilog.gr"
    },
    {
        name: "ProData",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://prodata.gr",
        email: "iko@prodata.gr"
    },
    {
        name: "S-Team",
        premium: false,
        category: "Reseller",
        needs: ["IT Support", "Software"],
        logo: "",
        website: "https://s-team.gr",
        email: "stefanos@s-team.gr"
    },
    {
        name: "Digimark",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://digimark.gr",
        email: "erp@digimark.gr"
    },
    {
        name: "DataMix",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://datamix.gr",
        email: "makarmi@datamix.gr"
    },
    {
        name: "Analysis-CA",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Digital Transformation"],
        logo: "",
        website: "https://analysis-ca.gr",
        email: "mkaramarkos@analysis-ca.gr"
    },
    {
        name: "CloudOn",
        premium: false,
        category: "Reseller",
        needs: ["Cloud", "Software"],
        logo: "",
        website: "https://cloudon.gr",
        email: "pdelis@cloudon.gr"
    },
    {
        name: "PeriPC",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "IT Support"],
        logo: "",
        website: "https://peripc.gr",
        email: "info@peripc.gr"
    },
    {
        name: "Business Plus",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://businessplus.gr",
        email: "info@businessplus.gr"
    },
    {
        name: "GB Consulting",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://gbconsulting.gr",
        email: "sales@gbconsulting.gr"
    },
    {
        name: "Epektasis",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://epektasis.gr",
        email: "info@epektasis.gr"
    },
    {
        name: "Avax",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://avaxgr.eu",
        email: "avax@avaxgr.eu"
    },
    {
        name: "PEC",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://pec.gr",
        email: "info@pec.gr"
    },
    {
        name: "SKM",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://skm.gr",
        email: "info@skm.gr"
    },
    {
        name: "Steel",
        premium: false,
        category: "Reseller",
        needs: ["Hardware"],
        logo: "",
        website: "https://steel.gr",
        email: "info@steel.gr"
    },
    {
        name: "CloudSpark",
        premium: false,
        category: "Reseller",
        needs: ["Cloud", "Software"],
        logo: "",
        website: "https://cloudspark.gr",
        email: "efstathiouk@cloudspark.gr"
    },
    {
        name: "P-G",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://p-g.gr",
        email: "sales@p-g.gr"
    },
    {
        name: "Northcom",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Hardware"],
        logo: "",
        website: "https://northcom.gr",
        email: "info@northcom.gr"
    },
    {
        name: "BSM",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://bsm.gr",
        email: "katsulis@bsm.gr"
    },
    {
        name: "BCom",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Software"],
        logo: "",
        website: "https://bcom.gr",
        email: "info@bcom.gr"
    },
    {
        name: "Accounting Software",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://accountingsoftware.gr",
        email: "spin@accountingsoftware.gr"
    },
    {
        name: "Cynetix",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Software"],
        logo: "",
        website: "https://cynetix.gr",
        email: "eant@cynetix.gr"
    },
    {
        name: "Gigabit-Net",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Hardware"],
        logo: "",
        website: "https://gigabit-net.gr",
        email: "info@gigabit-net.gr"
    },
    {
        name: "Init",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://init.gr",
        email: "info@init.gr"
    },
    {
        name: "Excelysis",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Cloud"],
        logo: "",
        website: "https://excelysis.gr",
        email: "mrados@excelysis.gr"
    },
    {
        name: "Above SA",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Digital Transformation"],
        logo: "",
        website: "https://above-sa.gr",
        email: "info@above-sa.gr"
    },
    {
        name: "AlphaSoft ORG",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://alphasoft.org",
        email: "info@alphasoft.org"
    },
    {
        name: "Online Data",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Cloud"],
        logo: "",
        website: "https://onlinedata.gr",
        email: "cchatzitheodorou@onlinedata.gr"
    },
    {
        name: "The BSC",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://the-bsc.gr",
        email: "sales@the-bsc.gr"
    },
    {
        name: "BSTS",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://bsts.gr",
        email: "fronimakis@bsts.gr"
    },
    {
        name: "ManageShop",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://manageshop.gr",
        email: "info@manageshop.gr"
    },
    {
        name: "Docusys",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://docusys.gr",
        email: "docusys@docusys.gr"
    },
    {
        name: "ThreeQue",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://threeque.com",
        email: "sales@threeque.com"
    },
    {
        name: "EasyPC",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "IT Support"],
        logo: "",
        website: "https://easypc.gr",
        email: "info@easypc.gr"
    },
    {
        name: "HT Computer",
        premium: false,
        category: "Reseller",
        needs: ["Hardware"],
        logo: "",
        website: "https://htcomputer.gr",
        email: "info@htcomputer.gr"
    },
    {
        name: "ABS",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://abs.gr",
        email: "info@abs.gr"
    },
    {
        name: "PanPan",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://panpan.gr",
        email: "takis@panpan.gr"
    },
    {
        name: "Adapt",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://adapt.gr",
        email: "info@adapt.gr"
    },
    {
        name: "Binary Tree",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Networking"],
        logo: "",
        website: "https://binarytree.gr",
        email: "info@binarytree.gr"
    },
    {
        name: "ComputerKey",
        premium: false,
        category: "Reseller",
        needs: ["IT Support", "Software"],
        logo: "",
        website: "https://computerkey.gr",
        email: "george@computerkey.gr"
    },
    {
        name: "Digital Unity",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Digital Transformation"],
        logo: "",
        website: "https://digitalunity.eu",
        email: "n.galanakis@digitalunity.eu"
    },
    {
        name: "PC4Service",
        premium: false,
        category: "Reseller",
        needs: ["IT Support", "Hardware"],
        logo: "",
        website: "https://pc4service.gr",
        email: "m.saridakis@pc4service.gr"
    },
    {
        name: "Protelesys",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Networking"],
        logo: "",
        website: "https://protelesys.gr",
        email: "info@protelesys.gr"
    },
    {
        name: "SH Tech",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://shtech.gr",
        email: "info@shtech.gr"
    },
    {
        name: "AskSoft",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://asksoft.gr",
        email: "info@asksoft.gr"
    },
    {
        name: "Mixanemporiki",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://mixanemporiki.gr",
        email: "sk@mixanemporiki.gr"
    },
    {
        name: "Lysis Group",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://lysisgroup.gr",
        email: "spapapostolou@lysisgroup.gr"
    },
    {
        name: "Applo",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Cloud"],
        logo: "",
        website: "https://applo.gr",
        email: "info@applo.gr"
    },
    {
        name: "TerraLogic",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Networking"],
        logo: "",
        website: "https://terralogic.gr",
        email: "info@terralogic.gr"
    },
    {
        name: "EMRP",
        premium: false,
        category: "Reseller",
        needs: ["Software", "ERP"],
        logo: "",
        website: "https://emrp.gr",
        email: "siliopoulou@emrp.gr"
    },
    {
        name: "InfoOne",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://infoone.gr",
        email: "kpa@infoone.gr"
    },
    {
        name: "Vision CA",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Digital Transformation"],
        logo: "",
        website: "https://visionca.gr",
        email: "vangelis@visionca.gr"
    },
    {
        name: "F1Net",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Software"],
        logo: "",
        website: "https://f1net.eu",
        email: "stauroula@f1net.eu"
    },
    {
        name: "Micrologic",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://micrologic.gr",
        email: "info@micrologic.gr"
    },
    {
        name: "Nikolouzos",
        premium: false,
        category: "Reseller",
        needs: ["IT Support", "Hardware"],
        logo: "",
        website: "https://nikolouzos.gr",
        email: "accounts@nikolouzos.gr"
    },
    {
        name: "Iris Computers",
        premium: false,
        category: "Reseller",
        needs: ["Hardware"],
        logo: "",
        website: "https://iriscomputers.gr",
        email: "sales@iriscomputers.gr"
    },
    {
        name: "Costfix",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://costfix.gr",
        email: "skordopoulose@costfix.gr"
    },
    {
        name: "Root Informatics",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://rootinformatics.gr",
        email: "info@rootinformatics.gr"
    },
    {
        name: "MyDigit",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Digital Transformation"],
        logo: "",
        website: "https://mydigit.gr",
        email: "info@mydigit.gr"
    },
    {
        name: "Compufix",
        premium: false,
        category: "Reseller",
        needs: ["IT Support", "Hardware"],
        logo: "",
        website: "https://compufix.net.gr",
        email: "info@compufix.net.gr"
    },
    {
        name: "Computell",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Hardware"],
        logo: "",
        website: "https://computell.gr",
        email: "info@computell.gr"
    },
    {
        name: "ITBC",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Networking"],
        logo: "",
        website: "https://itbc.gr",
        email: "jiannis@itbc.gr"
    },
    {
        name: "Masterpoint",
        premium: false,
        category: "Reseller",
        needs: ["Software", "IT Support"],
        logo: "",
        website: "https://masterpoint.gr",
        email: "annapap@masterpoint.gr"
    },
    {
        name: "Prime IT",
        premium: false,
        category: "Reseller",
        needs: ["Managed Services", "Networking"],
        logo: "",
        website: "https://primeit.gr",
        email: "info@primeit.gr"
    },
    {
        name: "ThExperts",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://thexperts.gr",
        email: "sales@thexperts.gr"
    },
    {
        name: "Delkom",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://delkom.gr",
        email: "del@delkom.gr"
    },
    {
        name: "Gnomon PC",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "IT Support"],
        logo: "",
        website: "https://gnomon-pc.gr",
        email: "sales@gnomon-pc.gr"
    },
    {
        name: "Leadercon",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://leadercon.gr",
        email: "mourkousisp@leadercon.gr"
    },
    {
        name: "Algo",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://algo.gr",
        email: "support@algo.gr"
    },
    {
        name: "Tech-Room",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "IT Support"],
        logo: "",
        website: "https://tech-room.gr",
        email: "info@tech-room.gr"
    },
    {
        name: "Eloy",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://eloy.gr",
        email: "info@eloy.gr"
    },
    {
        name: "Mnemonic",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Security"],
        logo: "",
        website: "https://mnemonic.gr",
        email: "rp@mnemonic.gr"
    },
    {
        name: "CPM",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://cpm.gr",
        email: "info@cpm.gr"
    },
    {
        name: "Adhoc",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://adhoc.gr",
        email: "g.poulakas@adhoc.gr"
    },
    {
        name: "MCLSoft",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://mclsoft.gr",
        email: "clignos@mclsoft.gr"
    },
    {
        name: "MSG",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Hardware"],
        logo: "",
        website: "https://msg.gr",
        email: "info@msg.gr"
    },
    {
        name: "Techspot",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "IT Support"],
        logo: "",
        website: "https://techspot.gr",
        email: "contact@techspot.gr"
    },
    {
        name: "Nea Optiki",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://neaoptiki.gr",
        email: "angeldestounis@neaoptiki.gr"
    },
    {
        name: "ProCompute",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "IT Support"],
        logo: "",
        website: "https://procompute.gr",
        email: "christos.prosilis@procompute.gr"
    },
    {
        name: "A-Telco",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Hardware"],
        logo: "",
        website: "https://a-telco.gr",
        email: "info@a-telco.gr"
    },
    {
        name: "IQ Systems",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://iqsystems.gr",
        email: "sales@iqsystems.gr"
    },
    {
        name: "DMS Logic",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://dmslogic.gr",
        email: "makis@dmslogic.gr"
    },
    {
        name: "Gencome",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://gencome.gr",
        email: "s.kreouzis@gencome.gr"
    },
    {
        name: "I-Soft",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://i-soft.gr",
        email: "info@i-soft.gr"
    },
    {
        name: "Kiriakidis Biz",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://kiriakidis.biz",
        email: "info@kiriakidis.biz"
    },
    {
        name: "ITSector",
        premium: false,
        category: "Reseller",
        needs: ["IT Support", "Networking"],
        logo: "",
        website: "https://itsector.gr",
        email: "info@itsector.gr"
    },
    {
        name: "Logic Data",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://logicdata.gr",
        email: "info@logicdata.gr"
    },
    {
        name: "Loginet",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Software"],
        logo: "",
        website: "https://loginet.com.gr",
        email: "nas@loginet.com.gr"
    },
    {
        name: "Micros Leader",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://microsleader.gr",
        email: "info@microsleader.gr"
    },
    {
        name: "OSB Net",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Software"],
        logo: "",
        website: "https://osb.net.gr",
        email: "info@osb.net.gr"
    },
    {
        name: "WhiteData",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Cloud"],
        logo: "",
        website: "https://whitedata.gr",
        email: "a.kouroupis@whitedata.gr"
    },
    {
        name: "AIO",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://aio.gr",
        email: "info@aio.gr"
    },
    {
        name: "Diavlos PC",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Networking"],
        logo: "",
        website: "https://diavlospc.gr",
        email: "info@diavlospc.gr"
    },
    {
        name: "InfoLook",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Managed Services"],
        logo: "",
        website: "https://infolook.gr",
        email: "loukas@infolook.gr"
    },
    {
        name: "Info-Land",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://info-land.gr",
        email: "admin@info-land.gr"
    },
    {
        name: "Genious PC",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "IT Support"],
        logo: "",
        website: "https://geniouspc.gr",
        email: "dodopoulos@geniouspc.gr"
    },
    {
        name: "Droggitis",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://droggitis.gr",
        email: "info@droggitis.gr"
    },
    {
        name: "E-Stathis",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://e-stathis.gr",
        email: "stathis@e-stathis.gr"
    },
    {
        name: "E-Microshop",
        premium: false,
        category: "Reseller",
        needs: ["Hardware"],
        logo: "",
        website: "https://e-microshop.gr",
        email: "goran@e-microshop.gr"
    },
    {
        name: "Compucore",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Software"],
        logo: "",
        website: "https://compucore.gr",
        email: "info@compucore.gr"
    },
    {
        name: "IT-Services",
        premium: false,
        category: "Reseller",
        needs: ["IT Support", "Managed Services"],
        logo: "",
        website: "https://it-services.gr",
        email: "info@it-services.gr"
    },
    {
        name: "InfoHiTech",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://infohitech.gr",
        email: "komis@infohitech.gr"
    },
    {
        name: "7Net",
        premium: false,
        category: "Reseller",
        needs: ["Networking"],
        logo: "",
        website: "https://7net.gr",
        email: "info@7net.gr"
    },
    {
        name: "Kounalis",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://kounalis.gr",
        email: "info@kounalis.gr"
    },
    {
        name: "Golden Data",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Cloud"],
        logo: "",
        website: "https://goldendata.gr",
        email: "info@goldendata.gr"
    },
    {
        name: "ShopGR",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://shopgr.eu",
        email: "info@shopgr.eu"
    },
    {
        name: "Optimum",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Digital Transformation"],
        logo: "",
        website: "https://optimum.net.gr",
        email: "info@optimum.net.gr"
    },
    {
        name: "BCI Systems",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Software"],
        logo: "",
        website: "https://bcisystems.gr",
        email: "info@bcisystems.gr"
    },
    {
        name: "Zeyxis",
        premium: false,
        category: "Reseller",
        needs: ["Networking"],
        logo: "",
        website: "https://zeyxis.gr",
        email: "internet@zeyxis.gr"
    },
    {
        name: "Pliktronet",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Software"],
        logo: "",
        website: "https://pliktronet.gr",
        email: "panikos@pliktronet.gr"
    },
    {
        name: "Platinum Software",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://platinumsoftware.gr",
        email: "info@platinumsoftware.gr"
    },
    {
        name: "Order Manager",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://ordermanager.gr",
        email: "mediasoft@ordermanager.gr"
    },
    {
        name: "Minisoft",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://minisoft.gr",
        email: "info@minisoft.gr"
    },
    {
        name: "S-Pliroforiki",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://spliroforiki.gr",
        email: "tpilichos@spliroforiki.gr"
    },
    {
        name: "Compulaw",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://compulaw.gr",
        email: "sales@compulaw.gr"
    },
    {
        name: "Infoworth",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://infoworth.gr",
        email: "info@infoworth.gr"
    },
    {
        name: "Infofix",
        premium: false,
        category: "Reseller",
        needs: ["IT Support", "Hardware"],
        logo: "",
        website: "https://infofix.gr",
        email: "support@infofix.gr"
    },
    {
        name: "FullTech",
        premium: false,
        category: "Reseller",
        needs: ["Hardware", "Networking"],
        logo: "",
        website: "https://fulltech.gr",
        email: "m.foulos@fulltech.gr"
    },
    {
        name: "Develop Data",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://developdata.gr",
        email: "info@developdata.gr"
    },
    {
        name: "Exis",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Digital Transformation"],
        logo: "",
        website: "https://exis.com.gr",
        email: "info@exis.com.gr"
    },
    {
        name: "Netikon",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Software"],
        logo: "",
        website: "https://netikon.gr",
        email: "info@netikon.gr"
    },
    {
        name: "Cactus Web",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Digital Transformation"],
        logo: "",
        website: "https://cactusweb.gr",
        email: "dimitris@cactusweb.gr"
    },
    {
        name: "DataSpot",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Hardware"],
        logo: "",
        website: "https://dataspot.gr",
        email: "info@dataspot.gr"
    },
    {
        name: "DigitalUp",
        premium: false,
        category: "Reseller",
        needs: ["Digital Transformation", "Software"],
        logo: "",
        website: "https://digitalup.gr",
        email: "accounting@digitalup.gr"
    },
    {
        name: "ExaSolutions",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Cloud"],
        logo: "",
        website: "https://exasolutions.gr",
        email: "dimitris@exasolutions.gr"
    },
    {
        name: "Netmechanics",
        premium: false,
        category: "Reseller",
        needs: ["Networking", "Software"],
        logo: "",
        website: "https://netmechanics.gr",
        email: "info@netmechanics.gr"
    },
    {
        name: "OxDesign",
        premium: false,
        category: "Reseller",
        needs: ["Digital Transformation", "Software"],
        logo: "",
        website: "https://oxdesign.gr",
        email: "info@oxdesign.gr"
    },
    {
        name: "Social Mind",
        premium: false,
        category: "Reseller",
        needs: ["Digital Transformation"],
        logo: "",
        website: "https://socialmind.gr",
        email: "info@socialmind.gr"
    },
    {
        name: "ITrust",
        premium: false,
        category: "Reseller",
        needs: ["Managed Services", "Digital Transformation"],
        logo: "",
        website: "https://itrust.gr",
        email: "info@itrust.gr"
    },
    {
        name: "Netsteps",
        premium: false,
        category: "Reseller",
        needs: ["Software", "Digital Transformation"],
        logo: "",
        website: "https://netsteps.gr",
        email: "jkaralis@netsteps.gr"
    },
    {
        name: "Tax-Box",
        premium: false,
        category: "Reseller",
        needs: ["Software"],
        logo: "",
        website: "https://tax-box.gr",
        email: "info@tax-box.gr"
    }







	
];

const needDescriptions = {
    "Digital Transformation": "Ψηφιακός Μετασχηματισμός: Υποστηρίζει τις επιχειρήσεις να μετασχηματίσουν τις διαδικασίες τους με ψηφιακές τεχνολογίες.",
    "Modern Workplace": "Modern Workplace: Εργαλεία και τεχνολογίες για ευέλικτη και αποδοτική εργασία σε σύγχρονο περιβάλλον.",
    "Hardware": "Hardware: Υπολογιστές, servers, περιφερειακά και άλλα υλικά συστήματα υποστήριξης.",
    "Software": "Software: Λογισμικό για επιχειρησιακές και τεχνολογικές ανάγκες.",
    "Security": "Security: Λύσεις ασφάλειας πληροφοριών και δικτύων.",
    "Cloud": "Cloud: Υπηρεσίες αποθήκευσης και υπολογιστικής ισχύος στο cloud.",
    "Networking": "Networking: Δικτυακές υποδομές και συνδεσιμότητα.",
    "Data Center": "Data Center: Υποδομές για κεντρική αποθήκευση και επεξεργασία δεδομένων.",
    "AI": "AI: Τεχνητή νοημοσύνη για αυτοματοποίηση και ανάλυση δεδομένων.",
    "ESG Compliance": "ESG Compliance: Πράσινες και υπεύθυνες επιχειρηματικές πρακτικές.",
    "Smart Building": "Smart Building: Τεχνολογίες για έξυπνα και ενεργειακά αποδοτικά κτίρια.",
	"ERP": "ERP: Συστήματα διαχείρισης  για ενοποιημένη διαχείριση των επιχειρησιακών διαδικασιών.",
    "UC/Video Conference": "UC/Video Conference: Λύσεις ενιαίας επικοινωνίας και τηλεδιασκέψεων.",
    "System Integration": "System Integration: Ολοκληρωμένες λύσεις συνδυασμού διαφορετικών τεχνολογιών και υποδομών.",
    "Partnering": "Partnering: Υποστήριξη συνεργασιών και δικτύων επιχειρηματικών συνεργατών.",
    "Printing & MPS": "Printing & MPS: Λύσεις εκτύπωσης και διαχείρισης υπηρεσιών εκτύπωσης σε επιχειρήσεις.",
    "Managed Services": "Managed Services: Υπηρεσίες διαχείρισης IT υποδομών και εφαρμογών για επιχειρήσεις.",
    "Public Sector": "Public Sector: Υποστήριξη και λύσεις για δημόσιες υπηρεσίες και οργανισμούς."
};