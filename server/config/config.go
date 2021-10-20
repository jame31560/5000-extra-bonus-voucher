package config

// Info - 各種卷的資訊
type Info struct {
	// ID -
	ID string `json:"id"`

	// Name -
	Name string `json:"name"`

	// URL -
	URL string `json:"url"`

	// Win
	Win Win `json:"win"`
}

// Win - 各禮拜的獎池
type Win struct {
	// W1 -
	W1 []string `json:"w1"`

	// W2 -
	W2 []string `json:"w2"`

	// W3 -
	W3 []string `json:"w3"`

	// W4-
	W4 []string `json:"w4"`
}

// Default -
var Default = []Info{
	// 交通部國旅券
	{
		ID:   "domesticTravel",
		Name: "交通部「國旅券」",
		URL:  "https://1000.taiwan.net.tw/",
		Win: Win{
			W1: []string{},
			W2: []string{},
			W3: []string{},
			W4: []string{},
		},
	},
	// 原民會i原券
	{
		ID:   "iYuan",
		Name: "原民會「i原券」",
		URL:  "https://explorethesun.tw/cipshop/",
		Win: Win{
			W1: []string{},
			W2: []string{},
			W3: []string{},
			W4: []string{},
		},
	},
	// 農委會農遊券
	{
		ID:   "agriculture",
		Name: "農委會「農遊券」",
		URL:  "https://hpm.5000.gov.tw/cp.aspx?n=205",
		Win: Win{
			W1: []string{},
			W2: []string{},
			W3: []string{},
			W4: []string{},
		},
	},
	// 文化部藝Fun券(數位)
	{
		ID:   "artFunE",
		Name: "文化部「藝Fun券」(數位)",
		URL:  "https://artsfunnext.moc.gov.tw/",
		Win: Win{
			W1: []string{},
			W2: []string{},
			W3: []string{},
			W4: []string{},
		},
	},
	// 文化部藝Fun券(紙本)
	{
		ID:   "artFunP",
		Name: "文化部「藝Fun券」(紙本)",
		URL:  "https://artsfunnext.moc.gov.tw/",
		Win: Win{
			W1: []string{},
			W2: []string{},
			W3: []string{},
			W4: []string{},
		},
	},
	// 教育部動茲券
	{
		ID:   "sports",
		Name: "教育部「動滋券」",
		URL:  "https://500.gov.tw/",
		Win: Win{
			W1: []string{},
			W2: []string{},
			W3: []string{},
			W4: []string{},
		},
	},
	// 客委會客庄券
	{
		ID:   "hakka",
		Name: "客委會「客庄券」",
		URL:  "http://www.hakka500.tw/",
		Win: Win{
			W1: []string{},
			W2: []string{},
			W3: []string{},
			W4: []string{},
		},
	},
	// 國發會地方創生券
	{
		ID:   "rgionalRevitalization",
		Name: "國發會「地方創生券」",
		URL:  "https://www.twrr.ndc.gov.tw/index",
		Win: Win{
			W1: []string{},
			W2: []string{},
			W3: []string{},
			W4: []string{},
		},
	},
}
