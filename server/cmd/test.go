package cmd

import "github.com/spf13/cobra"

// testCmd represents the test command
var testCmd = &cobra.Command{
	Use:   "test",
	Short: "test process cmd",
	Run: func(cmd *cobra.Command, args []string) {
		reptile()
		autoCommit()
	},
}

func init() {
	rootCmd.AddCommand(testCmd)
}
