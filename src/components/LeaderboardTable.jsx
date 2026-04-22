import { useState, useMemo } from 'react'

const RANK_STYLES = [
  'bg-brand-gold/20 border-l-4 border-brand-gold',
  'bg-gray-100 border-l-4 border-gray-400',
  'bg-orange-50 border-l-4 border-orange-400',
]

function RankBadge({ rank }) {
  const labels = ['🥇', '🥈', '🥉']
  if (rank < 3) return <span className="text-lg">{labels[rank]}</span>
  return <span className="font-body text-text-secondary text-sm">{rank + 1}</span>
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
      <div className="hidden md:block overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm font-body">
          <thead className="bg-surface border-b border-border">
            <tr>
              <th className="text-left px-4 py-3 text-text-secondary font-medium">Rank</th>
              <th className="text-left px-4 py-3 text-text-secondary font-medium">Name</th>
              <th className="text-right px-4 py-3 text-text-secondary font-medium">Avg Score</th>
              <th className="text-right px-4 py-3 text-text-secondary font-medium">Tests Taken</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r, i) => {
              const globalRank = rows.indexOf(r)
              return (
                <tr key={r.id} className={`${RANK_STYLES[globalRank] ?? ''} bg-surface even:bg-ivory`}>
                  <td className="px-4 py-3 w-16"><RankBadge rank={globalRank} /></td>
                  <td className="px-4 py-3 text-text-primary font-medium">{r.name}</td>
                  <td className="px-4 py-3 text-right text-text-primary">{r.avg.toFixed(1)}</td>
                  <td className="px-4 py-3 text-right text-text-secondary">{r.taken}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {filtered.map((r, i) => {
          const globalRank = rows.indexOf(r)
          return (
            <div key={r.id} className={`rounded-lg p-4 border border-border bg-surface ${RANK_STYLES[globalRank] ?? ''}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="font-body font-semibold text-text-primary">{r.name}</span>
                <RankBadge rank={globalRank} />
              </div>
              <div className="flex gap-6 text-sm font-body text-text-secondary mt-1">
                <span>Avg: <span className="text-text-primary font-medium">{r.avg.toFixed(1)}</span></span>
                <span>Tests: <span className="text-text-primary font-medium">{r.taken}</span></span>
              </div>
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
      <div className="hidden md:block overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm font-body">
          <thead className="bg-surface border-b border-border">
            <tr>
              <th className="text-left px-4 py-3 text-text-secondary font-medium">Rank</th>
              <th className="text-left px-4 py-3 text-text-secondary font-medium">Name</th>
              <th className="text-right px-4 py-3 text-text-secondary font-medium">Score</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => {
              const globalRank = rows.indexOf(r)
              return (
                <tr key={r.id} className={`${RANK_STYLES[globalRank] ?? ''} bg-surface even:bg-ivory`}>
                  <td className="px-4 py-3 w-16"><RankBadge rank={globalRank} /></td>
                  <td className="px-4 py-3 text-text-primary font-medium">{r.name}</td>
                  <td className="px-4 py-3 text-right text-text-primary">{r.score}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {filtered.map((r) => {
          const globalRank = rows.indexOf(r)
          return (
            <div key={r.id} className={`rounded-lg p-4 border border-border bg-surface ${RANK_STYLES[globalRank] ?? ''}`}>
              <div className="flex items-center justify-between">
                <span className="font-body font-semibold text-text-primary">{r.name}</span>
                <div className="flex items-center gap-3">
                  <span className="font-body text-text-primary font-medium">{r.score}</span>
                  <RankBadge rank={globalRank} />
                </div>
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
          className={`font-body text-sm px-4 py-2 rounded border transition-colors ${
            selectedTest === null
              ? 'bg-brand-blue text-surface border-brand-blue'
              : 'bg-surface text-text-primary border-border hover:border-brand-blue'
          }`}
        >
          Overall
        </button>
        {sortedTests.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelectedTest(t.id)}
            className={`font-body text-sm px-4 py-2 rounded border transition-colors ${
              selectedTest === t.id
                ? 'bg-brand-blue text-surface border-brand-blue'
                : 'bg-surface text-text-primary border-border hover:border-brand-blue'
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
        className="font-body text-sm w-full max-w-xs px-4 py-2 border border-border rounded bg-surface text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-blue"
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
