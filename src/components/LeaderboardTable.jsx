import { useState, useMemo } from 'react'

const GRADE_COLOR = (score) => {
  if (score >= 90) return 'text-emerald-600'
  if (score >= 80) return 'text-green-600'
  if (score >= 70) return 'text-brand-teal'
  if (score >= 60) return 'text-yellow-600'
  return 'text-red-500'
}

const GRADE_BAR = (score) => {
  if (score >= 90) return 'bg-emerald-500'
  if (score >= 80) return 'bg-green-500'
  if (score >= 70) return 'bg-brand-teal'
  if (score >= 60) return 'bg-yellow-500'
  return 'bg-red-400'
}

const TOP3_ROW = [
  'bg-gradient-to-r from-brand-gold/20 to-transparent border-l-4 border-brand-gold',
  'bg-gradient-to-r from-slate-200/60 to-transparent border-l-4 border-slate-400',
  'bg-gradient-to-r from-orange-100/60 to-transparent border-l-4 border-orange-400',
]

function GoldMedal() {
  return (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
      <circle cx="16" cy="20" r="10" fill="#F5C842" stroke="#C9A84C" strokeWidth="1.5" />
      <circle cx="16" cy="20" r="7" fill="#FFE066" />
      <text x="16" y="25" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#9A6F00">1</text>
      <path d="M11 11 L9 4 L16 7 L23 4 L21 11" fill="#C9A84C" stroke="#9A6F00" strokeWidth="0.8" strokeLinejoin="round" />
    </svg>
  )
}

function SilverMedal() {
  return (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
      <circle cx="16" cy="20" r="10" fill="#B0B8C1" stroke="#8A9099" strokeWidth="1.5" />
      <circle cx="16" cy="20" r="7" fill="#D8DEE4" />
      <text x="16" y="25" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#5A6370">2</text>
      <path d="M11 11 L9 4 L16 7 L23 4 L21 11" fill="#8A9099" stroke="#5A6370" strokeWidth="0.8" strokeLinejoin="round" />
    </svg>
  )
}

function BronzeMedal() {
  return (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
      <circle cx="16" cy="20" r="10" fill="#CD7F32" stroke="#A0622A" strokeWidth="1.5" />
      <circle cx="16" cy="20" r="7" fill="#E8A96A" />
      <text x="16" y="25" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#7A4A1A">3</text>
      <path d="M11 11 L9 4 L16 7 L23 4 L21 11" fill="#A0622A" stroke="#7A4A1A" strokeWidth="0.8" strokeLinejoin="round" />
    </svg>
  )
}

function RankBadge({ rank }) {
  if (rank === 0) return <GoldMedal />
  if (rank === 1) return <SilverMedal />
  if (rank === 2) return <BronzeMedal />
  return (
    <span className="w-7 h-7 flex items-center justify-center font-body font-semibold text-sm text-text-secondary">
      {rank + 1}
    </span>
  )
}

function ScoreBar({ score, max = 100 }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-20 h-2 rounded-full bg-border overflow-hidden hidden sm:block">
        <div
          className={`h-full rounded-full ${GRADE_BAR(score)} transition-all duration-500`}
          style={{ width: `${(score / max) * 100}%` }}
        />
      </div>
      <span className={`font-body font-semibold text-sm tabular-nums ${GRADE_COLOR(score)}`}>
        {typeof score === 'number' ? `${score.toFixed(1)}%` : score}
      </span>
    </div>
  )
}

