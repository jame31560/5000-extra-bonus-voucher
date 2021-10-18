package main

import (
	"log"

	"github.com/PuerkitoBio/goquery"
	"github.com/davecgh/go-spew/spew"

	"github.com/robertkrimen/otto"
)

const (
	URL = "https://vhpi.5000.gov.tw/"
)

func main() {
	doc, err := goquery.NewDocument(URL)

	if err != nil {
		log.Println(err)
		return
	}

	s := doc.Find("script")

	script := s.Nodes[2].FirstChild.Data

	vm := otto.New()
	vm.Run(script)

	if value, err := vm.Get("winNo2"); err == nil {
		goData, _ := value.Export()
		spew.Dump(goData)
	}
}
