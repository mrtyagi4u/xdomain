echo "=== XDomain Deployment to Vercel ==="

echo ""
echo "Step 1: Navigate to project directory"
cd xdomain

echo ""
echo "Step 2: Install dependencies (if needed)"
call npm install

echo ""
echo "Step 3: Build the project to verify"
call npm run build

echo ""
echo "=== Deployment Instructions ==="
echo ""
echo "Option A: Deploy via Vercel CLI"
echo "  1. Install Vercel CLI: npm install -g vercel"
echo "  2. Login: vercel login"
echo "  3. Deploy: vercel --prod"
echo "  4. Add domain: vercel domains add xdomain.pro"
echo ""
echo "Option B: Deploy via Vercel Web UI"
echo "  1. Go to https://vercel.com/new"
echo "  2. Import your GitHub/GitLab/Bitbucket repository"
echo "  3. Vercel will auto-detect Next.js and deploy"
echo "  4. Add custom domain xdomain.pro in project Settings > Domains"
echo ""
echo "=== DNS Configuration at Hostinger ==="
echo ""
echo "After deploying to Vercel, update DNS at Hostinger:"
echo "  1. Log into Hostinger hPanel"
echo "  2. Go to Domains > Manage > DNS Zone Editor"
echo "  3. Delete existing A records for @ and www"
echo "  4. Add Vercel DNS records:"
echo "     - A record: @ -> 76.76.21.21"
echo "     - CNAME record: www -> cname.vercel-dns.com"
echo ""
echo "Wait for DNS propagation (can take up to 48 hours)"
echo ""
echo "=== Ready to deploy ==="
pause