function OverallTable({ members, tests, search }) {
  const rows = useMemo(() => {
    return members
      .map((m) => {
        const scores = tests.flatMap((t) =>
          t.scores.filter((s) => s.memberId === m.id).map((s) => s.score)
        )
        const avg = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : null
        return { id: m.id, name: m.name, avg, taken: scores.length }
      })
      .filter((r) => r.avg !== null)
      .sort((a, b) => b.avg - a.avg)
  }, [members, tests])

  const filtered = useMemo(
    () => rows.filter((r) => r.name.toLowerCase().includes(search.toLowerCase())),
    [rows, search]
  )

  if (filtered.length === 0) {
    return (
      <p className="font-body text-text-secondary text-center py-12">
        {search ? 'No members match your search.' : 'No leaderboard data yet. Check back soon!'}
      </p>
    )
  }

  return (
    <>
      {/* Desktop table */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-border shadow-sm">
        <table className="w-full text-sm font-body">
          <thead>
            <tr className="bg-text-primary text-surface">
              <th className="text-left px-5 py-4 font-semibold tracking-wide text-xs uppercase">Rank</th>
              <th className="text-left px-5 py-4 font-semibold tracking-wide text-xs uppercase">Name</th>
              <th className="text-right px-5 py-4 font-semibold tracking-wide text-xs uppercase">Avg Score</th>
              <th className="text-right px-5 py-4 font-semibold tracking-wide text-xs uppercase">Tests</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => {
              const globalRank = rows.indexOf(r)
              return (
                <tr key={r.id} className={`border-b border-border last:border-0 transition-colors hover:bg-ivory/80 ${TOP3_ROW[globalRank] ?? 'bg-surface even:bg-ivory/40'}`}>
                  <td className="px-5 py-3.5 w-16"><RankBadge rank={globalRank} /></td>
                  <td className="px-5 py-3.5 text-text-primary font-semibold">{r.name}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex justify-end"><ScoreBar score={r.avg} /></div>
                  </td>
                  <td className="px-5 py-3.5 text-right text-text-secondary">{r.taken}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-2.5">
        {filtered.map((r) => {
          const globalRank = rows.indexOf(r)
          return (
            <div key={r.id} className={`rounded-xl p-4 border border-border shadow-sm ${TOP3_ROW[globalRank] ?? 'bg-surface'}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <RankBadge rank={globalRank} />
                  <span className="font-body font-semibold text-text-primary">{r.name}</span>
                </div>
                <ScoreBar score={r.avg} />
              </div>
              <p className="font-body text-xs text-text-secondary ml-9">{r.taken} test{r.taken !== 1 ? 's' : ''} taken</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

function PerTestTable({ members, test, search }) {
  const rows = useMemo(() => {
    return test.scores
      .map((s) => {
        const member = members.find((m) => m.id === s.memberId)
        return member ? { id: member.id, name: member.name, score: s.score } : null
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
  }, [members, test])

  const filtered = useMemo(
    () => rows.filter((r) => r.name.toLowerCase().includes(search.toLowerCase())),
    [rows, search]
  )

  if (filtered.length === 0) {
    return (
      <p className="font-body text-text-secondary text-center py-12">
        {search ? 'No members match your search.' : 'No scores for this test yet.'}
      </p>
    )
  }

  return (
    <>
      {/* Desktop table */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-border shadow-sm">
        <table className="w-full text-sm font-body">
          <thead>
            <tr className="bg-text-primary text-surface">
              <th className="text-left px-5 py-4 font-semibold tracking-wide text-xs uppercase">Rank</th>
              <th className="text-left px-5 py-4 font-semibold tracking-wide text-xs uppercase">Name</th>
              <th className="text-right px-5 py-4 font-semibold tracking-wide text-xs uppercase">Score</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => {
              const globalRank = rows.indexOf(r)
              return (
                <tr key={r.id} className={`border-b border-border last:border-0 transition-colors hover:bg-ivory/80 ${TOP3_ROW[globalRank] ?? 'bg-surface even:bg-ivory/40'}`}>
                  <td className="px-5 py-3.5 w-16"><RankBadge rank={globalRank} /></td>
                  <td className="px-5 py-3.5 text-text-primary font-semibold">{r.name}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex justify-end"><ScoreBar score={r.score} /></div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-2.5">
        {filtered.map((r) => {
          const globalRank = rows.indexOf(r)
          return (
            <div key={r.id} className={`rounded-xl p-4 border border-border shadow-sm ${TOP3_ROW[globalRank] ?? 'bg-surface'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <RankBadge rank={globalRank} />
                  <span className="font-body font-semibold text-text-primary">{r.name}</span>
                </div>
                <ScoreBar score={r.score} />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export function LeaderboardTable({ data }) {
  const [selectedTest, setSelectedTest] = useState(null)
  const [search, setSearch] = useState('')

  const { members, tests, lastUpdated } = data

  const sortedTests = useMemo(
    () => [...tests].sort((a, b) => new Date(b.date) - new Date(a.date)),
    [tests]
  )

  const isEmpty = members.length === 0 && tests.length === 0

  return (
    <div className="space-y-6">
      {/* Test selector */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTest(null)}
          className={`font-body text-sm px-4 py-2 rounded-full border transition-colors ${
            selectedTest === null
              ? 'bg-brand-blue text-surface border-brand-blue shadow-sm'
              : 'bg-surface text-text-primary border-border hover:border-brand-blue hover:text-brand-blue'
          }`}
        >
          Overall
        </button>
        {sortedTests.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelectedTest(t.id)}
            className={`font-body text-sm px-4 py-2 rounded-full border transition-colors ${
              selectedTest === t.id
                ? 'bg-brand-blue text-surface border-brand-blue shadow-sm'
                : 'bg-surface text-text-primary border-border hover:border-brand-blue hover:text-brand-blue'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="font-body text-sm w-full max-w-xs px-4 py-2.5 border border-border rounded-full bg-surface text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-colors"
      />

      {/* Table / empty state */}
      {isEmpty ? (
        <p className="font-body text-text-secondary text-center py-16">
          No leaderboard data yet. Check back after the first quiz!
        </p>
      ) : selectedTest === null ? (
        <OverallTable members={members} tests={tests} search={search} />
      ) : (
        <PerTestTable
          members={members}
          test={tests.find((t) => t.id === selectedTest)}
          search={search}
        />
      )}

      {/* Last updated */}
      {lastUpdated && (
        <p className="font-body text-text-secondary text-xs text-right">
          Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      )}
    </div>
  )
}
