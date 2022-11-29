all:
	echo "scsynth-wasm-builds"

update-jssc3:
	(cd ~/sw/jssc3/ts ; make)
	cp ~/sw/jssc3/dist/jssc3.js jssc3/dist

update-spl:
	(cd ~/sw/spl/ts ; make)
	cp ~/sw/spl/dist/sl.js spl/dist

push-all:
	r.gitlab-push.sh scsynth-wasm-builds
	r.github-push.sh scsynth-wasm-builds
