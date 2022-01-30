we all freakz production project

Note that to push to vercel, you should run:
git add .
git commit -m "your message here"
git push (might need to specify origin main)

THEN these commands:
expo build:web
cd web-build
vercel

this is from expo's documentation: https://docs.expo.dev/distribution/publishing-websites/
