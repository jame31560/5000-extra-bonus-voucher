package cmd

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"

	"server/config"

	"github.com/PuerkitoBio/goquery"
	"github.com/robertkrimen/otto"
	"github.com/spf13/cobra"
)

const (
	// URL -
	URL = "https://vhpi.5000.gov.tw/"
)

// Weeks -
var Weeks = [4]string{"winNo1", "winNo2", "winNo3", "winNo4"}

// serverCmd represents the server command
var serverCmd = &cobra.Command{
	Use:   "server",
	Short: "A brief description of your command",
	Run: func(cmd *cobra.Command, args []string) {
		server()
	},
}

func init() {
	rootCmd.AddCommand(serverCmd)
}

func server() {
	fmt.Println("Server")

	data, err := getScriptData()
	if err != nil {
		log.Println(err)
		return
	}

	setData(data)
}

func getScriptData() (string, error) {
	doc, err := goquery.NewDocument(URL)

	if err != nil {
		return "", err
	}

	s := doc.Find("script")

	script := s.Nodes[2].FirstChild.Data

	return script, nil
}

func setData(data string) {
	vm := otto.New()
	vm.Run(data)

	for index, v := range Weeks {
		if value, err := vm.Get(v); err == nil {
			data, _ := value.Export()

			for i, v := range config.Default {
				val, ok := data.(map[string]interface{})[v.ID]
				if ok {
					switch index {
					case 0:
						config.Default[i].Win.W1 = val.([]string)
					case 1:
						config.Default[i].Win.W2 = val.([]string)
					case 2:
						config.Default[i].Win.W3 = val.([]string)
					case 3:
						config.Default[i].Win.W4 = val.([]string)
					}
				}
			}
		}
	}

	buildJson()
}

func buildJson() {
	file, _ := json.Marshal(config.Default)
	str := "const EXTRA_BONUS_LIST = " + string(file)
	err := ioutil.WriteFile("code.js", []byte(str), 0644)

	if err != nil {
		log.Println("write file is failed: ", err)
	}
}
