// Focused runtime contract for memory plugin config/state/helpers.

export type { AnyAgentTool } from "./host/nexusclaw-runtime-agent.js";
export { resolveCronStyleNow } from "./host/nexusclaw-runtime-agent.js";
export { DEFAULT_PI_COMPACTION_RESERVE_TOKENS_FLOOR } from "./host/nexusclaw-runtime-agent.js";
export { resolveDefaultAgentId, resolveSessionAgentId } from "./host/nexusclaw-runtime-agent.js";
export { resolveMemorySearchConfig } from "./host/nexusclaw-runtime-agent.js";
export {
  asToolParamsRecord,
  jsonResult,
  readNumberParam,
  readStringParam,
} from "./host/nexusclaw-runtime-agent.js";
export { SILENT_REPLY_TOKEN } from "./host/nexusclaw-runtime-session.js";
export { parseNonNegativeByteSize } from "./host/nexusclaw-runtime-config.js";
export {
  getRuntimeConfig,
  /** @deprecated Use getRuntimeConfig(), or pass the already loaded config through the call path. */
  loadConfig,
} from "./host/nexusclaw-runtime-config.js";
export { resolveStateDir } from "./host/nexusclaw-runtime-config.js";
export { resolveSessionTranscriptsDirForAgent } from "./host/nexusclaw-runtime-config.js";
export { emptyPluginConfigSchema } from "./host/nexusclaw-runtime-memory.js";
export {
  buildActiveMemoryPromptSection,
  getMemoryCapabilityRegistration,
  listActiveMemoryPublicArtifacts,
} from "./host/nexusclaw-runtime-memory.js";
export { parseAgentSessionKey } from "./host/nexusclaw-runtime-agent.js";
export type { NexusClawConfig } from "./host/nexusclaw-runtime-config.js";
export type { MemoryCitationsMode } from "./host/nexusclaw-runtime-config.js";
export type {
  MemoryFlushPlan,
  MemoryFlushPlanResolver,
  MemoryPluginCapability,
  MemoryPluginPublicArtifact,
  MemoryPluginPublicArtifactsProvider,
  MemoryPluginRuntime,
  MemoryPromptSectionBuilder,
} from "./host/nexusclaw-runtime-memory.js";
export type { NexusClawPluginApi } from "./host/nexusclaw-runtime-memory.js";
