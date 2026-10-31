#!/bin/sh
# Maakt de app klaar voor Netlify: kopieert de bestanden en vult de Supabase-gegevens in.
# SUPABASE_URL en SUPABASE_ANON_KEY staan in Netlify › Site configuration › Environment variables.
set -e
if [ -z "$SUPABASE_URL" ] || [ -z "$SUPABASE_ANON_KEY" ]; then
  echo "Let op: SUPABASE_URL en/of SUPABASE_ANON_KEY ontbreken in Netlify. De app wordt online gezet maar kan nog niet met de server praten."
fi
VERSION="$(date -u +%Y%m%d)-$(echo "${COMMIT_REF:-dev}" | cut -c1-7)"
rm -rf _site && mkdir -p _site
cp -r index.html manifest.webmanifest sw.js css js vendor icons _site/
printf "window.BIJEEN_CONFIG = { url: '%s', anonKey: '%s' };\nwindow.BIJEEN_VERSION = '%s';\n" "${SUPABASE_URL%/}" "$SUPABASE_ANON_KEY" "$VERSION" > _site/js/config.js
sed -i "s/const VERSION = 'dev';/const VERSION = '${VERSION}';/" _site/sw.js
echo "Bijeen $VERSION klaar"
