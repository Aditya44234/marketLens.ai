# MarketLens.ai

**AI-powered Market Analytics Platform for Real Estate Data**

Website: [https://market-lens-ai.vercel.app](https://market-lens-ai.vercel.app)

---

## What is MarketLens.ai?

MarketLens.ai is a modern web app that helps users turn their raw Excel (or .xls/.xlsx) real-estate data into actionable insights, instantly!  
Ask a natural language question about your local market (like “Give me analysis of Wakad” or “Compare Ambegaon Budruk and Aundh demand trends”) and get back beautiful charts, key stats, and an executive summary within seconds. No data science skills needed.  
It’s perfect for realtors, analysts, investors, builders, or anyone with property data and tough questions.

---

##  Key Features

- **AI Query Engine**  
  Type your question in plain English or click example prompts — get tailored, on-point answers.
- **Excel File Upload**  
  Drag-and-drop or click to upload your .xlsx/.xls file (property sales, price trends, whatever you got ready!)
- **Interactive, Example-Driven UI**  
  Pick example queries or easily type your own; hint system guides you to the supported types.
- **Smart Summary Generation**  
  AI writes a clean market summary, with bolded key points, lists, and even comparison tables, right there.  
- **Trends Chart & Data Table**  
  Visualize trends instantly with a responsive line chart, see all your filtered data in a table view.
- **Quick Stats Panel**  
  Instantly see record count, data points, and coverage.
- **Save as PDF**  
  Download your full report—including summary, chart, and data table—as a slick PDF!
- **Responsive & Themed**  
  Works great on phone, tablet, or big desktop monitor; switch light/dark theme on the fly.

---

##  Live Demo

Try it now: [https://market-lens-ai.vercel.app](https://market-lens-ai.vercel.app)

---

## Example Queries

- “Give me analysis of Wakad”
- “Compare Ambegaon Budruk and Aundh demand trends”
- “Show price growth for Akurdi over the last 3 years”

*(Server-side AI currently supports queries similar to these. The UI guides users for best results!)*

---

##  Tech Stack

- **Frontend**: React + Tailwind CSS
- **State & API**: React Query, React Router
- **Visualization**: Chart.js (via react-chartjs-2)
- **Export to PDF**: jsPDF & html2canvas
- **Icons**: Heroicons
- **Deploy**: Vercel (super fast & simple)

---

##  How to Run Locally

1. **Clone this repo**
```
git clone https://github.com/your-username/market-lens-ai.git
cd market-lens-ai
```


2. **Install dependencies**

```
npm install
or
yarn
```


3. **Start local dev server**

```
npm run dev
or
yarn dev
```


4. **Visit**

Browse [http://localhost:5173](http://localhost:5173) (or as printed in your terminal)

---

##  How To Use (as a User)

1. **Open the app** ([link](https://market-lens-ai.vercel.app))
2. Upload your Excel (.xlsx or .xls) file — make sure it’s got columns like location, date, price, etc.
3. Pick an example prompt (or type your own question), e.g., “Show price growth for Akurdi over the last 3 years”
4. Click “Analyze”
5. Wait a moment while the AI chews through your data (usually just a few seconds!)
6. Browse your summary, chart, stats and data table
7. Want to share or print? Download your custom report as PDF 👏

---

##  Screenshots

**Homepage (Welcome & Upload):**  
![Homepage](https://usual-scarlet-cp1zzkmmw1.edgeone.app/WhatsApp%20Image%202025-11-20%20at%2000.20.46_c01874f3.jpg)

**Analysis Summary:**  
![Analysis Summary](https://usual-scarlet-cp1zzkmmw1.edgeone.app/WhatsApp%20Image%202025-11-20%20at%2000.19.51_306c545d.jpg)

**Trends Chart:**  
![Chart](https://usual-scarlet-cp1zzkmmw1.edgeone.app/WhatsApp%20Image%202025-11-20%20at%2000.20.10_c58bebc0.jpg)

**Data Table:**  
![Table](https://usual-scarlet-cp1zzkmmw1.edgeone.app/WhatsApp%20Image%202025-11-20%20at%2000.19.51_306c545d.jpg)


## 👨‍💻 For Developers

- Components are modular (see `/components`)
- Major views: `InteractionPage`, `ReportPage`
- Summary pre-processing: see `formatSummary.js` in `/utils`, supports markdown, bullet points, and markdown tables!
- File upload supports `.xlsx` and `.xls` only
- Report export is screenshot-based (html2canvas + jsPDF) for high-fidelity, but you can extend to more advanced PDF tables if needed

---

## ⚠️ FAQ & Notes

- **What types of queries work?**
- Stick to the provided query samples for best results; server-side AI extracts insights using prompt logic tuned for those.
- **Why only Excel files?**
- That’s what most real estate pros/exporters use, and it’s what we parse best right now.
- **Is my file/data sent anywhere?**
- Only to the backend AI API for analysis (see backend repo for logic/policy).
- **Can I use it with CSVs?**
- Currently not directly, but converting to Excel and uploading is super simple.

---

## 🙏 Credits & Acknowledgements

- Built with ❤️ by Aditya Joshi and open source contributors
- Uses open-source packages (see package.json!)
- Props to all testers and realtors who gave feedback

---

## 📫 Feedback & Issues

Got a bug/feature request/idea?  
[Open an issue](https://github.com/your-username/market-lens-ai/issues) or email me at youremail@example.com

---

## ⭐️ Give it a Try!

👉 [https://market-lens-ai.vercel.app](https://market-lens-ai.vercel.app)

---

Thanks for checking out MarketLens.ai — hope it helps you make smarter, faster real estate decisions!  


