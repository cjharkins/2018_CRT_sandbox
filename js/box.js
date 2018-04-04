//Array structure
	// [0] : Die number
	// [1] : Name
	// [2] : Description
	// [3] : Common name
	// [4] : Finished Dimension
	// [5] : Paper Stocks
	// 
 
var boxStyles = [
	["5010", "Folding Carton", "E-Flute Internal Holds 1 CD in Jewel Case", "Tuck Box", " 7.5'' x 1.5'' x 8.25''", "sbs", "flute"],
	["2179", "Folding Carton", "Holds 2 6-Panel CD Jackets and 2 8-Panel CD Jackets", "Tuck Box", " 5.062'' x 1'' x 5.082''","sbs", "flute"],
	["5066", "Book Style", "Software Box", "Tuck Box", " 7.75'' x 1.502'' x 10''" ,"sbs", "flute"],
	["6370", "Book Style", "Software Box with Crash Lock Bottom", "Tuck Box", " 8.25'' x 2'' x 9.25''","sbs", "flute" ],
	["8002", "Library Case", "Holds 3 Jewel Cases", "Sleeve", " 5'' x 1.281'' x 5.687''", "sbs", "flute", "turned-edge"],
	["3048", "Folding Carton", "Box with Crash Lock Bottom, Internal Glassine Window and Locking Tuck Tab", "Tuck Box", " 5.875'' x 5.875'' x 5.875''", "sbs", "flute"],
	["8154", "O-Sleeve", "4 Panel Wraps 1 CD Jewel", "Sleeve", " 5.656'' x 4.427'' x 5.906''", "sbs", "flute","turned-edge"],
	["2107", "Folding Carton", "Holds 1 Quad Jewel", "Tuck Box", " 4.937'' x 1.015'' x 5.598''", "sbs", "flute"],
	["3029", "Folding Carton", "Straight Tuck w/Inner-Platform", "Tuck Box", " 6.75'' x 2'' x 9.018''", "sbs"],
	["4028", "Flush Cut", "Corrugated Box w/Handle", "Clamshell", " 12.283'' x 9.842'' x 2.834''", "sbs", "flute"],
	["6480", "Book Style", "Box w/CD Slit", "Tuck Box", " 6.0625'' x 0.3594'' x 9.0938''", "sbs"],
	["1119", "Pocket Folder", "2 Pockets w/Business Card Slot", "Folder", " 9'' x 0.0625'' x 12''", "sbs"],
	["1416", "Pocket Folder", "Capacity and Business Card Slot", "Folder", " 9.25'' x 0.375'' x 12''", "sbs" ],
	["5000", "Jacket", "CD Quick Sleeve", "Sleeve", " 5.138'' x 0.0625'' x 5.125''", "sbs"] ,
	["4263", "Game Board", "", "Turned Edge", " 11.0625'' x 11.75''", "turned-edge"],
	["5018", "Tuck Box", "Holds 1 VHS with Platform", "Tuck Box", " 6.75'' x 2'' x 9''","sbs", "flute" ],
	["5160", "Folding Carton", "Tuck Box with Crash Lock Bottom", "Tuck Box", " 7.875'' x 1.5'' x 9.5''", "sbs","flute"],
	["4220a", "Angle Box", "Angle Box for 4220 Slip Case", "Turned Edge", " 8.8125'' x 4.5'' x 11.5312''", "sbs","flute","turned-edge"],
	["4220", "Slip Case", "Slip Case for Angle Box Insert", "Turned Edge", " 9.25'' x 4.8125'' x 11.75''", "sbs","flute","turned-edge"],
	["4245", "Clamshell Box", "Insert Holds 13 CDs & Book", "Clamshell", " 11.0625'' x 1.837'' x 14.25''", "sbs","flute"],
	["2107", "Folding Carton", "Holds 1 Quad Jewel", "Tuck Box", " 4.937'' x 1.015'' x 5.598''", "sbs","flute"],
	["6480", "Book Style", "Box with CD Slit", "Tuck Box", " 6.0625'' x 0.3594'' x 9.0938''", "sbs"],
	["1429", "Pocket Folder", "2 Capacity Pockets & Optional Disc Slot", "Folder", " 9'' x .27'' x 12''","flat","sbs"],
	["1594", "Business Card Mailer", "4 Panel, Holds 1 Business Card", "Business Card", " 5.531'' x .25'' x 4.953''", "flat","sbs"],
	["5004", "Mailer", "4 Panel CD Mailer with Zip Strip Holds 1 CD", "Mailer", " 5.125'' x 0.0625'' x 5.125''", "flat","sbs"],
	["5002", "Jacket", "4 Panel CD Sleeve Holds 1 CD", "Jacket", " 5.138'' x 0.0625'' x 5.125''", "flat","sbs" ],
	["5003", "Jacket", "6 Panel Holds 1 CD", "Jacket", " 5'' x 0.3125'' x 5''","flat","sbs"],
	["6453", "Mailer", "4 Panel Holds 1 CD with Lock Tab", "Mailer", " 5.531'' x 0.0625'' x 5.5''", "flat","sbs"],
	["5001", "Wallet", "4 Panel CD Jacket Holds 2 CDs", "Jacket", " 5'' x 0.125'' x 5''", "flat","sbs"],
	["2113", "Mailer", "4 Panel Holds 1 CD with Pop Up Flap", "Mailer", " 8'' x 0.125'' x 8''","flat","sbs"],
	["8121", "Jacket", "6 Panel CD Folder Holds 1 CD in Digi Tray", "Jacket", " 5.562'' x 0.25'' x 4.937''", "flat","sbs"],
	["8148", "Jacket", "6 Panel CD Folder Holds 2 CDs in Digi Tray" , "Jacket", " 5.468'' x 0.25'' x 4.937''", "flat","sbs"],
	["5008", "Mailer", "4 Panel w/ 2 CD Pockets & Zip Strips Holds 2 CDs", "Mailer", " 5.1094'' x 0.3125'' x 5.0938''", "flat","sbs"],
	["5012", "Jacket", "6 Panel CD Holds 1 CD", "Jacket", " 5.125'' x 0.25'' x 5.0625''", "flat","sbs"],
	["5236", "Wallet", "8 Panel CD Jacket Holds 4 CDs", "Jacket", " 5.500'' x 0.375'' x 5.25''", "flat","sbs"],
	["5007", "Wallet", "6 Panel CD Jacket Holds 2 CDs", "Jacket", " 5'' x 0.1875'' x 5''", "sbs"],
	["5005", "Mailer", "4 Panel with Zip Strip Holds 1 CD", "Mailer", " 5.2185'' x 0.1405'' x 5.117''", "flat","sbs"],
	["8124", "Jacket", "4 Panel CD Folder Holds 1 CD in Digi Tray", "Jacket", " 5.531'' x 0.25'' x 4.953''", "flat","sbs"] 
];