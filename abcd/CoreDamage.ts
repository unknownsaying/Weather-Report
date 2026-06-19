// ==============================================
//  CORE DAMAGE: REALITY CORRUPTION ENGINE
// ==============================================

/**
 * Core Damage represents irreversible type system corruption
 * Once applied, types cannot return to their original state
 */

type RealityLevel = 'stable' | 'warped' | 'corrupted' | 'void';

interface CoreDamage<T extends RealityLevel = 'stable'> {
  readonly severity: T;
  readonly irreversible: true;
  readonly propagation: 'exponential' | 'linear' | 'cascade';
}