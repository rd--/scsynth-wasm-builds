all:
	echo "scsynth-wasm-builds"

update-jssc3:
	(cd ~/sw/jssc3/ts ; make)
	cp ~/sw/jssc3/js/jssc3.js jssc3/js

update-spl:
	(cd ~/sw/spl/ts ; make)
	cp ~/sw/spl/js/sl.js spl/js

push-all:
	r.gitlab-push.sh scsynth-wasm-builds
	r.github-push.sh scsynth-wasm-builds
