all:
	echo "scsynth-wasm-builds"

update-jssc3:
	(cd ~/sw/jssc3/ts ; make dist)
	cp ~/sw/jssc3/dist/jssc3.js lib/jssc3/dist

update-spl:
	(cd ~/sw/spl/ts ; make dist)
	cp ~/sw/spl/dist/sl.js lib/spl/dist
	(cd ~/sw/spl/sl ; make)
	cp ~/sw/spl/.cache/*.js lib/spl/.cache
	cp ~/sw/spl/Package/Meta/PackageIndex.sl lib/spl/Package/Meta/
	cp ~/sw/spl/config/preferences.json lib/spl/config

push-all:
	r.gitlab-push.sh scsynth-wasm-builds
	r.github-push.sh scsynth-wasm-builds
