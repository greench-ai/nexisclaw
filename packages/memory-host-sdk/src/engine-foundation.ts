// Real workspace contract for memory engine foundation concerns.

export {
  resolveAgentContextLimits,
  resolveAgentDir,
  resolveAgentWorkspaceDir,
  resolveDefaultAgentId,
  resolveSessionAgentId,
} from "./host/nexusclaw-runtime-agent.js";
export {
  resolveMemorySearchConfig,
  resolveMemorySearchSyncConfig,
  type ResolvedMemorySearchConfig,
  type ResolvedMemorySearchSyncConfig,
} from "./host/nexusclaw-runtime-agent.js";
export { parseDurationMs } from "./host/nexusclaw-runtime-config.js";
export { loadConfig } from "./host/nexusclaw-runtime-config.js";
export { resolveStateDir } from "./host/nexusclaw-runtime-config.js";
export { resolveSessionTranscriptsDirForAgent } from "./host/nexusclaw-runtime-config.js";
export {
  hasConfiguredSecretInput,
  normalizeResolvedSecretInputString,
} from "./host/nexusclaw-runtime-config.js";
export { root } from "./host/nexusclaw-runtime-io.js";
export { isPathInside } from "./host/fs-utils.js";
export { createSubsystemLogger } from "./host/nexusclaw-runtime-io.js";
export { detectMime } from "./host/nexusclaw-runtime-io.js";
export { resolveGlobalSingleton } from "./host/nexusclaw-runtime-io.js";
export { onSessionTranscriptUpdate } from "./host/nexusclaw-runtime-session.js";
export { splitShellArgs } from "./host/nexusclaw-runtime-io.js";
export { runTasksWithConcurrency } from "./host/nexusclaw-runtime-io.js";
export {
  shortenHomeInString,
  shortenHomePath,
  resolveUserPath,
  truncateUtf16Safe,
} from "./host/nexusclaw-runtime-io.js";
export type { NexusClawConfig } from "./host/nexusclaw-runtime-config.js";
export type { SessionSendPolicyConfig } from "./host/nexusclaw-runtime-config.js";
export type { SecretInput } from "./host/nexusclaw-runtime-config.js";
export type {
  MemoryBackend,
  MemoryCitationsMode,
  MemoryQmdConfig,
  MemoryQmdIndexPath,
  MemoryQmdMcporterConfig,
  MemoryQmdSearchMode,
} from "./host/nexusclaw-runtime-config.js";
export type { MemorySearchConfig } from "./host/nexusclaw-runtime-config.js";
