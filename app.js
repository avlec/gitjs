const cmd_preline = "git-shell $> ";

var stdin = process.stdin;
var stdout = process.stdout;

stdin.setEncoding('utf-8');
stdout.setEncoding('utf-8');

stdout.write(cmd_preline);

stdin.on('data', function(data) {
	if(data == 'exit\n') {
		// This exists for cmdline execution
		stdout.write("[ Exiting ]\n");
		process.exit();
	} else
	{
		stdout.write(data);
		stdout.write(cmd_preline);
	}
});
