export default function ReportFooter() {
    return (
        <footer className="document-container px-8 py-16 mt-12 border-t border-zinc-200">
            <div className="flex justify-between items-center text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-mono">
                <span>Confidential Report</span>
                <span className="opacity-70">Generated locally via Llama3</span>
                <span>© 2024 GPA</span>
            </div>
        </footer>
    );
}
